import type {AppProps} from "next/app";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import "../styles/globals.css";
import {Optimism, BinanceTestnet} from "@thirdweb-dev/chains";
import {store} from '../store'
import {Provider} from 'react-redux'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';


function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID || '';

    useEffect(() => {
        const handleRouteChange = (url: any) => {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        };

        // When the component is mounted, subscribe to router changes
        // and log those page views
        router.events.on('routeChangeComplete', handleRouteChange);

        // If the component is unmounted, unsubscribe from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, GA_MEASUREMENT_ID]);

    const chain = process.env.NEXT_PUBLIC_CHAIN_ID === "10" ? Optimism : BinanceTestnet;
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                      page_path: window.location.pathname,
                    });
                `}
            </Script>

            <Provider store={store}>
                <ThirdwebProvider activeChain={chain} supportedChains={[chain]} clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
                    <Component {...pageProps} />
                </ThirdwebProvider>
            </Provider>
        </>
    );
}

export default MyApp;
