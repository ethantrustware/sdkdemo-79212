import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const PromotionalCard = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <section className="px-6 py-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-blue-primary/5 to-purple-primary/5 border-2 border-blue-primary/20 relative overflow-hidden">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 w-8 h-8 rounded-full"
              onClick={() => setIsDismissed(true)}
            >
              <X className="w-4 h-4" />
            </Button>

            <div className="flex items-start gap-4 pr-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-primary to-purple-primary flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Earn up to 10,000% APR
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  This is a demonstration showcasing Trustware SDK's seamless cross-chain bridging. 
                  The APR is satirical - but the technology is real!
                </p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn How It Works
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => document.getElementById('developer-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-blue-primary/20 to-purple-primary/20 rounded-full blur-3xl" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
