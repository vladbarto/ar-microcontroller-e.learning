using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class StepIndicator : MonoBehaviour
{
    [SerializeField] private TMP_Text stepNumberText;
    [SerializeField] private TMP_Text targetText;
    [SerializeField] private TMP_Text descriptionText;
    [SerializeField] private TMP_Text actionText;
    [SerializeField] private Image statusIcon;
    [SerializeField] private Image backgroundPanel;

    [Header("Status Colors")]
    [SerializeField] private Color pendingColor = Color.gray;
    [SerializeField] private Color successColor = Color.green;
    [SerializeField] private Color failureColor = Color.red;
    [SerializeField] private Color highlightColor = new Color(0.9f, 0.9f, 0.2f);
    [SerializeField] private Color normalBackgroundColor = Color.white;
    [SerializeField] private Color highlightBackgroundColor = new Color(0.95f, 0.95f, 0.8f);

    private int stepNumber;
    private string target;
    private string description;
    private string action;
    private bool isCompleted = false;
    private bool isSuccess = false;

    public void Initialize(int step, string targetValue, string descriptionValue, string actionValue)
    {
        stepNumber = step;
        target = targetValue;
        description = descriptionValue;
        action = actionValue;

        // Update UI
        if (stepNumberText != null)
            stepNumberText.text = $"Step {step + 1}";

        if (targetText != null)
            targetText.text = targetValue;

        if (descriptionText != null)
            descriptionText.text = descriptionValue;

        if (actionText != null)
            actionText.text = actionValue;

        // Reset completion status
        SetCompletionStatus(false);
        SetHighlighted(false);
    }

    public void SetCompletionStatus(bool success)
    {
        isCompleted = true;
        isSuccess = success;

        if (statusIcon != null)
        {
            // Change icon color based on completion status
            statusIcon.color = success ? successColor : failureColor;
        }
    }

    public void SetHighlighted(bool highlighted)
    {
        if (backgroundPanel != null)
        {
            backgroundPanel.color = highlighted ? highlightBackgroundColor : normalBackgroundColor;
        }

        if (statusIcon != null && !isCompleted)
        {
            statusIcon.color = highlighted ? highlightColor : pendingColor;
        }
    }
}