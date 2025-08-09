import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import hero1 from "@/assets/ganesh-hero-1.jpg";
import hero2 from "@/assets/ganesh-hero-2.jpg";
import hero3 from "@/assets/ganesh-hero-3.jpg";

const HeroCarousel = () => {
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "Connect authentication",
      description: "To enable Google Login, please connect Supabase in Lovable (green button top-right).",
    });
  };

  return (
    <header className="relative">
      <div className="container py-6">
        <h1 className="sr-only">Podalakur Ganesh – Ganesh Chaturthi Festival</h1>
      </div>
      <Carousel className="container">
        <CarouselContent>
          {[hero1, hero2, hero3].map((src, idx) => (
            <CarouselItem key={idx}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`Lord Ganesha hero image ${idx + 1}`}
                  loading="eager"
                  className="h-[52vh] w-full object-cover sm:h-[64vh] md:h-[70vh]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
                  <div className="max-w-3xl animate-enter">
                    <h2 className="font-display text-3xl font-semibold leading-tight drop-shadow md:text-5xl">
                      Podalakur Ganesh
                    </h2>
                    <p className="mt-3 text-base/relaxed drop-shadow md:text-lg">
                      Celebrate Ganesh Chaturthi with devotion, culture, and community.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild variant="hero" size="lg">
                        <a href="/media" aria-label="View media gallery">View Gallery</a>
                      </Button>
                      <Button variant="secondary" size="lg" onClick={handleLogin}>
                        Login with Google
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="backdrop-blur supports-[backdrop-filter]:bg-white/30" aria-label="Previous" />
        <CarouselNext className="backdrop-blur supports-[backdrop-filter]:bg-white/30" aria-label="Next" />
      </Carousel>
    </header>
  );
};

export default HeroCarousel;
