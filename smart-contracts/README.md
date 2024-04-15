# Smart Contracts Proof Of Concept borrow/lending
This project demonstrates borrow/lending with nfts as collateral proof of concept (smart contract side)

Try running some of the following tasks:

copy over the variables in env.example into .env and add your own keys
note: the variable NFT_ACCOUNT is the account that will receive random generate nfts

## Some Commands
```shell
# testing
yarn run test

#deploy to linea-sepolia
yarn run deploy:linea-sepolia

#deploy to localhost
yarn run deploy:localhost

# deploy to ganache
# requires local ganache instance running 
yarn run deploy:ganache
```

## Environment
Node: v18