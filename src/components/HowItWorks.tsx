import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wallet, Zap, TrendingUp, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      number: "01",
      title: "Connect Wallet",
      description: "Connect your wallet and select any chain you want to bridge from",
    },
    {
      icon: Zap,
      number: "02",
      title: "Bridge via Trustware",
      description: "Trustware SDK handles the cross-chain bridge and deposit atomically",
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Watch Earnings Grow",
      description: "See your theoretical 10,000% APR earnings tick up in real-time",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridge USDC from any chain to Base and start "earning" in seconds
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Card 
                className="p-8 bg-white border border-border hover:border-blue-primary transition-all duration-300 h-full group rounded-lg shadow-lg hover:shadow-xl"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-blue-primary flex items-center justify-center shadow-md">
                  <span className="text-white text-lg font-bold">{step.number}</span>
                </div>

                <div className="flex flex-col items-start text-left">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 rounded-lg bg-blue-primary/10 flex items-center justify-center mb-6 group-hover:bg-blue-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <step.icon className="w-8 h-8 text-blue-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why 10,000% Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 bg-blue-primary/5 border border-blue-primary/20 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
              Why 10,000%?
            </h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Because it's absurd! This project is designed to showcase how seamlessly Trustware SDK 
              can integrate cross-chain bridging into any DeFi application. The ridiculous APR is purely 
              for entertainment and demonstration purposes. This is art, not investment advice.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
