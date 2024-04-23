import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import Landing from "./Landing";
import SponsorsGallery from "../components/Sponsors/SponsorsGallery.tsx";
import TracksThemes from "./TracksThemes/TracksThemes";
import Footer from "./Footer";
import AboutUs from "../components/AboutUs";
import NavBar from "../components/NavBar";
import WhySponsorUs from "../components/WhySponsorUs";
import FAQ from "../components/FAQ";
import useMobileScreen from "../utils/hooks/useMobileScreen.tsx";
import { MLHBanner2024 } from "../components/MLHBanner.jsx";
import Execs from "../components/Execs.jsx";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const isMobileScreen = useMobileScreen();

  return (
    <>
<div style={{ backgroundColor: 'rgba(48, 36, 56, 1)' }} className="mobile:px-4 grid grid-cols-[1fr_min(115ch,_calc(100%-64px))_1fr] gap-x-[32px] [&>*]:col-span-1 [&>*]:col-start-2 desktop:gap-x-[7.5vh] mobile:gap-x-[5vh] place-content-center">
        <MLHBanner2024 />
        <NavBar isMobileScreen={isMobileScreen} />
      </div>

      <div>
        <Landing isMobileScreen={isMobileScreen} />
      </div>

      <div style={{ backgroundColor: 'rgb(77, 50, 63)' }} className="mobile:px-4 grid grid-cols-[1fr_min(115ch,_calc(100%-64px))_1fr] gap-x-[32px] [&>*]:col-span-1 [&>*]:col-start-2 desktop:gap-x-[7.5vh] mobile:gap-x-[5vh] place-content-center">
        <AboutUs />
        {/* <TracksThemes /> */}
        <WhySponsorUs />
        <SponsorsGallery />
        <FAQ />
        <Execs/>
        <Footer />
      </div>
    </>
  );
}
