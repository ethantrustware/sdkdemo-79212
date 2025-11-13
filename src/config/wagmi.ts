import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, mainnet, optimism, arbitrum, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'HyperYield Finance',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'demo-project-id',
  chains: [base, mainnet, optimism, arbitrum, polygon],
  ssr: false,
});
