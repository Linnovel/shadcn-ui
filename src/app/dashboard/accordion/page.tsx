import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const items = [
  {
    id: "item-1",
    question: "Is it accesible?",
    answer: "Yes. It adhere to the WAI-AEIA design pattern",
  },
  {
    id: "item-2",
    question: "How do I get started",
    answer: "Yes. It adhere to the WAI-AEIA design pattern",
  },
  {
    id: "item-3",
    question: "Is it accesible?",
    answer: "Yes. It adhere to the WAI-AEIA design pattern",
  },
];

const page = () => {
  return (
    <Accordion type="single" className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default page;
