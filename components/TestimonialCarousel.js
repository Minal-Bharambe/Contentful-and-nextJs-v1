"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function TestimonialCarousel({ items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const options = { day: "numeric", month: "short", year: "numeric" };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div
              key={item.sys.id}
              className="min-w-full p-4"
            >
              <div className="bg-white p-6 shadow rounded w-[80%] mx-auto">
                <h2 className="font-bold mb-2">
                  {item.fields.hightlight}
                </h2>

                <p className="mb-4">
                  {item.fields.comments}
                </p>

                <h4 className="font-semibold text-right">
                  - {item.fields.name}
                </h4>
                <p className="text-sm text-gray-500 text-right">
                  {new Intl.DateTimeFormat("en-GB", options).format(
                    new Date(item.fields.date)
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2"
      >
        ←
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2"
      >
        →
      </button>
    </div>
  );
}