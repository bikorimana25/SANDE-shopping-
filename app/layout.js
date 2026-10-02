import "./globals.css";

export const metadata = {
  title: "SANDE ELECTRONIC",
  description: "Electronics shop in Rwanda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
