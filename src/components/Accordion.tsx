import starIcon from "../assets/images/icon-star.svg";

import { useState } from "react";
import AccordionItem from "./accordion/AccordionItem";
import AccordionDivider from "./accordion/AccordionDivider";
import { faqs } from "../utils/faqs";

interface AccordionProps {
  header?: string;
  data?: typeof faqs;
}

function Accordion({ header = "", data = [] }: AccordionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const isLastItem = data.length - 1;

  return (
    <div className="mt-[142.5px] lg:mt-[167.5px] bg-white rounded-lg shadow-custom p-6 h-auto w-full flex flex-col gap-6 lg:gap-8 lg:w-[600px] mx-auto lg:p-10 mb-10">
      <div className="flex items-center gap-6">
        <div className="relative w-6 h-6 lg:w-10 lg:h-10">
          <img src={starIcon} alt="star icon" className="w-full h-full" />
        </div>
        <h1 className="text-dark-purple text-[32px] lg:text-[56px] font-bold">
          {header}
        </h1>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <div key={faq.id}>
            <AccordionItem
              question={faq.question}
              answer={faq.answer}
              isOpen={selectedIndex === index}
              onToggle={() => handleOpen(index)}
            />
            {isLastItem !== index && <AccordionDivider />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
