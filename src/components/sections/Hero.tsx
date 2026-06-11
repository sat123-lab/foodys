import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WaveBackground } from "@/components/WaveBackground";
import { HeroPaperShader } from "@/components/HeroPaperShader";
import bannerSlide2 from "@/assets/Homeimages/banner new 1 revamp.png";
import bannerSlide3 from "@/assets/Homeimages/new banner 2 revamp image.png";
import bannerSlide4 from "@/assets/Homeimages/banner revamp pt 3 image.png";

const slides = [
  {
    title: "Food For Travel",
    subtitle: "Airports. Highways. Metros.",
    cta: "Explore",
    ctaLink: "/verticals",
    image: "/images/banner-new1.png",
    secondaryLink: null,
  },
  {
    title: "Bringing you the best of Indian Cuisine",
    subtitle: "",
    cta: "Discover more",
    ctaLink: "/about",
    image: bannerSlide2,
    secondaryLink: { label: "About our company", to: "/about" },
  },
  {
    title: "Local iconic flavours where you least expect them",
    subtitle: "Airports. Highways. Metros.",
    cta: "Explore",
    ctaLink: "/verticals",
    image: bannerSlide3,
    secondaryLink: { label: "About our company", to: "/about" },
  },
  {
    title: "Served fresh through our smart proprietary logistics system",
    subtitle: "Airports. Highways. Metros.",
    cta: "Explore",
    ctaLink: "/verticals",
    image: bannerSlide4,
    secondaryLink: { label: "About our company", to: "/about" },
  },
];

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen w-full max-w-full overflow-x-clip overflow-hidden">
      <HeroPaperShader />
      <div ref={emblaRef} className="relative z-10 w-full max-w-full overflow-hidden min-h-screen">
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div key={index} className="relative shrink-0 grow-0 basis-full min-w-0 w-full max-w-full min-h-screen">
              <div className="container relative min-h-screen flex items-center pt-28 pb-32 md:pt-32 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white z-10"
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-4">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                        {slide.subtitle}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link to={slide.ctaLink} className="btn-foody">
                        {slide.cta}
                      </Link>
                      {slide.secondaryLink && (
                        <Link
                          to={slide.secondaryLink.to}
                          className="text-white/90 text-sm hover:text-white underline underline-offset-4 transition-colors"
                        >
                          {slide.secondaryLink.label}
                        </Link>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={selectedIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex justify-center lg:justify-end w-full min-w-0 max-w-full"
                  >
                    <div className="relative w-[min(280px,78vw)] aspect-square sm:w-[340px] md:w-[420px] lg:w-[480px]">
                      <div className="absolute inset-0 rounded-full bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12),0_8px_32px_rgba(255,255,255,0.15)] ring-4 ring-white/20 flex items-center justify-center overflow-hidden">
                        <img
                          src={slide.image}
                          alt=""
                          className="w-[85%] h-[85%] object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveBackground />

      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 size-10 md:size-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6 md:size-7" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 size-10 md:size-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6 md:size-7" />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
