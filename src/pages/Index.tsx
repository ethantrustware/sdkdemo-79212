import { DemoSection } from "@/components/DemoSection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe2, Code2, Rocket, Link2, Wallet } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioHero } from "@/components/PortfolioHero";
import { Helmet } from "react-helmet";
const Index = () => {
  return <>
      <Helmet>
        <title>HyperYield Finance - 14.7% APR on USDC | Trustware SDK Demo</title>
        <meta name="description" content="Deposit USDC from any chain and earn 14.7% APR. A demonstration of seamless cross-chain deposits using Trustware SDK integration." />
        <meta property="og:title" content="HyperYield Finance - 14.7% APR on USDC" />
        <meta property="og:description" content="Bridge and deposit in one click with Trustware SDK integration." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <AnimatedBackground />
        <Header />
        
        {/* New Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 grid-background" />
          <div className="max-w-6xl mx-auto text-center space-y-10 relative z-10 animate-fade-in">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Integrate SDK Now
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight leading-none">
              <span className="block text-primary">
                Build Faster
              </span>
              <span className="block text-foreground">
                Ship Better
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience our universal deposit flow for every dApp. Accept any token on any chain, settle in your asset of choice — no smart-contract changes needed.
              <br />
              Built for developers who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-10 py-7 shadow-glow group rounded-xl" asChild>
                <a href="https://www.notion.so/trustware/Deposit-Widget-28671aae45df80c7b7bbeae1ff38848e" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-xl border-2" asChild>
                <a href="https://www.notion.so/trustware/Deposit-Widget-28671aae45df80c7b7bbeae1ff38848e" target="_blank" rel="noopener noreferrer">
                  View Documentation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <DemoSection title="See It In Action" titleClassName="text-blue-primary" description="Transform any dApp's deposit flow into a universal asset acceptance terminal. One integration gives access to all liquidity providers, all chains, all paths—optimized automatically.">
          <VideoShowcase src="/sdk-demo.mov" />
        </DemoSection>

        {/* Features Grid Section */}
        <DemoSection title="Powerful Features" titleClassName="text-blue-primary" description="Everything you need to build world-class applications, all in one place." className="bg-background/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Globe2} title="Universal Asset Acceptance" description="Accept deposits from any token on any supported chain. Users fund with what they have, you receive what you want." delay={0} />
            <FeatureCard icon={Zap} title="Zero Integration Mode" description="Embed with a simple iframe—no smart contract changes, no custody handoff. Revenue share splits automatically." delay={100} />
            <FeatureCard icon={Rocket} title="Automatic Routing" description="Intelligent routing engine optimizes across all liquidity providers and chains for best rates and fastest settlement." delay={200} />
            <FeatureCard icon={Code2} title="Flexible SDK" description="Full programmatic control with React SDK. Customize UI, asset preferences, and settlement logic to match your dApp." delay={300} />
            <FeatureCard icon={Wallet} title="Wallet Compatible" description="Works with any EOA or embedded wallet. Connected wallets autofill recipient addresses for seamless UX." delay={400} />
            <FeatureCard icon={Link2} title="Real-Time Analytics" description="Track deposits, routing performance, and fee breakdowns in real-time. Full transparency for you and your users." delay={500} />
          </div>
        </DemoSection>

        {/* Original HyperYield Content Below - Hidden for now */}
        {/* <div className="relative bg-background text-foreground">
          <Hero />
        </div> */}

        {/* CTA Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden bg-blue-100/60">
          <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
            <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-slate-950 text-6xl">Ready to go
Multi-Chain Instantly?</span>
              <span className="text-foreground"></span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Enable multi-chain deposits without touching your backend.
            </p>
            <div className="flex justify-center pt-8">
              <Button size="lg" className="text-lg px-10 py-7 shadow-glow group rounded-xl" asChild>
                <a href="https://trustware-investor-newsletter.beehiiv.com/" target="_blank" rel="noopener noreferrer">
                  Integrate Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default Index;