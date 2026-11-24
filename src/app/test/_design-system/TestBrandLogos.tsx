"use client";

import { useEffect } from "react";

const WHITE_LOGO_SRC = "/mumbai/enterprise/logos/wais-27-enterprise-mumbai-w1.svg";
const DARK_LOGO_SRC = "/mumbai/enterprise/logos/wais-27-enterprise-mumbai-b1.svg";
const HERO_LOGO_SRC = "/mumbai/enterprise/logos/wais-27-enterprise-mumbai-w2.svg";

function applyFallbackOnError(img: HTMLImageElement, filename: string) {
  img.onerror = () => {
    if (img.dataset.logoFallbackApplied === "1") return;
    img.dataset.logoFallbackApplied = "1";
    img.src = `/logos/${filename}`;
  };
}

export function TestBrandLogos() {
  useEffect(() => {
    const applyLogos = () => {
      const root = document.querySelector(".ai2047-live-theme");
      if (!root) return;

      // 1. Sticky Header Logo -> Dark text lockup on Light Blue / Frosted White nav bar
      const headerImgs = root.querySelectorAll<HTMLImageElement>(
        'header img[src*="wais-27-enterprise"], header img[src*="wais-26-enterprise"], header img[data-test-logo="header"], header nav > a:first-child img, .logo img'
      );
      headerImgs.forEach((img) => {
        img.dataset.testLogo = "header";
        applyFallbackOnError(img, "wais-27-enterprise-mumbai-b1.svg");
        if (!img.src.includes("wais-27-enterprise-mumbai-b1.svg")) {
          img.src = DARK_LOGO_SRC;
        }
      });

      // 2. Hero Banner Lockup Logo -> Updated wais-27-enterprise-mumbai-w2.svg
      const heroImgs = root.querySelectorAll<HTMLImageElement>(
        '#home img[src*="wais-27-enterprise"], #home img[data-test-logo="hero"], #home .container > div:first-child img'
      );
      heroImgs.forEach((img) => {
        img.dataset.testLogo = "hero";
        if (!img.src.includes("wais-27-enterprise-mumbai-w2.svg")) {
          img.src = HERO_LOGO_SRC;
        }
      });

      // 3. Footer Brand Logo -> White text lockup on Brand Blue (#0069B8) Footer
      const footerImgs = root.querySelectorAll<HTMLImageElement>(
        '#footer img[src*="wais-27-enterprise"], #footer img[src*="wais-26-enterprise"], #footer img[data-test-logo="footer"], footer img[src*="wais-27-enterprise"], footer img[data-test-logo="footer"]'
      );
      footerImgs.forEach((img) => {
        img.dataset.testLogo = "footer";
        applyFallbackOnError(img, "wais-27-enterprise-mumbai-w1.svg");
        if (!img.src.includes("wais-27-enterprise-mumbai-w1.svg")) {
          img.src = WHITE_LOGO_SRC;
        }
      });
    };

    applyLogos();

    const root = document.querySelector(".ai2047-live-theme");
    if (!root) return;

    const observer = new MutationObserver(() => applyLogos());
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
