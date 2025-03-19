"use client";
import { useEffect, useRef } from "react";

export default function AdUnit() {
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.atOptions = {
        key: "27a258a04e705d5b539649f80421bd41",
        format: "iframe",
        height: 60,
        width: 468,
        params: {},
      };

      const script = document.createElement("script");
      script.src =
        "//www.highperformanceformat.com/27a258a04e705d5b539649f80421bd41/invoke.js";
      script.async = true;

      if (adRef.current) {
        adRef.current.appendChild(script);
      }
    }

    return () => {
      if (adRef.current) {
        const scripts = adRef.current.querySelectorAll("script");
        scripts.forEach((script) => script.remove());
      }
    };
  }, []);

  return <div ref={adRef} className="flex justify-center" />;
}
