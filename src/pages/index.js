import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CurrentSponsors from "../sponsors/CurrentSponsors.jsx";

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
    <div className="grid desktop:grid-cols-[1fr_min(65ch,_100%)_1fr] mobile:grid-cols-1 place-content-center">
      <div className="col-start-2">
        <CurrentSponsors />
      </div>
    </div>
  );
}
