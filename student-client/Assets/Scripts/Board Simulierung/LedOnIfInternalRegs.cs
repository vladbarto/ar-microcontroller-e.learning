using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LedOnIfInternalRegs : MonoBehaviour
{
	public Slider PIO_PER;
	public Slider PIO_OER;
	public Slider PIO_SODR;

    Renderer renderer;
    Color baseColor = Color.white;
    //Color color = Color.green;

    // Start is called before the first frame update
    void Start()
    {
        renderer = GetComponent<Renderer>();    
    }

    // Update is called once per frame
    void Update()
    {
        //Debug.Log($"PIO_PER = {PIO_PER.value}");
        if(this.PIO_OER.value == 1 && this.PIO_SODR.value == 1 && this.PIO_PER.value == 1)
        {
            renderer.material.color = Color.green;
        }
        else
        {
            renderer.material.color = baseColor;
        }
       
    }
}
