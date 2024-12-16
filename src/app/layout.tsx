"use client";
import Navigation from "../components/Navigation";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <div className="fixed bottom-10 left-10 z-50">
          <Navigation />
        </div>
      </body>
    </html>
  );
}
