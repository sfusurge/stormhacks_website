const DesignerFriendly = () => {
  const designerFriendlyImageName = "/designer-friendly.png";

  return (
    <>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full
      text-left text-base text-white font-vollkorn-sc hidden mobile:flex">
        <div className="h-[240px] flex-1 relative min-w-[270px] max-w-full flex justify-center items-center">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke w-full h-full" />
          <img
            className="rounded-lg"
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
      text-left text-base text-white font-vollkorn-sc">
        <div className="w-[880px] flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full">
          <div className="h-[340px] flex-1 relative min-w-[270px] max-w-full flex justify-center items-center
          hidden desktop:flex">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke w-full h-full" />
            <img
              className="rounded-lg"
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
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

export default DesignerFriendly;
