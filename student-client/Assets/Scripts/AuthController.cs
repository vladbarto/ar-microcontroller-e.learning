using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.Networking;
using System.Collections;
using UnityEngine.SceneManagement;
using System.Text;
using System.Text.RegularExpressions; // For extracting cookie values

public class LoginManager : MonoBehaviour
{
    public TMP_InputField emailField;
    public TMP_InputField passwordField;
    public TextMeshProUGUI errorMessage;
    public Button loginButton;

    private string loginUrl = "http://192.168.0.111:2003/api/auth/v1/login"; // Your backend URL
    private string cookieHeader = "Set-Cookie"; // HTTP Header where cookies are received

    void Start()
    {
        loginButton.onClick.AddListener(AttemptLogin);
    }

    public void AttemptLogin()
    {
        errorMessage.text = ""; // Clear previous messages
        StartCoroutine(LoginCoroutine());
    }

    IEnumerator LoginCoroutine()
    {
        string jsonBody = "{\"email\":\"" + emailField.text + "\",\"password\":\"" + passwordField.text + "\"}";
        byte[] jsonBytes = Encoding.UTF8.GetBytes(jsonBody);

        using (UnityWebRequest request = new UnityWebRequest(loginUrl, "POST"))
        {
            request.uploadHandler = new UploadHandlerRaw(jsonBytes);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            request.SetRequestHeader("Accept", "*/*");

            yield return request.SendWebRequest();

            if (request.result == UnityWebRequest.Result.Success)
            {
                Debug.Log("Login Successful: " + request.downloadHandler.text);

                // Extract JWT Token from Cookies
                string cookie = request.GetResponseHeader(cookieHeader);
                if (!string.IsNullOrEmpty(cookie))
                {
                    string jwtToken = ExtractJwtFromCookie(cookie);
                    if (!string.IsNullOrEmpty(jwtToken))
                    {
                        PlayerPrefs.SetString("auth_token", jwtToken);
                        PlayerPrefs.Save();
                        Debug.Log("JWT Token Saved: " + jwtToken);
                    }
                    else
                    {
                        Debug.LogWarning("JWT Token not found in cookie.");
                    }
                }
                else
                {
                    Debug.LogWarning("No cookies received.");
                }

                // Load next scene after successful login
                SceneManager.LoadScene("SampleScene"); // Change to your actual scene name
            }
            else
            {
                Debug.LogError("Login Failed: " + request.error);
                errorMessage.text = "Invalid credentials. Please try again.";
            }
        }
    }

    // Extracts JWT from Set-Cookie header
    private string ExtractJwtFromCookie(string cookie)
    {
        Match match = Regex.Match(cookie, @"jwt-token=([^;]+)"); // Match the token
        return match.Success ? match.Groups[1].Value : null;
    }
}
