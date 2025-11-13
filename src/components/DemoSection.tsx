import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DemoSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export const DemoSection = ({ title, description, children, className, titleClassName }: DemoSectionProps) => {
  return (
    <section className={cn("px-4 py-24 relative", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className={cn("text-4xl md:text-5xl font-bold text-foreground", titleClassName)}>
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};
