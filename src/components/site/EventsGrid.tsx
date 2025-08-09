import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const events = [
  {
    title: "Ganesh Puja",
    image: event1,
    description: "Traditional puja with flowers, mantras, and offerings.",
  },
  {
    title: "Shobha Yatra",
    image: event2,
    description: "Procession through the streets with drums and devotion.",
  },
  {
    title: "Evening Aarti",
    image: event3,
    description: "Community aarti with diyas and bhajans.",
  },
];

const EventsGrid = () => {
  return (
    <section aria-labelledby="events" className="container py-12 md:py-16">
      <h2 id="events" className="font-display text-2xl font-semibold md:text-3xl">Festival Events</h2>
      <p className="mt-2 text-muted-foreground">Join our vibrant celebrations across multiple days.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <Card key={e.title} className="hover-scale overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={e.image} alt={`${e.title} image`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-6 text-sm text-muted-foreground">
              {e.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EventsGrid;
