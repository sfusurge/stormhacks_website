import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PlaceHoldImage from "../../public/assets/images/placehold-img.png";
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
          <h2 className="font-vollkorn-sc text-[20px]">
            MAY 18–19, 2024 @ SFU BURNABY
          </h2>
          <h1 className="mt-1 mb-5 desktop:text-[64px] mobile:text-[48px] font-vollkorn">
            StormHacks 2024
          </h1>
          <p
            className={`font-vollkorn ${
              isMobileScreen ? "" : "text-center"
            } text-xs justify-center max-w-sm`}
          >
            Welcome to StormHacks, where innovation meets community!
          </p>
          <div className={`${isMobileScreen ? "w-full" : ""} mt-6 `}>
            <a href="https://forms.gle/qHGjak2D1A8eUSuq7">
              <button
                className={`font-vollkorn ${
                  isMobileScreen ? "w-full mb-5 min-w-[200px]" : "mr-5"
                } border hover:bg-customPurple hover:text-white text-customPurple bg-white py-2 px-4`}
              >
                Register as a Hacker
              </button>
            </a>

            <a href="https://forms.gle/v6k3hDo2aFXESFAu5">
              <button
                className={`font-vollkorn ${
                  isMobileScreen ? "w-full mb-10 min-w-[200px]" : ""
                } border hover:bg-white hover:text-customPurple text-white py-2 px-4`}
              >
                Register as a Mentor/Volunteer
              </button>
            </a>
          </div>
        </div>

        <div className=" h-[51vh] flex justify-center items-center text-white">
          <Image
            src={"/images/hero-section.png"}
            fill={true}
            alt="image"
            style={{ zIndex: -1 }}
          />
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
              <p className="relative text-[50px]">$5k</p>
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
