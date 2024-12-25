import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function SeeMore() {
  return (
    <Button className="text-[16px] font-[600]" variant="link">
      See more <ArrowRight />
    </Button>
  );
}
