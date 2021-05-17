import React from "react";
import { AppProps } from "next/app";

import { Footer } from "../components/Footer";
import "../styles/main.css";

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Component {...pageProps} />
    </>
);
export default MyApp;
