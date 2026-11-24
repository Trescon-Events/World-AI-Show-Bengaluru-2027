import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";
import { BrandBookLayoutWrapper } from "./components/BrandBookLayoutWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worldaishow.com"),
  title: "World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "The premier cross-functional executive conference addressing the architecture, systems integration, agentic governance, and verifiable ROI of enterprise AI. 20–21 April 2027 · Mumbai, India · 2 Days.",
  icons: {
    icon: [
      { url: "/mumbai/enterprise/favicon.svg", type: "image/svg+xml" },
      { url: "/mumbai/enterprise/favicon.png", type: "image/png" },
    ],
    shortcut: "/mumbai/enterprise/favicon.svg",
    apple: "/mumbai/enterprise/favicon.png",
  },
  openGraph: {
    title: "World AI Show: The Enterprise Edition | Mumbai 2027",
    description:
      "Where AI becomes the operating model. Mumbai | 20–21 April 2027 | 2 Days. Organised by Trescon.",
    type: "website",
    images: [
      {
        url: "/mumbai/enterprise/images/wais-featured-image.gif",
        alt: "World AI Show: The Enterprise Edition | Mumbai 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World AI Show: The Enterprise Edition | Mumbai 2027",
    description:
      "Where AI becomes the operating model. Mumbai | 20–21 April 2027 | 2 Days. Organised by Trescon.",
    images: ["/mumbai/enterprise/images/wais-featured-image.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-space-grotesk bg-bg text-text">
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCSSC66T');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
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
