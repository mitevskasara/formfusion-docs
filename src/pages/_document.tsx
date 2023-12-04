import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr" style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    {process.env.mode === 'PROD' && (
                        <Script
                            id="google-tagmanager-script"
                            async
                            src="https://www.googletagmanager.com/gtag/js?id=G-PNVC81FSRT"
                            strategy="afterInteractive"
                        />
                    )}
                    {process.env.mode === 'PROD' && (
                        <Script
                            id="google-analytics-script"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());

                                        gtag('config', 'G-PNVC81FSRT');`
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
                            id="google-tag-manager"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MBRKJB97');`
                            }}
                        />
                    )}
                </Head>
                <body style={{ margin: 0 }}>
                    {process.env.mode === 'PROD' && (
                        <noscript>
                            <iframe
                                src="https://www.googletagmanager.com/ns.html?id=GTM-MBRKJB97"
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
