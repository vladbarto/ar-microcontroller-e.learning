using UnityEngine;
using System.Collections.Generic;

public class MeshesForChildren : MonoBehaviour
{
    private List<MeshCollider> colliders = new List<MeshCollider>();

    // Use this for initialization
    void Start()
    {
        Transform parentTransform = transform;
        foreach (Transform childTransform in parentTransform)
        {
            if (childTransform.GetComponent<MeshFilter>() != null &&
                childTransform.GetComponent<MeshCollider>() == null &&
                childTransform.GetComponent<MeshFilter>().sharedMesh.isReadable) //adaugă mesh collider doar dacă nu există deja unul
            {
                MeshCollider col = childTransform.gameObject.AddComponent<MeshCollider>();
                col.enabled = true;
                colliders.Add(col);
            }

        }
    }

    public void SetCollidersEnabled(bool state)
    {
        foreach (var col in colliders)
        {
            if (col != null)
                col.enabled = state;
        }
    }
}
