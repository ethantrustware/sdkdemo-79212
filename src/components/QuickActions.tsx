import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DepositModal } from "./DepositModal";

export const QuickActions = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  return (
    <>
      <section className="px-6 py-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-3"
          >
            <Button
              size="lg"
              className="flex-1 h-14 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsDepositModalOpen(true)}
            >
              Deposit Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 h-14 text-base font-semibold rounded-full border-2"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      <DepositModal open={isDepositModalOpen} onOpenChange={setIsDepositModalOpen} />
    </>
  );
};
