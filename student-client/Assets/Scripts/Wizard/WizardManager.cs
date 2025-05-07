using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using TMPro;
using Newtonsoft.Json;
using UnityEngine.SceneManagement;
using static LicentaUtils.Environment;

public class WizardManager : MonoBehaviour
{
    
     private string apiBaseUrl = getBackendBaseUrl();
    //"http://10.132.87.98:2003/api";
    //"http://172.20.10.2:2003/api";
    //"http://192.168.0.102:2003/api";
    private string getWizardsEndpoint = string.Format("{0}{1}", WIZARD_CONTROLLER, WIZARD_GET_ALL_ENDPOINT); //"/wizard/v1/all-main";
    private string authTokenKey = AUTH_TOKEN; //"auth_token"; // PlayerPrefs key for the token

    [Header("UI References")]
    [SerializeField] private Transform cardContainer;
    [SerializeField] private GameObject wizardCardPrefab;
    [SerializeField] private GameObject loadingPanel;
    [SerializeField] private TMP_Text errorText;

    private int noOfCards = 0;
    private int cardIdx = 0;

    // Model classes to deserialize JSON response
    [Serializable]
    public class WizardResponseDTO
    {
        public string wizardId;
        public string subtitle;
        public string aim;
        public List<WizardPageResponseDTO> pages;
    }

    [Serializable]
    public class WizardPageResponseDTO
    {
        public string wizardPageId;
        public int step;
        public string target;
        public string description;
        public string action;
    }

    private void Start()
    {
        LoadWizards();
    }

    public void LoadWizards()
    {
        StartCoroutine(FetchWizards());
    }

    private IEnumerator FetchWizards()
    {
        // Show loading indicator
        if (loadingPanel != null)
            loadingPanel.SetActive(true);

        if (errorText != null)
            errorText.gameObject.SetActive(false);

        // Clear existing cards
        foreach (Transform child in cardContainer)
        {
            DestroyImmediate(child.gameObject);
        }

        yield return null;

        // Get the auth token from PlayerPrefs
        string authToken = PlayerPrefs.GetString(authTokenKey, "");

        if (string.IsNullOrEmpty(authToken))
        {
            Debug.LogError("Auth token not found in PlayerPrefs!");
            if (errorText != null)
            {
                errorText.text = "Authentication error. Please log in again.";
                errorText.gameObject.SetActive(true);
                //SceneManager.LoadScene("LoginScene");

            }

            if (loadingPanel != null)
                loadingPanel.SetActive(false);

            yield break;
        }

        // Create request
        string url = apiBaseUrl + getWizardsEndpoint;
        Debug.LogWarning("Url = " + url);
        using (UnityWebRequest webRequest = UnityWebRequest.Get(url))
        {
            // Add authorization header with the token
            webRequest.SetRequestHeader("Authorization", "Bearer " + authToken);
            webRequest.SetRequestHeader("Content-Type", "application/json");
            //webRequest.SetRequestHeader("Accept", "application/json");


            // Send request
            yield return webRequest.SendWebRequest();

            // Hide loading indicator
            if (loadingPanel != null)
                loadingPanel.SetActive(false);

            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError($"Error fetching wizards: {webRequest.error}");
                Debug.LogError($"Response code: {webRequest.responseCode}");
                Debug.LogError($"Response body: {webRequest.downloadHandler.text}");

                // Check specifically for auth errors (401 Unauthorized)
                if (webRequest.responseCode == 401)
                {
                    if (errorText != null)
                    {
                        errorText.text = "Authentication failed. Please log in again.";
                        errorText.gameObject.SetActive(true);
                    }
                    // You might want to trigger a re-login here
                    // HandleSessionExpired();
                }
                else
                {
                    if (errorText != null)
                    {
                        errorText.text = $"Failed to load wizards. {webRequest.error}";
                        errorText.gameObject.SetActive(true);
                    }
                }
                yield break;
            }

            try
            {
                // Parse response
                string jsonResponse = webRequest.downloadHandler.text;
                List<WizardResponseDTO> wizards = JsonConvert.DeserializeObject<List<WizardResponseDTO>>(jsonResponse);

                noOfCards = wizards.Count;
                // Create cards for each wizard
                foreach (WizardResponseDTO wizard in wizards)
                {
                    CreateWizardCard(wizard);
                }
            }
            catch (Exception e)
            {
                Debug.LogError($"Error parsing wizard data: {e.Message}");
                if (errorText != null)
                {
                    errorText.text = "Failed to parse wizard data.";
                    errorText.gameObject.SetActive(true);
                }
            }
        }
    }

    private void CreateWizardCard(WizardResponseDTO wizard)
    {
        GameObject cardObject = Instantiate(wizardCardPrefab, cardContainer);
        WizardCard card = cardObject.GetComponent<WizardCard>();

        this.cardIdx++;

        RectTransform rectTransform = cardObject.GetComponent<RectTransform>();
        if (rectTransform != null)
        {
            // Preserve original size by setting explicit anchors
            rectTransform.anchorMin = new Vector2(0, 0);
            rectTransform.anchorMax = new Vector2(0, 0);
            rectTransform.pivot = new Vector2(0.5f, 0.5f);

            // You may need to set an explicit size if the prefab doesn't have one
            // rectTransform.sizeDelta = new Vector2(200, 150);
        }

        float cardHeight = rectTransform.offsetMax.y - rectTransform.offsetMin.y;

        cardObject.transform.localPosition = new Vector3(353, - cardHeight * this.cardIdx, 0);
        cardObject.transform.localRotation = Quaternion.identity;
        cardObject.transform.localScale = Vector3.one;

        if (card != null)
        {
            Debug.Log("Card initialized with wizard: " + wizard.subtitle);

            card.Initialize(wizard, OnWizardCardClicked);
            cardObject.layer = LayerMask.NameToLayer("UI-Layer1");
        }
        else
        {
            Debug.LogError("WizardCard component missing from the prefab!");
        }
    }

    public void OnWizardCardClicked(WizardResponseDTO wizard)
    {
        Debug.Log($"Wizard clicked: {wizard.subtitle} (ID: {wizard.wizardId})");
        // Navigate to wizard execution view
        WizardExecutionManager.Instance.StartWizard(wizard);
        //DoWizarding.Instance.StartWizard(wizard);
    }

    // Optional: Add a refresh button in your UI and connect it to this method
    public void RefreshWizards()
    {
        LoadWizards();
    }
}