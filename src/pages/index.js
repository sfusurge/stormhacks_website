import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutUs from "../sections/AboutUs";
import DesignerFriendly from "../sections/DesignerFriendly";
import Register from "../sections/Register";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  return (
    <div className="[background:linear-gradient(180deg,_#241b38,_#231f20)] grid grid-cols-[1fr_min(75ch,_calc(100%-64px))_1fr] gap-x-[32px] [&>*]:col-span-1 [&>*]:col-start-2 desktop:gap-x-[7.5vh] mobile:gap-x-[5vh] place-content-center"></div>
    <>
      <div className="[background:linear-gradient(180deg,_#241b38,_#231f20)] flex flex-col box-border mobile:gap-[20px] desktop:gap-[80px]">
        <AboutUs />
        <DesignerFriendly />
        <Register />
      </div>
    </>
  );
}
