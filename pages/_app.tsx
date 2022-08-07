import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps ) {
    return (
        <SessionProvider session={session}>
            <RecoilRoot >
                <ThemeProvider attribute="class">
                    <Component {...pageProps} />
                </ThemeProvider>
            </RecoilRoot>
        </SessionProvider>
    );
}

export default MyApp;
