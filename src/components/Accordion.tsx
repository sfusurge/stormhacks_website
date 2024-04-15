import React, { useState } from "react";
import { ChevronDown } from "react-feather";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="p-4 border border-white">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full"
      >
        <span className="text-white text-base font-vollkorn">{title}</span>
        <ChevronDown
          className={`text-white transition-transform ${
            accordionOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[auto] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden text-white text-sm font-vollkorn text-left">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
