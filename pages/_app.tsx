import "../styles/main.css";
import "../styles/style.css";
import Nav from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
