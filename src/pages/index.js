import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CountdownClock from '@/components/CountdownClock';

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
      <p>StormHacks 2024 is coming!</p>
    </>
    
  );
}
