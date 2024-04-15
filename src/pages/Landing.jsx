import React from "react";
import PlaceHoldImage from "../../public/images/placehold-img.png";
import Image from "next/image";

function Landing({ isMobileScreen }) {
  return (
    <>
      <div>
        <div
          className={`${
            isMobileScreen
              ? "items-start pt-32"
              : "items-center h-[40vh] pt-24 pl-5"
          } flex flex-col justify-center text-white`}
        >
          <h2 className="text-[24px] font-vollkorn">
            MAY 18-19, 2024 @ SFU BURNABY
          </h2>
          <h1 className="text-[64px] font-vollkorn-sc mt-1 mb-5 ">
            StormHacks 2024
          </h1>
          <p
            className={`${
              isMobileScreen ? "" : "text-center"
            } text-xs justify-center max-w-sm`}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum
            dolor sit amet consectetur adipiscing elit.
          </p>
          <div className={`${isMobileScreen ? "w-full" : ""} mt-6 `}>
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-full mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-customPurple hover:text-white text-customPurple bg-white py-2 px-4 rounded`}
            >
              Register as a Hacker
            </button>

            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-full mb-10 min-w-[200px]" : ""
              } border hover:bg-white hover:text-customPurple text-white py-2 px-4 rounded`}
            >
              Register as a Mentor/Volunteer
            </button>
          </div>
        </div>
        <div className=" h-[51vh] flex justify-center items-center text-white">
          <Image src={PlaceHoldImage} width={600} alt="image" />
        </div>
        <div className="pt-10  flex justify-center font-vollkorn">
          <div
            className={`w-[70vw] ${
              isMobileScreen ? "" : "flex"
            }  text-center justify-around mb-10`}
          >
            <div className="flex flex-col text-white mb-5">
              <p className="relative text-[50px]">24</p>
              <p>hours</p>
            </div>
            <div className="flex flex-col text-white mb-5">
              <p className="relative text-[50px]">300</p>
              <p>total hackers</p>
            </div>
            <div className="flex flex-col text-white mb-5">
              <p className="relative text-[50px]">$90k</p>
              <p>in prizes</p>
            </div>
            <div className="flex flex-col text-white mb-5">
              <p className="relative text-[50px]">70+</p>
              <p>diverse projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
