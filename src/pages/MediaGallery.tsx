import { Helmet } from "react-helmet-async";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import { Button } from "@/components/ui/button";

const MediaGallery = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "/media";
  const items = [
    { type: "image", src: event1, alt: "Puja setup" },
    { type: "image", src: event2, alt: "Procession" },
    { type: "image", src: event3, alt: "Evening aarti" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Media Gallery | Podalakur Ganesh</title>
        <meta name="description" content="View photos and videos from Podalakur Ganesh Chaturthi celebrations." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <section className="container py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold md:text-4xl">Media Gallery</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">A collection of photos and videos from our festivities.</p>
          </div>
          <Button asChild variant="outline">
            <a href="/">Back to Home</a>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <figure key={i} className="overflow-hidden rounded-lg border bg-card">
              <img src={it.src} alt={it.alt} loading="lazy" className="h-64 w-full object-cover" />
              <figcaption className="p-3 text-xs text-muted-foreground">{it.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MediaGallery;
