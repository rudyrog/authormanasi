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
        <main>
          {children}
          <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 transform">
            <Navigation />
          </div>
        </main>
      </body>
    </html>
  );
}
