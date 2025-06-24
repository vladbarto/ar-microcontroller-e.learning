using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;

using static LicentaUtils.Environment;


public class ConnectToIP : MonoBehaviour
{
    [Header("Input elements")]
    [SerializeField] private TMP_InputField ip;

    [Header("Toggle panel")]
    [SerializeField] private Button toggleSaveIpButton;
    [SerializeField] private GameObject panel;

    [Header("Client response")]
    [SerializeField] private TMP_Text status;

    public void connect()
    {
        Debug.Log(string.Format("Save IP {0} to PlayerPrefs", ip.text));
        SetBackendIp(ip.text);
        status.SetText("IP saved");
        StartCoroutine(ClearAfterDelay(3.0f));
    }

    public void toggle() {
        panel.active = !panel.active;
    }

    IEnumerator ClearAfterDelay(float delay)
    {
        Debug.Log("coroutine launched");
        yield return new WaitForSeconds(delay);
        status.text = "";
    }

}
