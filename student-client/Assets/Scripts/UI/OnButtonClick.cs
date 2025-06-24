using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OnButtonClick : MonoBehaviour
{
    [SerializeField] Animator animator;

    public void onClick()
    {
        Debug.Log("Button Clicked!");
        animator.SetTrigger("Close");
    }
}
