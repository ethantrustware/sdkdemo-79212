# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4a659932-3198-46e7-8776-c666c61381cb

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4a659932-3198-46e7-8776-c666c61381cb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment variables

Copy `.env.example` to `.env` and provide the values that match your deployment setup:

```bash
cp .env.example .env
```

- `VITE_WALLET_CONNECT_PROJECT_ID` – your WalletConnect Cloud project identifier so the RainbowKit integration can connect wallets.
- `VITE_TRUSTWARE_API_KEY` – API key issued by Trustware for the bridge widget embedded in the deposit modal.
- `VITE_ALCHEMY_BASE_RPC_URL` – Alchemy Base RPC endpoint used by on-chain stats cards (falls back to the public demo URL if omitted).
- `VITE_ALCHEMY_ETH_RPC_URL` – Alchemy Ethereum RPC endpoint required for reading the Aave yield contract (falls back to the public demo URL if omitted).

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4a659932-3198-46e7-8776-c666c61381cb) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
