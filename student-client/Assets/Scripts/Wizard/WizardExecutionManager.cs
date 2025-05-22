using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using TMPro;
using System;
using Newtonsoft.Json;
using static LicentaUtils.Environment;
using static LicentaUtils.Util;

public class WizardExecutionManager : MonoBehaviour
{
    // Singleton pattern for easy access
    public static WizardExecutionManager Instance { get; private set; }

    private string apiBaseUrl = getBackendBaseUrl();
    private string authTokenKey = AUTH_TOKEN; //"auth_token"; // PlayerPrefs key for the token

    [Header("UI References Preview")]
    [SerializeField] private GameObject wizardExecutionPanel;
    [SerializeField] private TMP_Text wizardTitleText;
    [SerializeField] private TMP_Text wizardAimText;
    [SerializeField] private Transform stepsContainer;
    [SerializeField] private GameObject stepPrefab;
    [SerializeField] private Button backButton;
    [SerializeField] private Button executeButton;
    [SerializeField] private GameObject loadingIndicator;
    [SerializeField] private TMP_Text statusText;

    [Header("UI References Steps")]
    [SerializeField] private GameObject wizardStepsExecutionPanel; // this will hold some details about current step, visible at any moment for student
    [SerializeField] private GameObject placuta; //arduino board, aka arduino-due-manual
    [SerializeField] private Button nextButton;

    [Header("UI Step Details")]
    [SerializeField] private TMP_Text descriptionText;
    [SerializeField] private TMP_Text targetText;
    [SerializeField] private TMP_Text actionText;

    Renderer renderer;
    private Color originalColor;
    private bool nextClicked;
    
    private WizardManager.WizardResponseDTO currentWizard;
    private List<StepIndicator> stepIndicators = new List<StepIndicator>();

    private void Awake()
    {
        // Singleton setup
        if (Instance == null)
        {
            Instance = this;
        }
        else if (Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        // Hide panel on start
        if (wizardExecutionPanel != null)
            wizardExecutionPanel.SetActive(false);

        if (loadingIndicator != null)
            loadingIndicator.SetActive(false);

        if (statusText != null)
            statusText.gameObject.SetActive(false);

        // Set up button listeners
        if (backButton != null)
            backButton.onClick.AddListener(CloseWizardExecution);

        if (executeButton != null)
            executeButton.onClick.AddListener(ExecuteCurrentWizard);

        if (nextButton != null)
            nextButton.onClick.AddListener(OnNextClicked);

        // Dezactiveaza acel panel pana cand apas pe Execute
        if (wizardStepsExecutionPanel != null)
            wizardStepsExecutionPanel.SetActive(false);

    }

    public void StartWizard(WizardManager.WizardResponseDTO wizard)
    {
        currentWizard = wizard;
        stepIndicators.Clear();

        // Update UI
        if (wizardTitleText != null)
            wizardTitleText.text = wizard.subtitle;

        if (wizardAimText != null)
            wizardAimText.text = wizard.aim;

        // Clear existing steps
        foreach (Transform child in stepsContainer)
        {
            Destroy(child.gameObject);
        }

        // Create step indicators
        if (wizard.pages != null && stepPrefab != null)
        {
            wizard.pages.Sort((a, b) => a.step.CompareTo(b.step)); // Ensure steps are in order

            foreach (var page in wizard.pages)
            {
                GameObject stepObj = Instantiate(stepPrefab, stepsContainer);
                StepIndicator indicator = stepObj.GetComponent<StepIndicator>();
                if (indicator != null)
                {
                    indicator.Initialize(page.step, page.target, page.description, page.action);
                    stepIndicators.Add(indicator);
                }
            }
        }

        // Show the panel
        if (wizardExecutionPanel != null)
            wizardExecutionPanel.SetActive(true);

        if (statusText != null)
        {
            statusText.text = "Ready to execute";
            statusText.color = Color.green;
            statusText.gameObject.SetActive(true);
        }

        // Enable execute button
        if (executeButton != null)
            executeButton.interactable = true;
    }

    private void CloseWizardExecution()
    {
        if (wizardExecutionPanel != null)
            wizardExecutionPanel.SetActive(false);
    }

    private void ExecuteCurrentWizard()
    {
        Debug.Log($"Executing wizard: {currentWizard.subtitle} (ID: {currentWizard.wizardId})");

        wizardExecutionPanel.SetActive(false);
        // Disable execute button to prevent multiple executions
        if (executeButton != null)
        {
            executeButton.interactable = false;
        }
            

        // Reset step indicators
        foreach (var indicator in stepIndicators)
        {
            indicator.SetCompletionStatus(false);
        }

        //wizardTitleText.Enable(false);
        //wizardAimText.IsActive(false);
        currentWizard.pages.Sort((a, b) => a.step.CompareTo(b.step)); // Ensure steps are in order

        StartCoroutine(ExecuteWizardSteps());
    }

    private IEnumerator ExecuteWizardSteps()
    {
        // Verificare: nu exista pasi in Wizard-ul selectat
        if (currentWizard.pages == null || currentWizard.pages.Count == 0)
        {
            if (statusText != null)
            {
                statusText.text = "No steps to execute";
                statusText.color = Color.yellow;
            }

            // Re-enable execute button
            if (executeButton != null)
                executeButton.interactable = true;

            yield break;
        }


        //Posibil sa nu imi trebuiasca
        if (statusText != null)
        {
            statusText.text = "Executing wizard...";
            statusText.color = Color.white;
        }

        // Execute each step in sequence
        foreach (var page in currentWizard.pages)
        {
            Debug.Log($"Executing step {page.step}: {page.action} on {page.target}");

            if (statusText != null)
                statusText.text = $"Executing step {page.step} of {currentWizard.pages.Count}...";

            ExecuteStep2(page);

            // Wait for user to click "Next"
            nextClicked = false;
            yield return new WaitUntil(() => nextClicked);
        }

        // dezactivam panel-ul de executie
        wizardStepsExecutionPanel.SetActive(false);

    }

    /*** Logica:
        * Pentru fiecare pas var step
        * step.target ==(?) placuta.someChild.name
        * if found
        *  placuta.someChild.setColor = yellow
        *  maybe outline?
        *  sa palpaie, aka play with transparency?
        *  sageata deasupra obiectului => get Transform of someChild
        * sa ai butonu de next pregatit
    */
    private void ExecuteStep2(WizardManager.WizardPageResponseDTO page)
    {
        // activam panel-ul de executie
        wizardStepsExecutionPanel.SetActive(true);

        // set description, target and action texts
        descriptionText.text = page.description;
        targetText.text = page.target;
        actionText.text = page.action;

        string stepTarget = page.target;

        Transform child = childMatchingTarget(placuta.transform, stepTarget);

        if(null != child)
        {
            renderer = child.GetComponent<Renderer>();

            // Store the original color before changing it
            originalColor = renderer.material.color;

            // Change the color to yellow
            renderer.material.color = Color.yellow;
        }
        
    }

    private void OnNextClicked()
    {
        if (renderer != null)
        {
            renderer.material.color = originalColor;
        }

        nextClicked = true;
    }
}
