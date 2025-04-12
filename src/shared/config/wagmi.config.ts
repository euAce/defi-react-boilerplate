import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { createPublicClient, createWalletClient, custom, defineChain, http } from "viem";
import { base } from "viem/chains";

const ARBITRUM_ONE_RPC =
  "https://virtual.arbitrum.rpc.tenderly.co/e19e0e2e-4e47-4c6d-aad2-172732a37f3a";
const ARBITRUM_ONE_EXPLORER =
  "https://virtual.arbitrum.rpc.tenderly.co/21e4480c-113e-41be-aeb6-b651de7bdfe7";

export const virtual_arbitrum_one = defineChain({
  id: 42161,
  name: "Virtual Arbitrum One",
  nativeCurrency: { name: "VETH", symbol: "VETH", decimals: 18 },
  rpcUrls: {
    default: { http: [ARBITRUM_ONE_RPC] },
  },
  blockExplorers: {
    default: {
      name: "Tenderly Explorer",
      url: ARBITRUM_ONE_EXPLORER,
    },
  },
});

export const config = getDefaultConfig({
  appName: "Test",
  //https://cloud.reown.com/ (i.e WalletConnect)
  projectId: "c3a5bd0a08835ad36a670be10c4b3ff5",
  chains: [virtual_arbitrum_one, base],
});

export const publicClient = createPublicClient({
  chain: virtual_arbitrum_one,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: virtual_arbitrum_one,
  transport: custom(window.ethereum),
  account: "0x1bD61F8e0BB94bdc691635Ae9B27190f90DF80b5",
});
