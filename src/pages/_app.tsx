import "@/styles/globals.css";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Component {...pageProps} />
        </main>
    )
}
