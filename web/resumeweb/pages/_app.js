import "../styles/globals.css"; // Import global CSS
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Example of running something on initial load
    console.log("App loaded");
  }, []);

  return (
    <Component {...pageProps} /> // This will render the current page component
  );
}

export default MyApp;
