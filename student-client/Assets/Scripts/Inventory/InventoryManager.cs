using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.Networking;
using System.Collections;
using UnityEngine.SceneManagement;
using System.Text;

public class InventoryManager : MonoBehaviour
{
    [Header("UI References")]
    [SerializeField] private Button openInventoryBtn;
    [SerializeField] private Toggle moveToggle;
    [SerializeField] private GameObject inventoryArea;

    // Use this for initialization
    void Start()
    {
        inventoryArea.active = false;
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void onInventoryClick()
    {
        inventoryArea.active = !inventoryArea.active;
    }
}
