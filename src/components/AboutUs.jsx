import useMobileScreen from "../utils/hooks/useMobileScreen";
import aboutUsImage1 from "../../public/images/about-us-1.png";
import aboutUsImage2 from "../../public/images/about-us-2.jpg";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <>
      <section
        id="about"
        className="self-stretch flex flex-row items-start justify-center py-0 box-border max-w-full
          text-left text-base text-white font-vollkorn-sc pb-16"
      >
        <div className="w-[880px] grid desktop:grid-cols-2 mobile:grid-cols-1 gap-[40px] max-w-full">
          <div className="text-white">
            <h2 className="font-vollkorn-sc text-base mb-2">about us</h2>
            <h1 className="mb-4 relative text-[40px] leading-[100%] font-normal font-vollkorn">
              Beginner-friendly
            </h1>
            <div className="font-vollkorn text-base whitespace-pre-wrap">
              Make your first hackathon special at StormHacks 2024. In past
              events, 46% of participants have been new hackers— SH24 is one of
              the top places for you to join other beginners in tech and
              self-starters for life-long learning, challenges and more.
            </div>
          </div>

          <div className="h-[300px] min-w-[270px] max-w-[440px] place-self-center">
            <Image
              alt="Image of organizers at Stormhacks 2023"
              src={aboutUsImage1}
              className="rounded"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const DesignerFriendlySection = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <>
      <section
        className="desktop:mb-16 self-stretch flex flex-row items-start justify-center py-0 box-border max-w-full
        text-left text-base"
      >
        <div className="w-[880px] grid desktop:grid-cols-2 mobile:grid-rows-2 gap-[40px] max-w-full">
          <div className="mb-auto h-[300px] min-w-[270px] max-w-[440px] mobile:row-start-2 place-self-center">
            <Image
              alt="Image of organizers at Stormhacks 2023"
              src={aboutUsImage2}
              className="rounded"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="text-white mobile:row-start-1">
            <h2 className="font-vollkorn-sc text-base mb-2">
              Designer-friendly
            </h2>
            <h1 className="mb-4 text-heading leading-[100%] font-vollkorn">
              Coding is not a must-have
            </h1>
            <p className="whitespace-pre-wrap font-vollkorn">
              One of the most challenging things about a hackathon can be
              developing your final submission, especially for hackers who are
              aiming to build their design skills, sharing their ideas and
              stories through visuals and experiences. This can often lead to
              people feeling left out or discouraged from even
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              entering their first hackathon, especially if you're entering on
              your own.
            </p>
            <br />
            <p className="font-vollkorn">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              For all you designers, we're hosting prizes and workshops to help
              support your no-code solutions and prototypes!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const RegisterSection = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <section className="mb-20 desktop:grid desktop:grid-cols-1 desktop:content-center text-white">
      <h2 className="desktop:text-center mobile:text-left text-base font-vollkorn-sc text-white">
        What are you waiting for?
      </h2>
      <h1 className="desktop:text-center mobile:text-left text-heading font-vollkorn text-white">
        Register for StormHacks 2024 today
      </h1>

      <div
        className={`${
          isMobileScreen ? "" : "text-center"
        } text-xs justify-center max-w-mobile`}
      >
        <div className={`${isMobileScreen ? "w-full" : ""} mt-6 `}>
          {/* <a
            href="https://forms.gle/qHGjak2D1A8eUSuq7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-full mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-opacity-50 text-customPurple rounded-md bg-white py-2 px-4`}
            >
              Register as a Hacker
            </button>
          </a> */}
          
          <a
            href="https://forms.gle/v6k3hDo2aFXESFAu5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-full mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-gainsboro-200 text-white rounded-md py-2 px-4`}
            >
              Register as a Mentor
            </button>
          </a>

          {/* <a
            href="https://forms.gle/auZMLBMFFvphT3o89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-vollkorn ${
                isMobileScreen ? "w-full mb-5 min-w-[200px]" : "mr-5"
              } border hover:bg-gainsboro-200 text-white rounded-md py-2 px-4`}
            >
              Volunteer
            </button>
          </a> */}
        </div>
      </div>
    </section>
  );
};

const AboutUs = ({ isMobileScreen }) => {
  return (
    <>
      <AboutUsSection />
      <DesignerFriendlySection />
      <RegisterSection />
    </>
  );
};

export default AboutUs;
