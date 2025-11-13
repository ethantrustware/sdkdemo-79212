import { Github, Twitter, BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface-1 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-primary to-purple-primary bg-clip-text text-transparent mb-2">
              HyperYield Finance
            </h3>
            <p className="text-sm text-muted-foreground">
              Deposit once, earn forever*
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              *Not financial advice. This is a demo.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://docs.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-primary transition-colors duration-200"
              aria-label="Documentation"
            >
              <BookOpen className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://www.npmjs.com/package/@trustware/sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-primary hover:underline font-medium"
            >
              Trustware SDK
            </a>{" "}
            • Powered by{" "}
            <a
              href="https://base.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-primary hover:underline font-medium"
            >
              Base
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
