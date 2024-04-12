import Image from "next/image";
const WhySponsorUs = () => {
  const registerImageName = "/register.png";
  return (
    <>
      <div className="text-center text-white font-vollkorn-sc pb-5 pt-10 text-[16px]">
        PLEASE SPONSOR US
      </div>

      <div className="text-center text-white font-vollkorn-sc pb-8 text-[40px]">
        Why sponsor us?
      </div>

      <div className="text-center text-white font-vollkorn-sc pb-10 text-[16px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We're looking for passionate companies and organizations looking to
        foster talent across the global tech community—people hoping to take on
        young and innovative minds, presenting meaningful opportunities and
        challenge students’ limits.
      </div>

      <div className="flex justify-center pb-10">
        <button className="w-[135px] h-[48px] bg-opacity-50 hover:bg-gainsboro-200 text-white font-bold py-2 px-4 border border-white">
            Click me
        </button>
      </div>  
      
      <div className="grid desktop:grid-cols-3 mobile:grid-cols-1 pb-16 gap-6 text-white">
        <div>
          <div className="rounded-md bg-whitesmoke max-w-[267px]">
            <Image
              className="rounded-lg"
              alt=""
              src={registerImageName}
              width={267}
              height={217}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <div className="text-center text-white font-vollkorn-sc pb-8 text-[24px] mt-3">
            Recruit for the future
          </div>

          <div className="text-center text-white font-vollkorn-sc pb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra sem vel lectus posuere cursus. Sed eu diam.
          </div>
        </div>

        <div>
          <div className="rounded-md bg-whitesmoke max-w-[267px]">
            <Image
              className="rounded-lg"
              alt=""
              src={registerImageName}
              width={267}
              height={217}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <div className="text-center text-white font-vollkorn-sc pb-8 text-[24px] mt-3">
            Promotion + receive feedback
          </div>

          <div className="text-center text-white font-vollkorn-sc pb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra sem vel lectus posuere cursus. Sed eu diam.
          </div>
        </div>

        <div>
          <div className="rounded-md bg-whitesmoke max-w-[267px]">
            <Image
              className="rounded-lg"
              alt=""
              src={registerImageName}
              width={267}
              height={217}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <div className="text-center text-white font-vollkorn-sc pb-8 text-[24px] mt-3">
            Make an impression
          </div>

          <div className="text-center text-white font-vollkorn-sc pb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra sem vel lectus posuere cursus. Sed eu diam.
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySponsorUs;
