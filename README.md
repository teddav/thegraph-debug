## Steps:

```
yarn hardhat node
```
in `mycontracts` directory

while deploy is running
```
yarn hardhat run --network localhost ./scripts/script.ts
```
from `mycontracts` to execute a few txs and mine a few blocks

copy deployment block number and contract address to `mysubgraph/subgraph.yaml`

`docker-compose up` from root
```
yarn build && yarn create-local && yarn deploy-local
```
from `mysubgraph`
