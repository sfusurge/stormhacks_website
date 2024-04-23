import React, { useState, useEffect } from "react";
import DesktopLogo from "../../public/images/logo-desktop.svg";
import MobileLogo from "../../public/images/logo-mobile.svg";
import Image from "next/image";
import HeroSection from "../../public/images/hero-section.png";

function Landing({ isMobileScreen }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "rgba(48, 36, 56, 1)",
          minHeight: "5px",
          position: "relative",
          zIndex: 1,
          marginBottom: "0px",
        }}
        className={`${
          isMobileScreen ? "pt-32" : "min-h-[40vh] pt-24 pl-5"
        } flex flex-col justify-center items-center text-white`}
      >
        <h2 className="font-vollkorn-sc text-[20px]">
          MAY 18–19, 2024 @ SFU BURNABY
        </h2>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Image
            alt="Stormhacks logo"
            src={isMobileScreen ? MobileLogo : DesktopLogo}
            className="mb-12"
          />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          textAlign: "center",
          backgroundColor: "rgba(48, 36, 56, 1)",
          color: "white",
        }}
      >
        <div className="font-vollkorn text-base whitespace-pre-wrap">
          Conjure code and summon spellbinding software solutions at our
        </div>

        <div className="font-vollkorn text-base whitespace-pre-wrap mb-5">
          most magical iteration of StormHacks yet!
        </div>

          <a
            href="https://forms.gle/qHGjak2D1A8eUSuq7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-2/3 mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-opacity-50 text-customPurple rounded-md bg-white py-2 px-4`}
            >
              Register as a Hacker
            </button>
          </a>
          
          <a
            href="https://forms.gle/v6k3hDo2aFXESFAu5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-2/3 mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-gainsboro-200 text-white rounded-md py-2 px-4`}
            >
              Mentor
            </button>
          </a>

          <a
            href="https://forms.gle/auZMLBMFFvphT3o89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-2/3 mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-gainsboro-200 text-white rounded-md py-2 px-4`}
            >
              Volunteer
            </button>
          </a>
      </div>

      <Image src={HeroSection} className="my-auto" />

      <div
        style={{ backgroundColor: "rgb(77, 50, 63)", marginTop: "-5px" }}
        className="mobile:px-4 grid grid-cols-[1fr_min(115ch,_calc(100%-64px))_1fr] gap-x-[32px] [&>*]:col-span-1 [&>*]:col-start-2 desktop:gap-x-[7.5vh] mobile:gap-x-[5vh] place-content-center"
      >
        <div className="pt-10 flex justify-center font-vollkorn">
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
    </div>
  );
}

export default Landing;
