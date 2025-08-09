import { Helmet } from "react-helmet-async";
import HeroCarousel from "@/components/site/HeroCarousel";
import EventsGrid from "@/components/site/EventsGrid";
import Announcements from "@/components/site/Announcements";
import MediaSection from "@/components/site/MediaSection";
import CoordinatorsGrid from "@/components/site/CoordinatorsGrid";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "/";
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Podalakur Ganesh',
    url: canonical,
    description: 'Ganesh Chaturthi festival site for Podalakur Ganesh with events and media gallery.'
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Podalakur Ganesh | Ganesh Chaturthi Festival</title>
        <meta name="description" content="Celebrate Ganesh Chaturthi with events, media gallery, and coordinators from Podalakur Ganesh." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <HeroCarousel />
      <main>
        <Announcements />
        <EventsGrid />
        <MediaSection />
        <CoordinatorsGrid />
      </main>

      <footer className="mt-12 border-t">
        <div className="container py-8 md:py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-display text-lg font-semibold">Admin</h3>
              <p className="mt-1 text-sm text-muted-foreground">SOMA PENCHALA BHARATH</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Contact</h3>
              <p className="mt-1 text-sm text-muted-foreground">Phone: +91-XXXXXXXXXX</p>
              <p className="text-sm text-muted-foreground">Email: contact@example.com</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Podalakur Ganesh. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
