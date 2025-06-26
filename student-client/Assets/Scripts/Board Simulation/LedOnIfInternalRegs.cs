using UnityEngine;
using UnityEngine.UI;

public class LedOnIfInternalRegs : MonoBehaviour
{
    public Slider PIO_PER;
    public Slider PIO_OER;
    public Slider PIO_SODR;
    public Slider PIO_CODR;
    public Slider blinking;

    private Renderer renderer;
    private Color baseColor;

    void Start()
    {
        renderer = GetComponent<Renderer>();
        baseColor = renderer.material.color;

        if (gameObject.CompareTag("TransparentObject"))
        {
            baseColor.a = 0.05f;
        }
        else
        {
            baseColor.a = 1f;
        }
    }

    void Update()
    {
        Color colorToApply = baseColor;

        if (PIO_OER.value == 1 && PIO_SODR.value == 1 && PIO_PER.value == 1)
        {
            if (PIO_CODR.value != 1)
            {
                Color greenWithAlpha = Color.green;

                if (blinking.value == 1)
                {
                    Color lerped = Color.Lerp(baseColor, greenWithAlpha, Mathf.PingPong(Time.time, 1));
                    renderer.material.color = lerped;
                }
                else
                {
                    renderer.material.color = greenWithAlpha;
                }
                return;
            }
        }

        renderer.material.color = baseColor;
    }
}
