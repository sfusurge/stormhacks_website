import React from "react";
import Accordion from "./Accordion";

const FAQ: React.FC = () => {
  return (
    <section className="pt-20 self-stretch flex flex-col items-center py-0 px-5 box-border max-w-full text-center text-base text-white font-vollkorn">
      <div className="w-full max-w-[880px] flex flex-col items-center justify-start gap-40px">
        <div className="self-stretch flex flex-col items-start justify-start gap-25px">
          <h1
            className="m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn
                  mobile:text-left"
            style={{ marginBottom: "20px" }}
          >
            Frequently Asked <br className="hidden mobile:flex" />
            Questions <br className="hidden mobile:flex" />
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full max-w-[880px]">
            <div className="p-4 border border-white">
              <Accordion
                title="What is this event about?"
                answer={`A hackathon is an event where teams collaborate on a project, or "hack", given a certain time limit. At Stormhacks, teams of 1-4 collaborate over 24 hours to brainstorm and innovate solutions to real-world problems. Or they are free to work on whatever fun/silly ideas they have in mind, the door is open. We will be inviting various mentors, judges, and guests working in the tech industry to share their expertise and knowledge to our participants. Winning teams will be selected based on various criteria that will be revealed closer to our event.`}
              />
            </div>
            <div className="p-4 border border-white">
              <Accordion
                title="What is this event about?"
                answer="This is the answer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
