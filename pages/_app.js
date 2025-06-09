import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Roboto */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Roboto Flex */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />

      <footer className="w-full text-center py-4 text-sm text-gray-300 bg-[#0f172a] border-t">
        <p>
          &copy; {currentYear} — Designed, developed, and maintained by <strong className="text-white">Jatin</strong>. All rights reserved.
        </p>
      </footer>
    </>
  );
}
