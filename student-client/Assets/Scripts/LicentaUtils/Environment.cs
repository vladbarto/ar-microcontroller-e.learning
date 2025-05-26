using System;
using System.IO;
using UnityEngine;
using UnityEngine.UI;

namespace LicentaUtils
{
    public static class Environment
    {
        private static string backendIpOverride = null;

        // Connection to Java Spring Backend
        public static string BACKEND_PROTOCOL = "http://";
        public static string BACKEND_DST_PORT = "2003";
        public static string BACKEND_CONTEXT_PATH = "/api";

        // Connection to Frontend
        public static string FRONTEND_DST_PORT = "4200";
        public static string FRONTEND_AUTH_PARENT = "/auth";
        public static string FRONTEND_AUTH_REGISTER = "/register";

        // auth
        public static string AUTH_CONTROLLER = "/auth/v1";
        public static string AUTH_LOGIN_ENDPOINT = "/login";

        // wizard
        public static string WIZARD_CONTROLLER = "/wizard/v1";
        public static string WIZARD_GET_ALL_ENDPOINT = "/all-main";

        // PlayerPrefs keys
        public static string AUTH_TOKEN = "auth_token";
        public static string SERVER_IP = "server_ipv4";

        public static string BACKEND_DST_IP_ADDRESS() {

            if (!string.IsNullOrEmpty(backendIpOverride))
                return backendIpOverride;

            if (PlayerPrefs.HasKey(SERVER_IP))
                return PlayerPrefs.GetString(SERVER_IP);

            return "10.132.114.224";

        }

        public static void SetBackendIp(string ip, bool persist = true)
        {
            backendIpOverride = ip;
            if (persist)
            {
                PlayerPrefs.SetString(SERVER_IP, ip);
                PlayerPrefs.Save();
            }
            Debug.Log("[Environment] IP set to: " + BACKEND_DST_IP_ADDRESS());
        }

        public static string GetBackendBaseUrl()
        {
            return $"{BACKEND_PROTOCOL}{BACKEND_DST_IP_ADDRESS()}:{BACKEND_DST_PORT}{BACKEND_CONTEXT_PATH}";
        }

        public static string GetFrontendBaseUrl()
        {
            return $"{BACKEND_PROTOCOL}{BACKEND_DST_IP_ADDRESS()}:{FRONTEND_DST_PORT}";
        }
    }
}

