import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const coordinators = [
  { name: "Soma Penchala Bharath" },
  { name: "Coordinator 2" },
  { name: "Coordinator 3" },
  { name: "Coordinator 4" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const CoordinatorsGrid = () => {
  return (
    <section aria-labelledby="coordinators" className="container py-12 md:py-16">
      <h2 id="coordinators" className="font-display text-2xl font-semibold md:text-3xl">Coordinators</h2>
      <p className="mt-2 text-muted-foreground">The dedicated team behind Podalakur Ganesh.</p>
      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {coordinators.map((c) => (
          <div key={c.name} className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-secondary text-secondary-foreground">
                {initials(c.name)}
              </AvatarFallback>
            </Avatar>
            <p className="mt-3 text-sm font-medium">{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoordinatorsGrid;
