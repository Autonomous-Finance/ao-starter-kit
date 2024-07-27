import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Create a React Query client
const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ArweaveWalletKit
			config={{
				permissions: ["SIGN_TRANSACTION", "ACCESS_ADDRESS"],
				ensurePermissions: true,
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
