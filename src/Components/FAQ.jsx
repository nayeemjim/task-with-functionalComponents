import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
  {
    id: 2,
    question: "I like your works, how do we start a project?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
  {
    id: 3,
    question: "What info is required to get a quotation?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(1); // Initially open first item

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="px-6 pt-41">
      <h3 className="mb-2 text-sm font-medium text-blue-600">
        Frequently asked questions
      </h3>
      <h2 className="mb-[80px] leading-snug font-light text-gray-900 md:text-4xl lg:text-6xl">
        Constant collaboration is how we roll. <br /> Let's see if we are a good
        fit.
      </h2>

      <div>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="cursor-pointer border-b pr-8 pb-4 text-[32px]"
            onClick={() => toggle(faq.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex space-x-4">
                <span className="font-semibold text-yellow-500">0{faq.id}</span>
                <p className="mb-4 text-[40px] font-medium text-gray-900">
                  {faq.question}
                </p>
              </div>
              <div className="mt-1">
                {openId === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
            {openId === faq.id && faq.answer && (
              <p className="mt-3 ml-10 max-w-2xl text-sm text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQ;
