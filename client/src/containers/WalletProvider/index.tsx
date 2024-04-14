import { WagmiProvider } from 'wagmi'
import { config } from '../../libs/blockchain/wagmiConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { ConnectKitProvider } from "connectkit";

export interface WalletConnectorProps {
 children: React.ReactElement | React.ReactElement[];
}
const queryClient = new QueryClient();

const WalletProvider = (props: WalletConnectorProps) => {
  return (
    <WagmiProvider config={config}> 
      <QueryClientProvider client={queryClient}> 
      <ConnectKitProvider>{props.children}</ConnectKitProvider> 
      </QueryClientProvider> 
    </WagmiProvider> 
  )
}
export default WalletProvider;


