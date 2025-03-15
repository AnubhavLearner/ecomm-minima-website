
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop",
    title: "Premium Tech Products",
    subtitle: "Minimalist Design. Maximum Performance.",
    cta: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop",
    title: "New Arrivals",
    subtitle: "Discover our latest collection of curated tech essentials",
    cta: "Explore"
  },
  {
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1287&auto=format&fit=crop",
    title: "Premium Audio",
    subtitle: "Experience sound like never before with our premium collection",
    cta: "Shop Audio"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    Array(slides.length).fill(false)
  );

  // Preload all images
  useEffect(() => {
    const imagePromises = slides.map((slide, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => {
          setImagesLoaded((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          resolve();
        };
      });
    });

    Promise.all(imagePromises);
  }, []);

  // Auto advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      if (imagesLoaded.every((loaded) => loaded)) {
        goToNextSlide();
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentSlide, imagesLoaded]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index
              ? isTransitioning
                ? "opacity-0"
                : "opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <div
          className={`transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 max-w-3xl tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            {slides[currentSlide].subtitle}
          </p>
          <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
            {slides[currentSlide].cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-10"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
