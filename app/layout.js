import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sande-electronic.vercel.app"),

  title: {
    default: "SANDE ELECTRONIC | Electronics in Rwanda",
    template: "%s | SANDE ELECTRONIC",
  },

  description:
    "SANDE ELECTRONIC is a trusted online electronics store in Rwanda. Discover smartphones, laptops, headphones, smart watches and other quality electronics with great offers.",

  applicationName: "SANDE ELECTRONIC",

  keywords: [
    "SANDE ELECTRONIC",
    "electronics Rwanda",
    "electronics shop Rwanda",
    "online electronics store Rwanda",
    "buy electronics Rwanda",
    "smartphones Rwanda",
    "laptops Rwanda",
    "headphones Rwanda",
    "smart watches Rwanda",
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

  openGraph: {
    title: "SANDE ELECTRONIC | Electronics in Rwanda",
    description:
      "Discover quality electronics, special offers and new products from SANDE ELECTRONIC.",
    url: "https://sande-electronic.vercel.app",
    siteName: "SANDE ELECTRONIC",
    locale: "en_RW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SANDE ELECTRONIC",
    description:
      "Shop quality electronics online from SANDE ELECTRONIC in Rwanda.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
