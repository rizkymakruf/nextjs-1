import '../styles/globals.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
