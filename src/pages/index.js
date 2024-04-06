import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutUs from "./AboutUs";
import DesignerFriendly from "./DesignerFriendly";
import Register from "./Register";

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
    <>
      <div className="[background:linear-gradient(180deg,_#241b38,_#231f20)] flex flex-col box-border mobile:gap-[20px] desktop:gap-[80px]">
        <AboutUs/>
        <DesignerFriendly/>
        <Register/>
      </div>
    </>
  );
}
