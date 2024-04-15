import React from "react";
import Accordion from "./Accordion";
import { FrequentlyAskedQuestions } from "@/manifest";

const FAQ: React.FC = () => {
  return (
    <>
      <h1
        className="pb-8 text-center text-[40px] text-white leading-[100%] font-vollkorn"
        style={{ marginBottom: "20px" }}
      >
        Frequently asked <br className="hidden mobile:flex" />
        questions <br className="hidden mobile:flex" />
      </h1>

      <section className="grid desktop:grid-cols-2 mobile:grid-cols-1 row-auto place-content-center desktop:gap-6 mobile:gap-4 desktop:px-24 w-full">
        {FrequentlyAskedQuestions.map((data, index) => (
          <Accordion title={data.title} answer={data.answer} key={index} />
        ))}
      </section>
    </>
  );
};

export default FAQ;
