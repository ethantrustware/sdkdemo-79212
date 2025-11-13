import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const PortfolioHero = () => {

  // Generate single chart line
  const chartData = Array.from({ length: 100 }, (_, i) => {
    const x = i;
    const baseY = 20 + Math.sin(i / 8) * 15 + Math.random() * 8;
    const trend = i / 4; // Upward trend
    return { x, y: Math.max(5, baseY + trend) };
  });

  const createPath = (data: { x: number; y: number }[]) => {
    return data.map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${100 - point.y}`).join(" ");
  };

  return (
    <section id="stats" className="px-6 py-16 bg-surface-1">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Total Deposited Balance - Prominent */}
          <div className="mb-8 text-center">
            <h2 className="text-sm font-medium text-muted-foreground mb-3">Total Deposited Balance</h2>
            <p className="text-6xl font-bold text-foreground tabular-nums tracking-tight">$2.45M</p>
          </div>

          {/* Chart Section - Full Width */}
          <Card className="p-8 bg-white border border-border rounded-lg shadow-lg">
            <div className="relative" style={{ height: "420px" }}>
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                    <path
                      d="M 5 0 L 0 0 0 5"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.08"
                      opacity="0.4"
                    />
                  </pattern>
                </defs>

                {/* Grid background */}
                <rect width="100" height="100" fill="url(#grid)" />

                {/* Y-axis labels */}
                <text x="97" y="8" fontSize="2.2" fill="hsl(var(--muted-foreground))" textAnchor="end">$5M</text>
                <text x="97" y="30" fontSize="2.2" fill="hsl(var(--muted-foreground))" textAnchor="end">$4M</text>
                <text x="97" y="52" fontSize="2.2" fill="hsl(var(--muted-foreground))" textAnchor="end">$3M</text>
                <text x="97" y="74" fontSize="2.2" fill="hsl(var(--muted-foreground))" textAnchor="end">$2M</text>
                <text x="97" y="96" fontSize="2.2" fill="hsl(var(--muted-foreground))" textAnchor="end">$1M</text>

                {/* Single chart line */}
                <path
                  d={createPath(chartData)}
                  fill="none"
                  stroke="hsl(var(--blue-primary))"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                />
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-muted-foreground mt-3 px-1">
                <span>Jan 2024</span>
                <span>May 2024</span>
                <span>Sep 2024</span>
                <span>Jan 2025</span>
                <span>May 2025</span>
                <span>Sep 2025</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
