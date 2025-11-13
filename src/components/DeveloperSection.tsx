import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Github, BookOpen, Zap } from "lucide-react";

export const DeveloperSection = () => {
  const codeSnippet = `import { TrustwareProvider } from "@trustware/sdk";
import { useWalletClient } from "wagmi";

const config = {
  apiKey: process.env.TRUSTWARE_API_KEY,
  routes: {
    toChain: "8453", // Base
    toToken: "0x833...", // USDC
    toAddress: "0xEb21...",
  },
  theme: {
    primaryColor: "#3B82F6",
    secondaryColor: "#8B5CF6",
  },
};

<TrustwareProvider config={config}>
  <YourApp />
</TrustwareProvider>`;

  const features = [
    {
      icon: Zap,
      title: "One-Click Integration",
      description: "Add cross-chain deposits to your app in minutes",
      color: "blue-primary",
    },
    {
      icon: Code,
      title: "Full TypeScript Support",
      description: "Type-safe SDK with comprehensive documentation",
      color: "purple-primary",
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Fork this project and customize for your needs",
      color: "cyan-accent",
    },
    {
      icon: BookOpen,
      title: "Detailed Docs",
      description: "Step-by-step guides and API references",
      color: "emerald-success",
    },
  ];

  return (
    <section id="developer-section" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-primary to-purple-primary bg-clip-text text-transparent">
            Built for Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integrate Trustware SDK into your DeFi app and unlock cross-chain deposits
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-surface-1 border-2 border-border h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-primary to-purple-primary flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Integration Example
                </h3>
              </div>
              <pre className="bg-white rounded-lg p-4 overflow-x-auto text-sm border border-border">
                <code className="text-foreground font-mono">{codeSnippet}</code>
              </pre>
            </Card>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white border border-border hover:border-blue-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `hsl(var(--${feature.color}) / 0.1)`,
                      }}
                    >
                      <feature.icon 
                        className="w-6 h-6"
                        style={{ color: `hsl(var(--${feature.color}))` }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="shadow-lg">
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-2">
            <BookOpen className="w-5 h-5 mr-2" />
            Read Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
