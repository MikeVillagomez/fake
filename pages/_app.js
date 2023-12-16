import React, { useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import NavigationBar from '../components/NavigationBar';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';
import { Link } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-XDWMNHNFNE');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <title>Blend-brew Tea</title>
        <meta name="description" content="Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors." />
        <meta name="keywords" content="tea, blendbrew tea, organic tea, herbal tea, green tea, black tea, loose leaf tea, tea blends, specialty tea, artisan tea" />
        <meta property="og:title" content="Blend-brew Tea" />
        <meta property="og:description" content="Explore our crafted blends for a symphony of flavors." />
        <meta property="og:image" content="/happy1.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/Brew.png" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XDWMNHNFNE"
        strategy="afterInteractive"
        async
        data-testid="google-analytics-script"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        data-testid="google-analytics-inline-script"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XDWMNHNFNE');
        `}
      </Script>
      <NavigationBar />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieName"
        enableDeclineButton
        declineButtonText="Decline"
        declineCookieValue={false}
        style={{ background: "#2B373B" }}  // Changed color as requested
        buttonStyle={{ background:"#4e503b", color: "white", fontSize:"13px"}} // Adjusted for better visibility and contrast
        declineButtonStyle={{ background:"#cfcfcf", color: "black", fontSize: "13px"}}
        expires={150}
      >
        This website uses cookies to improve your experience. By using our website, you agree to our 
        <Link href="/policy" style={{ color: "#F1D00A" }}>Privacy Policy</Link>.
      </CookieConsent>
    </>
  );
}

export default MyApp;
