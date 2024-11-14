import { Badge } from "@/components/ui/badge";

export default function Tag({ text }: { text: string }) {
  return (
    <Badge className="subtle-medium text-dark500_light600 bg-tags px-3w flex items-center justify-center gap-2 rounded-sm border-none py-1">
      {text}
    </Badge>
  );
}
