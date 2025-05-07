using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System;

public class WizardCard : MonoBehaviour
{
    [Header("UI Components")]
    [SerializeField] private TMP_Text titleText;
    [SerializeField] private TMP_Text aimText;
    [SerializeField] private TMP_Text stepsCountText;
    [SerializeField] private Button cardButton;

    private WizardManager.WizardResponseDTO wizardData;
    private Action<WizardManager.WizardResponseDTO> onClickCallback;

    public void Initialize(WizardManager.WizardResponseDTO wizard, Action<WizardManager.WizardResponseDTO> callback)
    {
        wizardData = wizard;
        onClickCallback = callback;

        // Set UI elements
        if (titleText != null)
            titleText.text = wizard.subtitle;

        if (aimText != null)
            aimText.text = wizard.aim;

        if (stepsCountText != null)
        {
            int stepCount = wizard.pages != null ? wizard.pages.Count : 0;
            stepsCountText.text = $"{stepCount} step{(stepCount != 1 ? "s" : "")}";
        }

        // Set up button click
        if (cardButton != null)
        {
            cardButton.onClick.RemoveAllListeners();
            cardButton.onClick.AddListener(OnCardClicked);
        }
    }

    private void OnCardClicked()
    {
        onClickCallback?.Invoke(wizardData);
    }
}