using UnityEngine;

public class Transparentize : MonoBehaviour
{
    [Range(0f, 1f)]
    public float transparency = 0.3f;

    [Header("Base transparent material")]
    public Material transparentBaseMaterial;

    private void Start()
    {
       ApplyTransparencyToChildren(transform, transparency);
    }

    private void ApplyTransparencyToChildren(Transform parent, float alpha)
    {
        foreach (Renderer renderer in parent.GetComponentsInChildren<Renderer>())
        {
            Material[] newMaterials = new Material[renderer.materials.Length];

            for (int i = 0; i < renderer.materials.Length; i++)
            {
                // Clone base transparent material
                Material newMat = new Material(transparentBaseMaterial);

                // Set custom alpha
                Color color = newMat.color;
                color.a = alpha;
                newMat.color = color;

                newMaterials[i] = newMat;
            }

            // Apply new materials to renderer
            renderer.materials = newMaterials;
        }
    }
}
