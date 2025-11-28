import { WalletButton } from "@/components/WalletButton";
import { motion } from "framer-motion";
import trustwareLogo from "@/assets/trustware-logo.png";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border"
      style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Powered by</span>
          <img src={trustwareLogo} alt="Trustware" className="h-[5.25rem]" />
          <span className="text-xs font-medium bg-purple-primary/10 text-purple-primary px-2.5 py-1 rounded-full border border-purple-primary/20">
            DEMO
          </span>
        </div>

        <WalletButton />
      </div>
    </motion.header>
  );
};
