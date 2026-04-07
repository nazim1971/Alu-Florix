"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

export default function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const num = String(i + 1).padStart(2, "0");
        return (
          <div key={i} className="py-5">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {num}. Q: {item.question}
              </span>
              <span className="shrink-0 text-gray-500">
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 pl-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
