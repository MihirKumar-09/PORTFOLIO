import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy: {new Date().getFullYear()} Mihir Kumar Malik. All rights
        reserved.
      </p>

      <a
        href="#hero"
        className="bg-primary/10 hover:bg-primary/20 rounded-full p-2 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
