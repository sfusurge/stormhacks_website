import Image from "next/image";
const WhySponsorUs = () => {
  const registerImageName = "/images/card-img.svg";
  return (
    <>
      <div className="text-center text-white pb-5 pt-10 text-[16px]">
        PLEASE SPONSOR US
      </div>

      <div className="text-center text-white pb-8 text-[40px]">
        Why sponsor us?
      </div>

      <div className="text-center text-white pb-10 text-[16px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We're looking for passionate companies and organizations looking to
        foster talent across the global tech community—people hoping to take on
        young and innovative minds, presenting meaningful opportunities and
        challenge students’ limits.
      </div>

      <div className="flex justify-center pb-10">
        <button className="w-[135px] h-[48px] bg-opacity-50 hover:bg-gainsboro-200 text-white font-bold py-2 px-4 border border-white text-[12px]">
          Sponsor us now
        </button>
      </div>
      <div>
        <div className="flex desktop:flex-row mobile:flex-col justify-between text-white py-20 text-white items-center">
          <div>
            <div className="rounded-md bg-whitesmoke desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">
              <Image
                className="w-full h-full object-cover"
                alt=""
                src={registerImageName}
                width={0}
                height={0}
              />
            </div>

            <h2 className="text-white pb-8  font-vollkorn text-[24px] mt-3 desktop:w-[237px] mobile:w-[382px]">
              Make an impression
            </h2>

            <h1 className=" text-white  font-vollkorn pb-8 text-[16px] desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pharetra sem vel lectus posuere cursus. Sed eu diam.
            </h1>
          </div>

          <div>
            <div className="rounded-md bg-whitesmoke desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">
              <Image
                className="w-full h-full object-cover"
                alt=""
                src={registerImageName}
                width={0}
                height={0}
              />
            </div>

            <div className="text-white font-vollkorn pb-8 text-[24px] mt-3 desktop:w-[237px] mobile:w-[382px]">
              Make an impression
            </div>

            <div className=" text-white font-vollkorn pb-8 text-[16px] desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pharetra sem vel lectus posuere cursus. Sed eu diam.
            </div>
          </div>

          <div>
            <div className="rounded-md bg-whitesmoke desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">
              <Image
                className="w-full h-full object-cover"
                alt=""
                src={registerImageName}
                width={0}
                height={0}
              />
            </div>

            <div className="text-white font-vollkorn pb-8 text-[24px] mt-3 desktop:w-[237px] mobile:w-[382px]">
              Make an impression
            </div>

            <div className=" text-white font-vollkorn pb-8 text-[16px] desktop:w-[237px] desktop:h-[217px] mobile:w-[382px] mobile:h-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pharetra sem vel lectus posuere cursus. Sed eu diam.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySponsorUs;
