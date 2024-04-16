import { WhySponsor } from "@/manifest";
import { TracksAndThemes } from "@/manifest";
import ImageCard from "./TracksThemes/ImageCard";
const WhySponsorUs = () => {
  const registerImageName = "/images/card-img.svg";
  return (
    <>
      <div className="font-vollkorn-sc text-center text-white pb-5 pt-10 text-base">
        PLEASE SPONSOR US
      </div>

      <div className="font-vollkorn text-center text-white pb-8 text-heading">
        Why sponsor us?
      </div>

      <div className="text-center text-white pb-10 text-[16px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We are looking for passionate companies and organizations looking to
        foster talent across the global tech community—people hoping to take on
        young and innovative minds, presenting meaningful opportunities and
        challenging the limits of the next generation.
      </div>

      <div className="flex justify-center pb-10">
        <button className="w-[135px] h-[48px] bg-opacity-50 hover:bg-gainsboro-200 text-white font-bold py-2 px-4 border border-white text-[12px]">
          Sponsor us now
        </button>
      </div>
      {/* <div className="mb-16 flex desktop:flex-row desktop:items-stretch mobile:flex-col justify-between text-white items-center">
        {WhySponsor.map((sponsor, index) => (
          <ImageCard
            key={index}
            title={sponsor.title}
            subtitle={""}
            altText={sponsor.altText}
            description={sponsor.description}
            imageUrl={sponsor.imageUrl}
          />
        ))}
      </div> */}
    </>
  );
};

export default WhySponsorUs;
