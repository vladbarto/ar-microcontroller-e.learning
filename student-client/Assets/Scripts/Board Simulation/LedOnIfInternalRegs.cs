using UnityEngine;
using UnityEngine.UI;

public class LedOnIfInternalRegs : MonoBehaviour
{
	public Slider PIO_PER;
	public Slider PIO_OER;
	public Slider PIO_SODR;
    public Slider PIO_CODR;
    public Slider blinking;

    Renderer renderer;
    Color originalColor;

    // Start is called before the first frame update
    void Start()
    {
        renderer = GetComponent<Renderer>();
        originalColor = renderer.material.color;
    }

    // Update is called once per frame
    void Update()
    {
        if(this.PIO_OER.value == 1 && this.PIO_SODR.value == 1 && this.PIO_PER.value == 1)
        {
            if(this.PIO_CODR.value != 1)
            {
                if(this.blinking.value == 1)
                {
                    renderer.material.color = Color.Lerp(originalColor, Color.green, Mathf.PingPong(Time.time, 1));
                }
                else
                {
                    renderer.material.color = Color.green;
                }
            }
            
        }
        else
        {
            renderer.material.color = originalColor;
        }
       
    }
}
