using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LedBlinking : MonoBehaviour
{

    public int OK = 0;
    Renderer renderer;

    // Start is called before the first frame update
    void Start()
    {
        renderer = GetComponent<Renderer>();    
    }

    // Update is called once per frame
    void Update()
    {
        if(OK != 0)
        {
            renderer.material.color = Color.Lerp(Color.white, Color.green, Mathf.PingPong(Time.time, 1));
        }
        else
        {
            renderer.material.color = Color.white;
        }

    }
}
