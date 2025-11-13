"use client";

import { TrustwareProvider as TrustwareSDKProvider } from "@trustware/sdk";
import { useWalletClient } from "wagmi";
import { useMemo } from "react";
import type { WalletClient } from "viem";

interface TrustwareProviderProps {
  children: React.ReactNode;
}

// Adapter to convert WalletClient to Trustware wallet format
function createTrustwareWallet(walletClient: WalletClient | undefined) {
  if (!walletClient) return undefined;

  return {
    getAddress: async () => walletClient.account?.address || "",
    signMessage: async (message: string) => {
      if (!walletClient.account) throw new Error("No account connected");
      return await walletClient.signMessage({ message, account: walletClient.account });
    },
    sendTransaction: async (transaction: any) => {
      return await walletClient.sendTransaction(transaction);
    },
    getChainId: async () => walletClient.chain?.id || 1,
  };
}

export function TrustwareProvider({ children }: TrustwareProviderProps) {
  const { data: wagmiClient } = useWalletClient();
  
  const wallet = useMemo(
    () => createTrustwareWallet(wagmiClient),
    [wagmiClient]
  );

  const config = {
    apiKey: import.meta.env.VITE_TRUSTWARE_API_KEY || "demo-api-key",
    routes: {
      toChain: "8453", // Base
      toToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC on Base
      toAddress: "0xEb212FE20F26243EC4D4DF2DD49c8aA9FA75A201", // Pool address
      defaultSlippage: 1,
    },
    autoDetectProvider: false,
    theme: {
      primaryColor: "#3B82F6",
      secondaryColor: "#60A5FA",
      backgroundColor: "#FFFFFF",
      borderColor: "#E5E7EB",
      textColor: "#1F2937",
      radius: 12,
    },
    messages: {
      title: "Bridge to HyperYield",
      description: "Bridge USDC from any chain to Base and start earning 10,000% APR",
    },
  };

  return (
    <TrustwareSDKProvider config={config} >
      {children}
    </TrustwareSDKProvider>
  );
}
