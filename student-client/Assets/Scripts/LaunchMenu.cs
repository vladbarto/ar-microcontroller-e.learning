using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LaunchMenu : MonoBehaviour
{
    [SerializeField] private GameObject chipMenu; // Assign in Inspector

    void Start()
    {
        if (chipMenu != null)
            chipMenu.SetActive(false); // Start disabled
    }

    public void ShowChipMenu()
    {
        if (chipMenu != null)
            chipMenu.SetActive(true); // Enable
    }

    public void HideChipMenu()
    {
        if (chipMenu != null)
            chipMenu.SetActive(false); // Disable
    }
}
