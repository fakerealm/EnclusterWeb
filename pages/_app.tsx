import "../styles/main.css";
import "../styles/style.css";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
