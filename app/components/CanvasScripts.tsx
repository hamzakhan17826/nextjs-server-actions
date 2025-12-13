"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

// Type definition yahan bhi zaroori hai
declare global {
  interface Window {
    SEMICOLON: {
      Modules: {
        init: () => void;
      };
    };
    jQuery: (...args: any[]) => any;
  }
}

export default function CanvasScripts() {
  //   return (
  //     <>
  //       {/* Step 1: jQuery/Plugins ko load karein */}
  //       <Script src="/js/plugins.min.js" strategy="beforeInteractive" />
  //       {/* Step 2: Canvas functions ko load karein aur 'onReady' istemal karein */}
  //       <Script
  //         id="canvas-functions"
  //         src="/js/functions.bundle.js"
  //         strategy="beforeInteractive"
  //         onReady={() => {
  //           if (typeof window.SEMICOLON?.Modules?.init === "function") {
  //             window.SEMICOLON.Modules.init();
  //             console.log(
  //               "Canvas Modules Initialized from CanvasScripts component!"
  //             );
  //           } else {
  //             console.error("CanvasScripts: SEMICOLON.Modules.init not found.");
  //           }
  //         }}
  //       />
  //     </>
  //   );

  const areScriptsLoaded = useRef(false);

  useEffect(() => {
    if (areScriptsLoaded.current) {
      return;
    }
    areScriptsLoaded.current = true;

    const loadScript = (src: string, onLoad: () => void) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = onLoad;
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    };

    // Load scripts sequentially
    loadScript("/js/plugins.min.js", () => {
      console.log("plugins.min.js loaded.");

      if (window.jQuery) {
        console.log("jQuery confirmed. Loading functions.bundle.js...");
        loadScript("/js/functions.bundle.js", () => {
          console.log("functions.bundle.js loaded.");

          // Aakhri Hal: jQuery ke 'ready' event ko manually trigger karein
          // Yeh functions.bundle.js ke andar mojood $(document).ready() ko chala dega
          window.jQuery(document).trigger("ready");
          console.log("Manually triggered jQuery(document).ready()");

          // Thora sa delay dein taake 'ready' event apna kaam kar le
          setTimeout(() => {
            // Ab check karein
            if (
              window.SEMICOLON &&
              window.SEMICOLON.Modules &&
              typeof window.SEMICOLON.Modules.init === "function"
            ) {
              // Aksar 'ready' event hi init ko call kar deta hai,
              // lekin agar na kare to hum yahan kar sakte hain.
              // window.SEMICOLON.Modules.init();
              console.log(
                "Canvas Initialization seems to be handled by ready event."
              );
            } else {
              console.error(
                "Initialization failed even after triggering ready event."
              );
            }
          }, 100); // 100ms ka delay
        });
      } else {
        console.error(
          "jQuery not found after loading plugins.min.js. Aborting."
        );
      }
    });
  }, []);

  return null;
}
