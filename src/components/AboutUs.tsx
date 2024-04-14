const AboutUs = () => {
    const beginnerFriendlyImageName = "/beginner-friendly.png";
  
    return (
      <>
        <section className="self-stretch flex-row items-start justify-center py-0 px-5 box-border max-w-full
        text-left text-base text-white font-vollkorn-sc hidden mobile:flex">
          <div className="h-[240px] flex-1 relative min-w-[270px] max-w-full flex justify-center items-center">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke w-full h-full" />
            <img
              className="rounded-lg"
              alt=""
              src={beginnerFriendlyImageName}
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
            <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[270px]
            max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative font-semibold inline-block min-w-[75px]">
                    about us
                  </div>
                  <h1
                    className="m-0 relative text-[40px] leading-[100%] font-normal font-vollkorn">
                    Beginner-friendly
                  </h1>
                </div>
                <div className="self-stretch h-[110px] relative font-vollkorn inline-block leading-snug">
                  Make your first hackathon special at StormHacks 2024. In
                  past events, 46% of participants have been new hackers— SH24 is
                  one of the top places for you to join other beginners in tech
                  and self-starters for life-long learning, challenges and more.
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
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default AboutUs;