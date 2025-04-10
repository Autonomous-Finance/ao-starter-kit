import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AoSyncStrategy from "@vela-ventures/aosync-strategy";
import WanderStrategy from "@arweave-wallet-kit/wander-strategy";
import OthentStrategy from "@arweave-wallet-kit/othent-strategy";
import BrowserWalletStrategy from "@arweave-wallet-kit/browser-wallet-strategy";
import WebWalletStrategy from "@arweave-wallet-kit/webwallet-strategy";

// Create a React Query client
const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ArweaveWalletKit
			config={{
				permissions: ["SIGN_TRANSACTION", "ACCESS_ADDRESS"],
				ensurePermissions: true,
				strategies: [
					new WanderStrategy(),
					new AoSyncStrategy(),
					new OthentStrategy(),
					new BrowserWalletStrategy(),
					new WebWalletStrategy(),
				],
			}}
			theme={{
				displayTheme: "light",
			}}
		>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</ArweaveWalletKit>
	</React.StrictMode>,
);
