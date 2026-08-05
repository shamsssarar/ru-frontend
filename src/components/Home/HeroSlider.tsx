"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Exact image URLs extracted from the provided HTML
const slides = [
  {
    id: 1,
    src: "/slider/abg-2.jpg",
    alt: "Rajshahi University Campus 1",
  },
  {
    id: 2,
    src: "/slider/domain_name.jpg",
    alt: "Rajshahi University Campus 2",
  },
  {
    id: 3,
    src: "/slider/lib_01.jpg",
    alt: "Rajshahi University Central Library",
  },
];

export default function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  );
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    // position: relative matches the extracted computed styles
    <section className="relative w-full h-[320px] md:h-[520px] overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="relative w-full h-full pl-0"
            >
              {/* 
                We use the animate-slow-zoom class we defined in globals.css 
                to replicate the 20s zoom exactly as the original site does.
              */}
              <div className="relative w-full h-[320px] md:h-[520px] overflow-hidden ">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className={`object-cover ${
                    current === index ? "animate-slow-zoom" : "scale-100"
                  }`}
                  priority={slide.id === 1} // Only prioritize loading the first image
                />
                {/* A subtle overlay to ensure the transparent Navbar text remains readable */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows positioned on the edges */}
        <CarouselPrevious className="left-4 md:left-8 bg-transparent border-none text-white hover:bg-black/75 h-12 w-12 transition-colors duration-300" />
        <CarouselNext className="right-4 md:right-8 bg-transparent border-none text-white hover:bg-black/75 h-12 w-12 transition-colors duration-300" />
      </Carousel>
    </section>
  );
}
