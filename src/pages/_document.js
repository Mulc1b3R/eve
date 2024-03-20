import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        
        
        {/* Favicon */}
        <link rel="icon" type="image/ico" sizes="16x16" href="./public/mulciber.ico" />
        
        {/* Meta Tags for SEO */}
        <meta name="description" content="An OpenAI-powered Text-to-Speech tool." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eve-red.vercel.app/" />
        <meta property="og:title" content="Zendog EVE" />
        <meta property="og:description" content="An OpenAI-powered Text-to-Speech tool." />
        <meta property="og:image" content="https://www.openaudio.ai/og-image.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eve-red.vercel.app/" />
        <meta property="twitter:title" content="Zendog EVE" />
        <meta property="twitter:description" content="An OpenAI-powered Text-to-Speech tool." />
        <meta property="twitter:image" content="https://www.openaudio.ai/og-image.svg" />

        {/* Add additional meta tags as needed */}


      </Head>
      <body>
        <br>
        </br><center>Text 2 mp3</center>
        
        <Main />
        <NextScript />
        <Analytics />

      </body>
    </Html>
  )
}
