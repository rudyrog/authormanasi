import Navigation from "../components/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Manasi Mehta</title>
        <meta
          name="description"
          content="Welcome to my portfolio! Discover my blogs and books about our Country and Culture."
        />
        <meta
          name="keywords"
          content="book,india,culture,religion,blogs,history,ui,ux,novels"
        />
        <meta name="author" content="Manasi Mehta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Manasi Mehta" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! Discover my blogs and books about our Country and Culture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manasimehta.vercel.app/" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body>
        <main>
          {children}
          <div className="navigation-container">
            <Navigation />
          </div>
        </main>
      </body>
    </html>
  );
}
