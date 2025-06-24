using UnityEngine;

public class MeshesForChildren : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
        Transform parentTransform = transform;
        foreach (Transform childTransform in parentTransform)
        {
            childTransform.gameObject.AddComponent<MeshCollider>();
        }
    }
}
