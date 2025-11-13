import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DepositBalance } from "./DepositBalance";
import { UsdeSupplyYield } from "./UsdeSupplyYield";
import { Users, Zap } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      label: "Unique Depositors",
      value: "0",
      subtext: "Active Wallets",
      icon: Users,
      color: "cyan-accent",
    },
    {
      label: "Demo Rate",
      value: "10,000%",
      subtext: "Theoretical APR",
      icon: Zap,
      color: "emerald-success",
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface-1">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Analytics Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time metrics and platform statistics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Deposit Balance Component */}
          <DepositBalance />
          
          {/* USDe Supply Yield Component */}
          <UsdeSupplyYield />

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
            >
              <Card 
                className="p-6 bg-white border border-border hover:shadow-lg transition-all duration-300 h-full"
                style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      backgroundColor: `hsl(var(--${stat.color}) / 0.1)`,
                    }}
                  >
                    <stat.icon 
                      className="w-6 h-6"
                      style={{ color: `hsl(var(--${stat.color}))` }}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {stat.label}
                  </h3>

                  {/* Value */}
                  <p 
                    className="text-4xl font-semibold mb-1 tabular-nums"
                    style={{ color: `hsl(var(--${stat.color}))` }}
                  >
                    {stat.value}
                  </p>

                  {/* Subtext */}
                  <p className="text-xs text-muted-foreground mt-auto">
                    {stat.subtext}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
