using System;
using System.IO;
using UnityEngine;
using UnityEngine.UI;

namespace LicentaUtils
{
    public class Environment
    {
        // Token
        public static string AUTH_TOKEN = "auth_token";

        // Connection to Java Spring Backend
        public static string BACKEND_PROTOCOL = "http://";
        public static string BACKEND_DST_IP_ADDRESS = "192.168.1.164"; // might be localhost
        public static string BACKEND_DST_PORT = "2003";
        public static string BACKEND_CONTEXT_PATH = "/api";

        public static string getBackendBaseUrl()
        {
            return string.Format("{0}{1}:{2}{3}",
                BACKEND_PROTOCOL,
                BACKEND_DST_IP_ADDRESS,
                BACKEND_DST_PORT,
                BACKEND_CONTEXT_PATH
            );
        }

        // auth
        public static string AUTH_CONTROLLER = "/auth/v1";
        public static string AUTH_LOGIN_ENDPOINT = "/login";

        // wizard
        public static string WIZARD_CONTROLLER = "/wizard/v1";
        public static string WIZARD_GET_ALL_ENDPOINT = "/all-main";
        //public static string WIZARD_CONTROLLER = "/wizard";

    }
}

