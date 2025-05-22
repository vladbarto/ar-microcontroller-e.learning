using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.Networking;
using System.Collections;
using UnityEngine.SceneManagement;
using System.Text;
using System.Text.RegularExpressions; // For extracting cookie values

public class Logout : MonoBehaviour
{
    // Use this for initialization
    public void DoLogout()
    {
        Debug.Log("logout pressed");
        LogoutCoroutine();
    }

    private void LogoutCoroutine()
    {
        PlayerPrefs.DeleteKey("auth_token");

        // Load Login scene
        SceneManager.LoadScene("LoginScene");
    }
}
