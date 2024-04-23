import React from "react";

const Execs = () => {
  return (
    <section className="pt-10 self-stretch flex flex-col items-center py-0 px-5 box-border max-w-full text-center text-base text-white font-vollkorn">
      <h1
        className={`m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn mobile:text-center`}
        style={{ marginBottom: "20px" }}
      >
        Made with love by your <br className="hidden desktop:flex" />
        friends at SFU Surge.<br className="hidden desktop:flex" />
         
      </h1>
     
      <div className="mb:20px font-vollkorn text-center text-white pb-10 text-[16px]">
      SFU Surge is an all-inclusive, student-led organization founded in  2019. <br className="hidden desktop:flex" />
      Our mission is to promote curiosity and excitement for a future in  <br className="hidden desktop:flex" />
      technology, while guiding students on their paths to career success. <br className="hidden desktop:flex" />
      </div>

      <div className="font-vollkorn text-center text-white pb-10 text-[16px]">
      We  are an innovative community empowering students with projects, <br className="hidden desktop:flex" />
      events,  and networking opportunities. StormHacks combines these three aspects <br className="hidden desktop:flex" />
      over the course of a memorable weekend filled with mini-<br className="hidden desktop:flex" />
      contests,  workshops, sponsor booths, and more.
      </div>

    </section>
  );
};

export default Execs;
