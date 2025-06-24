using UnityEngine;
using Vuforia; // Import Vuforia namespace

using static LicentaUtils.Environment;


public class ARController : MonoBehaviour
{
    private Transform pickedObject = null;
    public GameObject chipMenu;

    private void Start()
    {
        chipMenu.SetActive(false);    
    }

    void Update()
    {
        foreach (Touch touch in Input.touches)
        {
            Ray ray = Camera.main.ScreenPointToRay(touch.position);

            if (touch.phase == TouchPhase.Began)
            {
                Debug.Log("Ray sent");

                if (Physics.Raycast(ray, out RaycastHit hit, 1000))
                {
                    pickedObject = hit.transform;
                    Debug.Log($"Ray intersected: {pickedObject.name} (Child Object)");

                    // Get Vuforia metadata from the hit child
                    ObserverBehaviour observer = hit.transform.GetComponent<ObserverBehaviour>();

                    if (pickedObject.name == MAIN_CHIP_NAME)
                    {
                        Debug.Log("chip hit");
                        launchChipMenu();
                    }
                    if (observer != null)
                    {
                        Debug.Log("---------------------------------------------------------");
                        Debug.Log($"Vuforia Target Found: {observer.TargetName}");
                        Debug.Log($"Exact Child Hit: {hit.transform.name}");
                        Debug.Log("---------------------------------------------------------");

                        if (hit.transform.name == MAIN_CHIP_NAME)
                        {
                            Debug.Log("chip hit");
                            launchChipMenu();
                        }
                        else
                        {
                            Debug.Log(hit.transform.name);
                        }
                    }
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
