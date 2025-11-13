# Trustware SDK Setup Instructions

## Overview

HyperYield Finance is now integrated with Trustware SDK + RainbowKit for seamless cross-chain USDC deposits to Base.

## Features Implemented

✅ **RainbowKit Wallet Integration**
- Multi-wallet support (MetaMask, Coinbase, Rainbow, etc.)
- Custom neon-themed UI matching the app design
- Network switching support

✅ **Trustware SDK Bridge Widget**
- Configured to route all deposits to Base (Chain ID: 8453)
- Target token: USDC on Base (`0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`)
- Deposit address: `0xEb212FE20F26243EC4D4DF2DD49c8aA9FA75A201`

✅ **Deposit Modal**
- Beautiful glassmorphic modal with neon accents
- Wallet connection prompt for non-connected users
- Trustware widget embedded with custom theming
- Demo warnings and disclaimers

✅ **Header with Wallet Button**
- Fixed header with wallet connection status
- Chain/network display
- Account address display

## Required Environment Variables

Create a `.env` file in the root of your project:

```env
# Get your WalletConnect Project ID from https://cloud.walletconnect.com
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Get your Trustware API key from Trustware SDK
VITE_TRUSTWARE_API_KEY=your_trustware_api_key_here
```

## Setup Steps

### 1. Get WalletConnect Project ID

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project
3. Copy your Project ID
4. Update `src/config/wagmi.ts` line 6:

```typescript
projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Replace with your actual ID
```

### 2. Get Trustware API Key

1. Visit [Trustware SDK](https://www.npmjs.com/package/@trustware/sdk)
2. Follow their documentation to get an API key
3. The key is already configured in `src/providers/TrustwareProvider.tsx` to read from `.env`

### 3. Test the Integration

1. Click "Deposit Now" on the homepage
2. Connect your wallet via RainbowKit
3. Select a source chain and enter an amount
4. Trustware will display the bridge route and fees
5. Confirm the transaction

## Configuration Details

### Deposit Pool Address
```
0xEb212FE20F26243EC4D4DF2DD49c8aA9FA75A201
```

### Target Chain
- **Network:** Base
- **Chain ID:** 8453
- **Token:** USDC (`0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`)

### Supported Source Chains
- Ethereum Mainnet
- Optimism
- Arbitrum
- Polygon
- (Expandable in `src/config/wagmi.ts`)

## Component Architecture

```
App.tsx
├── WagmiProvider (Wallet connection)
├── QueryClientProvider (React Query)
├── RainbowKitProvider (Wallet UI)
└── TrustwareProvider (Bridge SDK)
    └── Index.tsx
        ├── Header (Wallet button)
        ├── Hero (Deposit modal trigger)
        └── DepositModal (Trustware widget)
```

## Customization

### Theme Colors

Edit `src/providers/TrustwareProvider.tsx`:

```typescript
theme: {
  primaryColor: "#FF00FF",      // Hot pink
  secondaryColor: "#00FFFF",     // Cyan
  backgroundColor: "#0A0A0A",    // Near black
  borderColor: "#FF00FF",        // Hot pink
  textColor: "#FFFFFF",          // White
  radius: 12,                    // Border radius
}
```

### Add More Chains

Edit `src/config/wagmi.ts`:

```typescript
chains: [
  base, 
  mainnet, 
  optimism, 
  arbitrum, 
  polygon,
  // Add more chains from wagmi/chains
],
```

## Troubleshooting

### "Cannot find module '@trustware/sdk/wallet'"
✅ **Fixed** - Using custom wallet adapter instead

### Wallet Not Connecting
- Ensure `projectId` in `wagmi.ts` is set correctly
- Check that the wallet extension is installed
- Try clearing browser cache

### Bridge Widget Not Loading
- Verify Trustware API key is valid
- Check browser console for errors
- Ensure wallet is connected first

### Wrong Network
- Click the chain button in the header
- RainbowKit will prompt to switch networks

## Production Checklist

Before deploying to production:

- [ ] Replace demo API keys with production keys
- [ ] Update deposit address if needed
- [ ] Test deposits from multiple source chains
- [ ] Verify slippage settings (currently 1%)
- [ ] Add analytics tracking for deposits
- [ ] Test on mobile devices
- [ ] Add proper error handling
- [ ] Set up monitoring for failed transactions

## Demo Mode Notice

This integration includes prominent warnings that this is a demonstration:
- Hero section disclaimer
- "DEMO" badge in header
- Alert in deposit modal
- Footer disclaimers

**Important:** Only deposit test amounts you're comfortable losing. The 10,000% APR is satirical!

## Next Steps

1. **Live Stats**: Connect to Base block explorer API to show real deposit data
2. **User Dashboard**: Track individual deposits and "earnings"
3. **Transaction History**: Display past deposits with block explorer links
4. **Social Sharing**: Pre-filled tweets with deposit confirmation
5. **Leaderboard**: Show top depositors (optional)

## Support

- [Trustware SDK Docs](https://www.npmjs.com/package/@trustware/sdk)
- [RainbowKit Docs](https://www.rainbowkit.com)
- [Wagmi Docs](https://wagmi.sh)
- [Base Network Docs](https://docs.base.org)
