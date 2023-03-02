// SEE: deploy-semaphore.ts from Semaphore

import { poseidon_gencontract } from "circomlibjs";
import { ethers } from "ethers";
import { poseidon } from "circomlibjs"; // for verifying only
import * as fs from "fs";

const provider = new ethers.providers.JsonRpcProvider(); // local

const privKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const signer = new ethers.Wallet(privKey, provider);

var gases = [];
var castCommands = [];
var code = [];

for (let nInputs = 1; nInputs <= 6; nInputs++) {

    console.log("\n\n==== nInputs: " + nInputs);

    // the ABI has both bytes32 and uint256 declarations. we only need the later one
    const poseidonABI = poseidon_gencontract.generateABI(nInputs).slice(1, 2);
    const poseidonBytecode = poseidon_gencontract.createCode(nInputs);

    console.log("==== ABI for uint256: ",
        new ethers.utils.Interface(poseidonABI).format(ethers.utils.FormatTypes.full));
    console.log("bytecode length: " + poseidonBytecode.length);

    const factory = new ethers.ContractFactory(poseidonABI, poseidonBytecode, signer)
    const contract = await factory.deploy();
    console.log("will be deployed at addr: " + contract.address);
    //await contract.deployed();
    //console.log("deployed.");
    const receipt = await contract.deployTransaction.wait();
    console.log("deployed. gasUsed: " + receipt.gasUsed.toBigInt());
    code[nInputs] = await provider.getCode(contract.address);

    const inputs = [1, 2, 3, 4, 5, 6].slice(0, nInputs);
    console.log("inputs: " + inputs);

    // using the newly deployed contract
    const ans = await contract.poseidon(inputs);
    console.log("on-chain result : ", ans.toBigInt());
    // using javascript
    console.log("off-chain result: ", poseidon(inputs));

    const gas = await contract.estimateGas.poseidon(inputs);
    console.log("estimated gas (21000 included): " + gas);
    gases.push(gas);
    console.log("                       -21000 : " + (gas - 21000));
    console.log(`              then divded by ${nInputs}: ` + (gas - 21000) / nInputs);

    const args = `${contract.address} 'poseidon(uint[${nInputs}])' '${JSON.stringify(inputs)}'`;
    castCommands.push(`cast call ${args}`);
    castCommands.push(`cast send --private-key ${privKey} ${args}`);
}

console.log("\n\ngas:");
console.log("nInputs\tgas\tg-21000\tavg");
gases.map((gas, i) => {
    console.log(`${i + 1}\t${gas}\t${gas - 21000}\t${(gas - 21000) / (i + 1)}`);
});

console.log("\n\ncast commands:");
castCommands.map((c) => console.log(c));


console.log("\n\ngenerating anvil state json (with fake addresses)");

let state = { accounts: {}};
for (let i = 1; i <= 6; i++) {
    let acc = {
        nonce: 1,
        balance: "0x0",
        code: code[i],
        storage: {}
    };
    state.accounts[`0x111111112222222233333333444444440000000${i}`] = acc;
}
fs.writeFileSync("state.json", JSON.stringify(state, undefined, 4));
