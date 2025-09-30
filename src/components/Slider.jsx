import { useState, useEffect } from "react";
import random from "/assets/random.jpg";
export default function Slider({ sliderNews }) {
  const [currentSlide, setCurrentSlide] = useState(2);
  const length = sliderNews?.length || 0;

  const nextSlide = () => {
    if (length > 0) {
      setCurrentSlide((prev) => (prev + 1) % length);
    }
  };

  const prevSlide = () => {
    if (length > 0) {
      setCurrentSlide((prev) => (prev - 1 + length) % length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (length <= 0) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(sliderNews) || length <= 0) {
    return null;
  }

  const safeCurrentSlide = currentSlide >= length ? 0 : currentSlide;

  return (
    <div className="relative w-full h-96 mb-6 overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        {sliderNews.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === safeCurrentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full h-full">
              <img
                src={item.urlToImage || random}
                alt={item.title || "News image"}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
              <div className="container mx-auto px-4">
                <div
                  className={`max-w-md ${
                    item.textAlign === "text-right"
                      ? "ml-auto"
                      : item.textAlign === "text-center"
                      ? "mx-auto"
                      : ""
                  }`}
                >
                  <h1
                    className={`text-4xl font-bold text-white mb-4 ${
                      item.textAlign || "text-left"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`text-white text-opacity-75 mb-6 text-lg ${
                      item.textAlign || "text-left"
                    }`}
                  >
                    {item.description || item.content}
                  </p>
                  <div className={item.textAlign || "text-left"}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderNews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === safeCurrentSlide
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-200 group"
        aria-label="Previous"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-200 group"
        aria-label="Next"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
