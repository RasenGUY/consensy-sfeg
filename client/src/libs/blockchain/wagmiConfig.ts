import { http, createConfig } from 'wagmi'
import { localhost, lineaSepolia } from 'wagmi/chains';
import { getDefaultConfig } from "connectkit";

export const config = createConfig(
  getDefaultConfig({
    chains: [lineaSepolia, localhost],
    transports: {
      [lineaSepolia.id]: http(`https://linea-sepolia.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY as string}`),
      [localhost.id]: http(),
    },
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_ID as string,
    appName: "BorrowLend",
  })
)