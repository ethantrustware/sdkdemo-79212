import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TrustwareWidget } from "@trustware/sdk";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface DepositModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DepositModal({ open, onOpenChange }: DepositModalProps) {
  const { isConnected } = useAccount();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white border border-border shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-primary">
            Bridge & Deposit
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Bridge USDC from any chain to Base and start earning
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {!isConnected ? (
            <div className="flex flex-col items-center justify-center py-8 gap-4">
              <Alert className="border-blue-primary/30 bg-blue-primary/5">
                <Info className="h-5 w-5 text-blue-primary" />
                <AlertDescription className="text-sm">
                  Connect your wallet to start bridging USDC to HyperYield
                </AlertDescription>
              </Alert>
              <ConnectButton />
            </div>
          ) : (
            <div className="space-y-4">
              <Alert className="border-amber-warning/30 bg-amber-warning/5">
                <Info className="h-5 w-5 text-amber-warning" />
                <AlertDescription className="text-sm leading-relaxed">
                  <strong className="font-semibold">Demo Mode:</strong> This demonstrates Trustware SDK integration. 
                  Your actual deposits will go to a test address. Only deposit test amounts.
                </AlertDescription>
              </Alert>
              
              <div className="rounded-lg border border-border overflow-hidden bg-surface-1">
                <TrustwareWidget />
              </div>
              
              <div className="text-xs text-muted-foreground text-center py-1">
                Powered by Trustware SDK
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
