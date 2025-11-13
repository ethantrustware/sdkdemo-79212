import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { DepositBalance } from "./DepositBalance";
import { UsdeSupplyYield } from "./UsdeSupplyYield";

export const AssetBreakdown = () => {
  const assets = [
    {
      icon: "📊",
      name: "Total Deposits",
      component: <DepositBalance />,
    },
    {
      icon: "💰",
      name: "USDe Yield",
      component: <UsdeSupplyYield />,
    },
  ];

  return (
    <section className="px-6 py-6">
      <div className="container mx-auto max-w-2xl space-y-3">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {asset.component}
          </motion.div>
        ))}

        {/* Additional Assets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-4 bg-white border border-border hover:bg-surface-1 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center text-2xl">
                  💵
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Cash</h3>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-foreground tabular-nums">
                  $0.00
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
