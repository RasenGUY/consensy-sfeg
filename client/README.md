# Client For Proof Of Concept borrow/lending
This project demonstrates borrow/lending with nfts as collateral proof of concept (client side)

copy over the variables in env.development.example into .env.development or .env and add your own keys

# Get started
Before continuing you must have the contracts deployed locally or to linea-sepolia

```shell
# install dependencies
yarn install

# copy over smart-contracts/deployed-addresses.json to client/.external/deployed-addresses.json
cp -rf ../smart-contracts/deployed-addresses.json .external/deployed-addresses.json

# migrate the abis
yarn wagmi generate

# run locally
yarn run dev
``` 

## Environment
Node: v18