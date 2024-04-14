// require("@nomicfoundation/hardhat-chai-matchers");
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";


import path from 'path';
import fs from 'fs';
import { HardhatUserConfig } from 'hardhat/types/config';
import { TASK_COMPILE } from 'hardhat/builtin-tasks/task-names';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { task } from 'hardhat/config';
import { pickBy } from 'lodash';

const dotenv = require('dotenv');
dotenv.config();

declare module 'hardhat/types/config' {

  interface ProjectPathsUserConfig {
    flatArtifacts: string;
  }

  interface ProjectPathsConfig {
    flatArtifacts: string;
  }
}

import '@nomiclabs/hardhat-solhint';
import 'hardhat-contract-sizer';
import yargs from 'yargs/yargs';

const argv = yargs().env('').boolean('enableGasReport').boolean('enableContractSizer').boolean('ci').parseSync();

task(
  TASK_COMPILE,
  'hook compile task to perform post-compile task',
  async (_, hre: HardhatRuntimeEnvironment, runSuper) => {
    const { root, flatArtifacts } = hre.config.paths;
    const outputDir = path.resolve(root, flatArtifacts);

    await runSuper();

    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true });
    }
    fs.mkdirSync(outputDir, { recursive: true });

    for (const artifactPath of await hre.artifacts.getArtifactPaths()) {
      const artifact = fs.readFileSync(artifactPath);
      const { abi, contractName } = JSON.parse(artifact.toString());
      if (!abi.length) continue;
      const target = path.join(outputDir, `${contractName}.json`);
      fs.copyFileSync(artifactPath, target);
    }
  },
);

// NOTE: Order matters
import "tsconfig-paths/register";
import 'hardhat-abi-exporter';

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          ...settings,
          metadata: {
            bytecodeHash: 'none',
          },
        },
      },
    ],
  },
  paths: {
    artifacts: './.artifacts',
    flatArtifacts: './artifacts',
  },
  networks: {
    hardhat: {
      blockGasLimit: 10000000,
      hardfork: 'london',
      chainId: 1337,
    },
    ganache: {
      url: 'http://127.0.0.1:7545',
      hardfork: 'merge',
      chainId: 1337,
      loggingEnabled: true,
    },
    linea_sepolia: {
      url: `https://linea-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.COINBASE_PRIVATE_KEY as string],
    },
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v6',
  },
  etherscan: {
    apiKey: pickBy({
      linea_sepolia: process.env.LINEASCAN_API_KEY,
    }) as Record<string, string>,
    customChains: [
      {
        network: "linea_sepolia",
        chainId: 59141,
        urls: {
          apiURL: "https://api-sepolia.lineascan.build/api",
          browserURL: "https://sepolia.lineascan.build"
        }
      }
    ]
  },
};
export default config;
