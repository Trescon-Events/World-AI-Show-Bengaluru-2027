import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";
import { BrandBookLayoutWrapper } from "./components/BrandBookLayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://worldaishow.com"),
  title: "World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description:
    "The CISO-led summit on securing AI adoption, defending an expanding attack surface and building enterprise-wide cyber resilience. 20–21 July 2027 · Bengaluru, India.",
  icons: {
    icon: [
      { url: "/bengaluru/cybersecurity/favicon.svg", type: "image/svg+xml" },
      { url: "/bengaluru/cybersecurity/favicon.png", type: "image/png" },
    ],
    shortcut: "/bengaluru/cybersecurity/favicon.svg",
    apple: "/bengaluru/cybersecurity/favicon.png",
  },
  openGraph: {
    title: "World AI Show: The Cybersecurity Edition | Bengaluru 2027",
    description:
      "Securing the AI-Powered Enterprise. Bengaluru | 20–21 July 2027. Organised by Trescon.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World AI Show: The Cybersecurity Edition | Bengaluru 2027",
    description:
      "Securing the AI-Powered Enterprise. Bengaluru | 20–21 July 2027. Organised by Trescon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-space-grotesk bg-bg text-text">
        {/* Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MCYHF1E2XC"
        />
        {/* Google Tag Manager & Google Analytics */}
        <Script
          id="google-analytics-gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCSSC66T');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MCYHF1E2XC', {
  page_path: window.location.pathname,
});`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCSSC66T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AOSInit />
        <BrandBookLayoutWrapper>
          {children}
        </BrandBookLayoutWrapper>
        <ScrollToTop />
      </body>
    </html>
  );
}
