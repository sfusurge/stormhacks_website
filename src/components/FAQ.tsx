import React from "react";
import { FrequentlyAskedQuestions } from "@/manifest";
import Accordion from "./Accordion";

const FAQ: React.FC = () => {
  return (
    <section className="pt-20 self-stretch flex flex-col items-center py-0 px-5 box-border max-w-full text-center text-base text-white font-vollkorn">
      <div className="w-full max-w-[880px] flex flex-col items-center justify-start gap-40px">
        <div className="self-stretch flex flex-col items-start justify-start gap-25px">
          <h1
            className={`m-0 self-stretch relative text-[40px] leading-[100%] font-normal font-vollkorn mobile:text-center`}
            style={{ marginBottom: "20px" }}
          >
            Frequently Asked <br className="hidden mobile:flex" />
            Questions <br className="hidden mobile:flex" />
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <div
            className={`grid gap-4 mobile:grid-cols-1 desktop:grid-cols-2 w-full max-w-[880px]`}
          >
            {FrequentlyAskedQuestions.map((data, index) => (
              <div className="p-0">
                <Accordion
                  title={data.title}
                  answer={data.answer}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
