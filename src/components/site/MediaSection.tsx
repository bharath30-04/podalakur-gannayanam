import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const MediaSection = () => {
  const { toast } = useToast();
  const isAdmin = false; // Replace with real role after connecting Supabase auth

  const handleUpload = () => {
    toast({
      title: "Admin upload",
      description: "Connect Supabase + Google OAuth to enable admin uploads.",
    });
  };

  return (
    <section aria-labelledby="media" className="container py-12 md:py-16">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 id="media" className="font-display text-2xl font-semibold md:text-3xl">Media</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Browse photos and videos from our celebrations. Admins can upload new media.</p>
        </div>
        <div className="flex gap-3">
          {isAdmin && (
            <Button variant="hero" onClick={handleUpload}>Upload Media</Button>
          )}
          <Button asChild variant="outline">
            <Link to="/media" aria-label="View Gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
