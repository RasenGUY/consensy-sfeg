import { defineConfig } from '@wagmi/cli';
import { hardhat } from '@wagmi/cli/plugins'
import { deployed } from './src/libs/blockchain/deployment';

export default defineConfig({
  out: 'src/libs/blockchain/abis.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../smart-contracts',
      deployments: { ...deployed }
    }),
  ]
})
