const express = require("express");
const { Web3 } = require("web3");
const ABI = require("./ABI.json");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())
const web3 = new Web3("https://hidden-neat-sailboat.ethereum-sepolia.discover.quiknode.pro/05d0995b1aa0144f888379c14f0a6248b65df0c0/")


const contractAddress = "0xB5df2caA37CF436dAf50Aa7Ee768444692D5411a";
// const contractAddress = "0xA9eB42BA65F020064344579487d173924eCc3553";

const contract = new web3.eth.Contract(ABI, contractAddress)
// console.log(contract)
const fetchNFTs = async (account) => {

    try {
        const nftBalance = await contract.methods.balanceOf(account).call()
        return { userNFTs: Number(nftBalance) }

    } catch (error) {
        console.log(error)

    }

    // console.log(nftBalance)
    // nftBalance


}

// fetchNFTs( ).then(console.log)
app.post("/members", async (req, res) => {
    try {
        const account = req.body.from;
        const numNFTs = await fetchNFTs(account);
        // console.log(numNFTs)
        if (numNFTs.userNFTs > 0) {
            res.status(200).json({ status: 200, numNFTs })
        }
        else {
            res.status(400).json({ status: 400, message: "You have zero Nft" })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })

    }
})














app.listen(3000, () => {
    console.log("Server is running on port 3000")
})