import useMobileScreen from "../utils/hooks/useMobileScreen"

const AboutUsSection = () => {
  const beginnerFriendlyImageName = "/beginner-friendly.png";

  return (
    <>
        <section
          className="self-stretch flex-row items-start justify-center py-0 px-5 box-border max-w-full
          text-left text-base text-white font-vollkorn-sc hidden mobile:flex"
          id="about"
        >
          <div className="h-[240px] flex-1 relative min-w-[270px] max-w-full flex justify-center items-center">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke w-full h-full" />
            <img
              className="rounded-lg"
              alt=""
              src={beginnerFriendlyImageName}
              style={{
                maxWidth: "95%",
                maxHeight: "95%",
                objectFit: "contain",
              }}
            />
          </div>
        </section>

        <section
          className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full
          text-left text-base text-white font-vollkorn-sc pb-16"
        >
          <div className="w-[880px] flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full">
            <div
              className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[270px]
              max-w-full"
            >
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative font-semibold inline-block min-w-[75px]">
                    about us
                  </div>
                  <h1 className="m-0 relative text-[40px] leading-[100%] font-normal font-vollkorn">
                    Beginner-friendly
                  </h1>
                </div>
                <div className="self-stretch h-[110px] relative font-vollkorn inline-block leading-snug">
                  Make your first hackathon special at StormHacks 2024. In past
                  events, 46% of participants have been new hackers— SH24 is one
                  of the top places for you to join other beginners in tech and
                  self-starters for life-long learning, challenges and more.
                </div>
              </div>
            </div>
            <div className="h-[300px] flex-1 relative min-w-[270px] max-w-full hidden desktop:flex">
              <div className="absolute top-0 left-0 rounded-md bg-whitesmoke w-full h-full" />
              <div className="absolute inset-0 flex justify-center items-center">
                <img
                  className="rounded-lg"
                  alt=""
                  src={beginnerFriendlyImageName}
                  style={{
                    maxWidth: "95%",
                    maxHeight: "95%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

const DesignerFriendlySection = () => {
  const designerFriendlyImageName = "/designer-friendly.png";

  return (
    <>
      <section className="self-stretch flex-row items-start justify-center py-0 px-5 box-border max-w-full
      text-left text-base text-white font-vollkorn-sc hidden mobile:flex">
        <div className="h-[240px] flex-1 relative min-w-[270px] max-w-full flex justify-center items-center">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke w-full h-full" />
          <img
            className="rounded-lg"
            alt=""
            src={designerFriendlyImageName}
            style={
              {
                maxWidth: "95%",
                maxHeight: "95%",
                objectFit: "contain"
              }
            }
          />
        </div>
      </section>

      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full
      text-left text-base text-white font-vollkorn-sc pb-16">
        <div className="w-[880px] flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full">
          <div className="h-[430px] flex-1 relative min-w-[270px] max-w-full justify-center items-center
          hidden desktop:flex">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke w-full h-full" />
            <img
              className="rounded-lg"
              alt=""
              src={designerFriendlyImageName}
              style={
                {
                  maxWidth: "95%",
                  maxHeight: "95%",
                  objectFit: "contain"
                }
              }
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[270px]
          max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start mobile:pt-4 gap-[4px]">
                <div className="relative font-semibold">
                  designer-friendly
                </div>
                <h1 className="m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn">
                  Coding is not a must-have
                </h1>
              </div>
              <div className="self-stretch h-[220px] relative font-vollkorn inline-block leading-snug">
                <p className="m-0 whitespace-pre-wrap">
                  One of the most challenging things about a hackathon can be
                  developing your final submission, especially for hackers who
                  are aiming to build their design skills, sharing their ideas
                  and stories through visuals and experiences. This can often
                  lead to people feeling left out or discouraged from even
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  entering their first hackathon, especially if you're entering
                  on your own.
                </p>
                <p className="m-0 mb-4"></p>
                <p className="m-0">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  For all you designers, we're hosting prizes and workshops to
                  help support your no-code solutions and prototypes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const RegisterSection = () => {
  const isMobileScreen = useMobileScreen()

  return  (
    <section className="px-5 mb-24 desktop:grid desktop:grid-cols-1 desktop:content-center text-white">
      <h2 className="desktop:text-center mobile:text-left text-base font-vollkorn-sc text-white">
        What are you waiting for?
      </h2>
      <h1 className="desktop:text-center mobile:text-left text-heading font-vollkorn text-white">Register for Stormhacks 2024 today</h1>
      
      <div className={`${isMobileScreen ? '' : 'text-center'} text-xs justify-center max-w-mobile`}>
        <div className={`${isMobileScreen ? 'w-full' : ''} mt-6 `}>
          <a href="https://forms.gle/qHGjak2D1A8eUSuq7">
              <button className={`font-vollkorn ${isMobileScreen ? 'w-full mb-5 min-w-[200px]' : 'mr-5'} border hover:bg-customPurple hover:text-white text-customPurple bg-white py-2 px-4`}>
                Register as a Hacker
              </button>
          </a>
          <a href="https://forms.gle/v6k3hDo2aFXESFAu5">
              <button className={`font-vollkorn ${isMobileScreen ? 'w-full mb-5 min-w-[200px]' : 'mr-5'} border hover:bg-white hover:text-customPurple text-white py-2 px-4`}>
                Register as a Mentor/Volunteer
              </button>
          </a>
        </div>
      </div>
    </section>
  )
}

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
