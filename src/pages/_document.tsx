import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { generateStyle } from 'corelabui/Theme';
import { stylesheet as typographyStylesheet } from 'corelabui/Typography';
import { stylesheet as highlightStylesheet } from 'corelabui/Highlight';
import { stylesheet as buttonStylesheet } from 'corelabui/Button';
import { stylesheet as dividerStylesheet } from 'corelabui/Divider';
import { stylesheet as inputStylesheet } from 'corelabui/Input';
import { stylesheet as selectStylesheet } from 'corelabui/Select';
import {
    stylesheet as flexStylesheet,
    flexItemStylesheet
} from 'corelabui/Flex';
import THEMES, { scrollBarStyle } from '@/core/theme';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    {process.env.mode === 'PROD' && (
                        <Script
                            defer
                            id="google-analytics-script"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());

									gtag('config', 'G-K7LJ0DNVH7');`
                            }}
                        />
                    )}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        name="google-site-verification"
                        content="bC7fHyGZ3NACYkZWFw52i_vdkXgxFyq1S3jkQjMdWcI"
                    />
                    {process.env.mode === 'PROD' && (
                        <Script
                            defer
                            id="google-tag-manager"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TXL9XRJ3');`
                            }}
                        />
                    )}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "FormFusion",
              "item": "https://www.formfusion.dev/docs"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Getting started",
              "item": "https://www.formfusion.dev/docs"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "API",
              "item": "https://www.formfusion.dev/docs/api/form"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Integrations",
              "item": "https://www.formfusion.dev/docs/integrations/mui"
            }
          ]
        }`
                        }}
                    />
                    <style id="CoreLabUI">
                        {generateStyle(THEMES.standard)}
                    </style>
                    <style id="CoreLabUI-scrollbar">{scrollBarStyle}</style>
                    <style id={typographyStylesheet.id}>
                        {typographyStylesheet.style}
                    </style>
                    <style id={highlightStylesheet.id}>
                        {highlightStylesheet.style}
                    </style>
                    <style id={buttonStylesheet.id}>
                        {buttonStylesheet.style}
                    </style>
                    <style id={dividerStylesheet.id}>
                        {dividerStylesheet.style}
                    </style>
                    <style id={inputStylesheet.id}>
                        {inputStylesheet.style}
                    </style>
                    <style id={selectStylesheet.id}>
                        {selectStylesheet.style}
                    </style>
                    <style id={flexStylesheet.id}>{flexStylesheet.style}</style>
                    <style id={flexItemStylesheet.id}>
                        {flexItemStylesheet.style}
                    </style>
                </Head>
                <body style={{ margin: 0 }}>
                    {process.env.mode === 'PROD' && (
                        <noscript>
                            <iframe
                                src="https://www.googletagmanager.com/ns.html?id=GTM-TXL9XRJ3"
                                height="0"
                                width="0"
                                style={{
                                    display: 'none',
                                    visibility: 'hidden'
                                }}></iframe>
                        </noscript>
                    )}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
