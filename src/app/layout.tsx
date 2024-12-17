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
          <div className="">
            <Navigation />
          </div>
        </main>
      </body>
    </html>
  );
}
