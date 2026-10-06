import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sande-electronic.vercel.app"),

  title: {
    default: "SANDE ELECTRONIC | Quality Electronics in Rwanda",
    template: "%s | SANDE ELECTRONIC",
  },

  description:
    "SANDE ELECTRONIC is a modern Rwanda-based electronics marketplace. Discover quality smartphones, laptops, TVs, audio products, accessories, smart devices and more.",

  applicationName: "SANDE ELECTRONIC",

  keywords: [
    "SANDE ELECTRONIC",
    "electronics Rwanda",
    "electronics shop Rwanda",
    "online electronics Rwanda",
    "electronics marketplace Rwanda",
    "smartphones Rwanda",
    "laptops Rwanda",
    "TV Rwanda",
    "headphones Rwanda",
    "speakers Rwanda",
    "smart watches Rwanda",
    "phone accessories Rwanda",
    "power banks Rwanda",
    "online shopping Rwanda",
  ],

  authors: [
    {
      name: "SANDE ELECTRONIC",
    },
  ],

  creator: "SANDE ELECTRONIC",
  publisher: "SANDE ELECTRONIC",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://sande-electronic.vercel.app",
  },

  openGraph: {
    title: "SANDE ELECTRONIC | Quality Electronics in Rwanda",

    description:
      "Shop quality electronics in Rwanda. Discover products, deals, new arrivals and request products that are not currently in stock.",

    url: "https://sande-electronic.vercel.app",

    siteName: "SANDE ELECTRONIC",

    locale: "en_RW",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SANDE ELECTRONIC | Quality Electronics in Rwanda",

    description:
      "Discover quality electronics, smart shopping and trusted service from SANDE ELECTRONIC.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
