import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    id: 1,
    title: "Ganesh Chaturthi begins",
    date: "2025-09-07",
    content: "Festivities commence in the evening with a traditional puja and decorations.",
  },
  {
    id: 2,
    title: "Shobha Yatra Route Update",
    date: "2025-09-08",
    content: "Procession will start at the temple and conclude at the community ground.",
  },
  {
    id: 3,
    title: "Community Prasadam",
    date: "2025-09-09",
    content: "Prasadam distribution after evening aarti. Please gather near the main hall.",
  },
];

const Announcements = () => {
  return (
    <section aria-labelledby="announcements" className="container py-8 md:py-12 animate-fade-in">
      <h2 id="announcements" className="font-display text-2xl font-semibold md:text-3xl">Announcements</h2>
      <p className="mt-2 text-muted-foreground">Latest updates from the admin team.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {announcements.map((a) => (
          <article key={a.id} className="hover-scale">
            <Card>
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-lg md:text-xl">{a.title}</CardTitle>
                  <time dateTime={a.date} className="mt-1 block text-xs text-muted-foreground">
                    {new Date(a.date).toLocaleDateString()}
                  </time>
                </div>
                <Badge variant="secondary">New</Badge>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">
                {a.content}
              </CardContent>
            </Card>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Admins will be able to post and edit announcements here. We can connect this to Supabase on request.
      </p>
    </section>
  );
};

export default Announcements;
