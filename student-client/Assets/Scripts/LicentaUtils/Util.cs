using System;
using UnityEngine;

namespace LicentaUtils
{
    public class Util
    {
        public static Transform childMatchingTarget(Transform parent, string target)
        {
            if (parent.name == target)
                return parent;

            int childCount = parent.childCount;

            if(0 != childCount)
            {
                for (int i = 0; i < childCount; i++)
                {
                    Transform child = parent.transform.GetChild(i);
                    if (child.name == target)
                    {
                        return child;
                    }
                }
            }
            
            return null;
        }
    }
}

