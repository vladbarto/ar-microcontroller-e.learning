using UnityEngine;
using UnityEngine.SceneManagement;

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
