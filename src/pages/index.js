import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "./Footer"

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
      <Footer />
    </>
    
  );
}
