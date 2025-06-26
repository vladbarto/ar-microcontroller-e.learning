using UnityEngine;
using Vuforia; // Import Vuforia namespace

using static LicentaUtils.Environment;


public class ARController : MonoBehaviour
{
    private Transform pickedObject = null;
    public GameObject chipMenu;

    private ObserverBehaviour observer;

    private void Start()
    {
        chipMenu.SetActive(false);

        observer = GetComponentInParent<ObserverBehaviour>();
        if(observer == null)
        {
            Debug.LogWarning("ObserverBehaviour not found on parent object!");
        }
    }

    void Update()
    {
        // Nu procesăm raycast dacă markerul nu e activ
        if (observer == null || observer.TargetStatus.Status != Status.TRACKED)
            return;

        foreach (Touch touch in Input.touches)
        {
            Ray ray = Camera.main.ScreenPointToRay(touch.position);
            Debug.DrawRay(ray.origin, ray.direction * 100, Color.red, 2f);

            if (touch.phase == TouchPhase.Began)
            {
                Debug.Log("Ray sent");

                if (Physics.Raycast(ray, out RaycastHit hit, 1000))
                {
                    pickedObject = hit.transform;
                    Debug.Log($"Ray intersected: {pickedObject.name} (Child Object)");

                    if (pickedObject.name == MAIN_CHIP_NAME)
                    {
                        Debug.Log("chip hit");
                        launchChipMenu();
                    }

                    Debug.Log(pickedObject.name + " hit by ray");
                }
                else
                {
                    pickedObject = null;
                    Debug.Log("Ray didn't hit anything");
                }
            }
            else if (touch.phase == TouchPhase.Ended)
            {
                pickedObject = null;
            }
        }
    }

    private void launchChipMenu()
    {
        if (chipMenu != null)
        {
            chipMenu.SetActive(true); // Enable the chip menu
            Debug.Log("Chip menu launched!");
        }
        else
        {
            Debug.LogError("chip GameObject is not assigned in the Inspector!");
        }
    }
}
