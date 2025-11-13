import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { DepositModal } from "@/components/DepositModal";
import { Info } from "lucide-react";
export const Hero = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  return <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 pt-32">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-primary mb-6 md:text-4xl animate-[pulse_3s_ease-in-out_infinite] opacity-90">
              Try Our Demo
            </h2>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-[6rem] md:text-[8rem] font-extrabold mb-4 leading-none text-blue-primary">
            14.7%
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            APR on USDC
          </p>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-medium">
            Deposit from any chain. Zero hassle. Maximum returns.
          </p>
          
          {/* CTAs */}
          <div className="flex justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" onClick={() => setIsDepositModalOpen(true)}>
              Deposit Now
            </Button>
          </div>

          <DepositModal open={isDepositModalOpen} onOpenChange={setIsDepositModalOpen} />

          {/* Disclaimer */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="inline-block bg-blue-primary/5 border border-blue-primary/20 rounded-xl p-6 max-w-2xl">
            <div className="flex items-start gap-3 text-left">
              <Info className="w-5 h-5 text-blue-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a demonstration project showcasing Trustware SDK integration. 
                The 14.7% APR is purely satirical. Your deposits are real, but please only 
                deposit amounts you're comfortable using for testing.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};