import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Section } from "./Section";
import { SeeMore } from "@/components/ui/seeMore";
export default function Page() {
  return (
    <div className="">
      <div>
        <Button>
          <Play /> Watch trailer
        </Button>
      </div>
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming"></Section>
      <Section title="Top rated" endpoint="top_rated"></Section>
    </div>
  );
}
