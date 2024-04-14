const Register = () => {
  const registerImageName = "/register.png";
  const registerAsAHackerURL = "https://www.google.com/search?q=placeholder";
  const registerAsAMentorURL = "https://www.google.com/search?q=placeholder";

  return (
    <>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full
      text-center text-base text-white font-vollkorn-sc">
        <div className="w-[880px] flex flex-col items-start justify-start gap-[40px] max-w-full">
          <div className="mobile:h-[540px] self-stretch h-[340px] relative">
            <div className="absolute inset-0 rounded-md bg-whitesmoke" />
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                className="rounded-lg"
                alt=""
                src={registerImageName}
                style={{
                  maxWidth: "95%",
                  maxHeight: "95%",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>

          <div className="self-stretch flex flex-col items-center justify-center gap-[25px] max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
              <div
                className="self-stretch flex flex-row items-start desktop:justify-center mobile:justify-start">
                <div className="w-[230px] relative font-semibold inline-block">
                  What are you waiting for?
                </div>
              </div>
              <h1
                className="m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn
                mobile:text-center">
                Register for <br className="hidden mobile:flex"/>
                StormHacks 2024 <br className="hidden mobile:flex"/>
                Today
              </h1>
            </div>

            <div className="self-stretch flex items-center justify-center gap-[15px]">
              <button
                onClick={() => window.location.href = registerAsAHackerURL}
                className="cursor-pointer [border:none] desktop:py-[10px] mobile:py-[15px] px-8 bg-white
                self-stretch flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
                <div className="relative text-base leading-[25px] font-vollkorn text-gray text-center">
                  Register as a Hacker
                </div>
              </button>

              <button
                onClick={() => window.location.href = registerAsAMentorURL}
                className="cursor-pointer desktop:py-[10px] mobile:py-[15px] px-8 bg-[transparent] self-stretch
                flex flex-row items-center justify-center border-[1px] border-solid border-white
                hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid
                hover:border-gainsboro-100">
                <div className="relative text-base leading-[25px] font-vollkorn text-white text-center">
                  Register as a Mentor/Volunteer
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;