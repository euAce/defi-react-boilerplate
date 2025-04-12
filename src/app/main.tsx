// react imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

//router imports
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/shared/config/router/routeTree.gen";

//rainbowkit, wagmi, query, viem  imports
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { config } from "@/shared/config/wagmi.config";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// shadcn, tailwind imports
import "@/shared/styles/index.css";

// create a new router instance and query client
const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// init the root element
const rootElement = document.getElementById("root")!;

// if the root element is not empty, render the app
if (!rootElement.innerHTML) {
  // create a new root element
  const root = ReactDOM.createRoot(rootElement);

  // render the app
  root.render(
    <StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <RouterProvider router={router} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </StrictMode>
  );
}
