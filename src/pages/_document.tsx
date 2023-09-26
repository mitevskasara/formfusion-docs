import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr" style={{ scrollBehavior: 'smooth' }}>
                <Head>
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
                    <link rel="canonical" href="https://www.corelabui.com" />
                    {/* {process.env.MODE === 'PROD' && (
                        <Script
                            async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9545346940795209"
                            crossOrigin="anonymous"
                            strategy="afterInteractive"></Script>
                    )} */}
                    {/* <meta
                        name="google-site-verification"
                        content="je6Qcw1sec_6CEAvaIbHIZ_V5XpXB13MYTZseOX4MRE"
                    />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9545346940795209"
                        crossOrigin="anonymous"></script> */}
                </Head>
                <body style={{ margin: 0 }}>
                    <Main />
                    <NextScript />
                    {/* {process.env.MODE === 'PROD' && (
                        <Script
                            async
                            src="https://www.googletagmanager.com/gtag/js?id=G-V6WRXQ716P"
                            strategy="afterInteractive"
                        />
                    )}
                    {process.env.MODE === 'PROD' && (
                        <Script
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-V6WRXQ716P');`
                            }}
                        />
                    )} */}
                </body>
            </Html>
        );
    }
}
