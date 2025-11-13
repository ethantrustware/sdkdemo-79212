import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
export function WalletButton() {
  return <ConnectButton.Custom>
      {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted
    }) => {
      const ready = mounted && authenticationStatus !== "loading";
      const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
      return <div {...!ready && {
        "aria-hidden": true,
        style: {
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none"
        }
      }}>
            {(() => {
          if (!connected) {
            return <Button onClick={openConnectModal} variant="outline" size="sm">
                    Connect Wallet
                  </Button>;
          }
          if (chain.unsupported) {
            return <Button onClick={openChainModal} variant="destructive" size="sm">
                    Wrong network
                  </Button>;
          }
          return;
        })()}
          </div>;
    }}
    </ConnectButton.Custom>;
}