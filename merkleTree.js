const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const { allowList } = require('./address');


const leaves = allowList.map(x => Buffer.from(keccak256(x)).toString('hex'));
console.log(leaves);
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

const leaf = keccak256("0xbeF18c080b30D18f8a22a09E5dc0a67F7EAAC27E");
const proof = tree.getProof(leaf);


// console.log(tree.toString());
// console.log(`\n root: ${root}`);

// console.log(`\n proof: ${proof.map(x => MerkleTree.bufferToHex(x.data))}`);

function getProof(address) {
  const leaf = keccak256(address);
  const proof = tree.getHexProof(leaf);

  return proof;
}

module.exports = { getProof }

/**

  ["0x20905d4b2a461a5f700dce2566014b33a929fc8fc87aadcb66deb271b3d52c91","0xfab1c301aac16c76c517becdb8e55635082af9077f584ca6e551ab55563bbeca","0xf33978e11d8f6f58730e60d05f13c5f4a5fad02e1977c16fdaf3e11967db9630"]

 */