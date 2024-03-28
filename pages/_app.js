import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
//import { DefaultSeo } from "next-seo";
//import SEO from "../next-seo.config";

// Vendor CSS Files
import "../styles/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/vendor/swiper/swiper-bundle.min.css";
import "../styles/vendor/glightbox/css/glightbox.min.css";
import "../styles/vendor/aos/aos.css";
import "@splidejs/react-splide/css";

// Template Main CSS Files
import "../styles/main.css";
import "../styles/variables.css";

{
  /* Google Fonts */
}

import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-eb_garamond",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--playfair_display",
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      {/* <DefaultSeo {...SEO} /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
