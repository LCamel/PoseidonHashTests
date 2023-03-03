# PoseidonHashTests
PoseidonHashTests

Node: launch a local node before running the script.

```
circomlibjs-0.0.8 % node DeployPosiedonHash.mjs


==== nInputs: 1
==== ABI for uint256:  [ 'function poseidon(uint256[1] input) pure returns (uint256)' ]
bytecode length: 13716
will be deployed at addr: 0x5FbDB2315678afecb367f032d93F642f64180aa3
deployed. gasUsed: 1530241
inputs: 1
on-chain result :  18586133768512220936620570745912940619677854269274689475585506675881198879027n
off-chain result:  18586133768512220936620570745912940619677854269274689475585506675881198879027n
estimated gas (21000 included): 37853
                       -21000 : 16853
              then divded by 1: 16853


==== nInputs: 2
==== ABI for uint256:  [ 'function poseidon(uint256[2] input) pure returns (uint256)' ]
bytecode length: 19512
will be deployed at addr: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
deployed. gasUsed: 2156516
inputs: 1,2
on-chain result :  7853200120776062878684798364095072458815029376092732009249414926327459813530n
off-chain result:  7853200120776062878684798364095072458815029376092732009249414926327459813530n
estimated gas (21000 included): 51479
                       -21000 : 30479
              then divded by 2: 15239.5


==== nInputs: 3
==== ABI for uint256:  [ 'function poseidon(uint256[3] input) pure returns (uint256)' ]
bytecode length: 24952
will be deployed at addr: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
deployed. gasUsed: 2744494
inputs: 1,2,3
on-chain result :  6542985608222806190361240322586112750744169038454362455181422643027100751666n
off-chain result:  6542985608222806190361240322586112750744169038454362455181422643027100751666n
estimated gas (21000 included): 71297
                       -21000 : 50297
              then divded by 3: 16765.666666666668


==== nInputs: 4
==== ABI for uint256:  [ 'function poseidon(uint256[4] input) pure returns (uint256)' ]
bytecode length: 32578
will be deployed at addr: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
deployed. gasUsed: 3568869
inputs: 1,2,3,4
on-chain result :  18821383157269793795438455681495246036402687001665670618754263018637548127333n
off-chain result:  18821383157269793795438455681495246036402687001665670618754263018637548127333n
estimated gas (21000 included): 92454
                       -21000 : 71454
              then divded by 4: 17863.5


==== nInputs: 5
==== ABI for uint256:  [ 'function poseidon(uint256[5] input) pure returns (uint256)' ]
bytecode length: 38976
will be deployed at addr: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
deployed. gasUsed: 4260407
inputs: 1,2,3,4,5
on-chain result :  6183221330272524995739186171720101788151706631170188140075976616310159254464n
off-chain result:  6183221330272524995739186171720101788151706631170188140075976616310159254464n
estimated gas (21000 included): 120466
                       -21000 : 99466
              then divded by 5: 19893.2


==== nInputs: 6
==== ABI for uint256:  [ 'function poseidon(uint256[6] input) pure returns (uint256)' ]
bytecode length: 47308
will be deployed at addr: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
deployed. gasUsed: 5161022
inputs: 1,2,3,4,5,6
on-chain result :  20400040500897583745843009878988256314335038853985262692600694741116813247201n
off-chain result:  20400040500897583745843009878988256314335038853985262692600694741116813247201n
estimated gas (21000 included): 157062
                       -21000 : 136062
              then divded by 6: 22677


gas:
nInputs	gas	g-21000	avg
1	37853	16853	16853
2	51479	30479	15239.5
3	71297	50297	16765.666666666668
4	92454	71454	17863.5
5	120466	99466	19893.2
6	157062	136062	22677


cast commands:
cast call 0x5FbDB2315678afecb367f032d93F642f64180aa3 'poseidon(uint[1])' '[1]'
cast send --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0x5FbDB2315678afecb367f032d93F642f64180aa3 'poseidon(uint[1])' '[1]'
cast call 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 'poseidon(uint[2])' '[1,2]'
cast send --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 'poseidon(uint[2])' '[1,2]'
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 'poseidon(uint[3])' '[1,2,3]'
cast send --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 'poseidon(uint[3])' '[1,2,3]'
cast call 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 'poseidon(uint[4])' '[1,2,3,4]'
cast send --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 'poseidon(uint[4])' '[1,2,3,4]'
cast call 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9 'poseidon(uint[5])' '[1,2,3,4,5]'
cast send --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9 'poseidon(uint[5])' '[1,2,3,4,5]'
cast call 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707 'poseidon(uint[6])' '[1,2,3,4,5,6]'
cast send --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707 'poseidon(uint[6])' '[1,2,3,4,5,6]'


generating anvil state json (with fake addresses)
```