import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
    author: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
  },
  {
    text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
    author: "Nayeem Khan Jim",
    role: "CEO of Basecamp Corp",
  },
  // You can add more testimonial objects here
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setIndex(index === 0 ? total - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === total - 1 ? 0 : index + 1);
  };

  const { text, author, role } = testimonials[index];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-center">
      <p className="mb-10 text-2xl leading-relaxed font-light text-gray-900 md:text-3xl">
        “ {text} ”
      </p>

      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Avatar + Info */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-800">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-sm text-gray-600">
            {String(index + 1).padStart(2, "0")}/
            {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-800"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TestimonialSlider;
