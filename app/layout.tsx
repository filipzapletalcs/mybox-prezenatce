import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyBox Presentation",
  description: "MyBox EV Charging Solutions - Professional Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased bg-gradient-to-br from-mybox-dark via-mybox-darker to-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
