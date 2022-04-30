//Const and Var
var Web3 = import ('/js/web3.min.js');
var accounts;
var web3;
var account;
const ido_contract_address = "0x684b9CF0357123D7c9E9eaEFf7a0C3AfB7bE2101";
//ABI
const ido_contract_abi = [
    {
        "inputs": [
            {
                "internalType": "contract ERC20",
                "name": "_oxiToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_startTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_finishTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startClaimTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minEthPayment",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_maxEthPayment",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_maxDistributedTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_IDOWallet",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ethAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "TokensDebt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "WithdrawEth",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BuyOxi",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributedTokens",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "finishTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "idoWallet",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxDistributedTokenAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxEthPayment",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minEthPayment",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "oxiToken",
        "outputs": [
            {
                "internalType": "contract ERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "oxiTokenAvailable",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startClaimTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenPerBNB",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokensForDistribution",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "debt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "total",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalInvestedETH",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawNotSoldTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const tokenAddress = '0x9BE2D72164F749307c6a5251b18fB427e5743B4A';
const tokenSymbol = 'OXI';
const tokenDecimals = 18;
const tokenImage = 'https://www.oxifilab.co/oxitometa.png';
//Load MetaMask on Launch
window.onload = function() {
    connectWallet();
  };
document.getElementById("defaultOpen").click();
document.getElementById("walletbutton").onclick = function () {
    connectWallet()
};
document.getElementById("claim-airdrops").onclick = function () {
    claimPlaceHolder()
};
document.getElementById("connect-buy").onclick = function () {
    
    connectWallet()
};
document.getElementById("buy-button").onclick = function () {
    //claimPlaceHolder()
    buyToken()
};

document.getElementById("claim-tokens").onclick = function () {
    //claimPlaceHolder()
    claimOxiToken()
};




//window.onload= function() {connectWallet()};

function myFunction() {
    alert("IDO Coming Soon");
}
var nOxi = document.getElementById("oxi");
var nBNB = document.getElementById("bnb");
const myPreloader = document.querySelector('.loader');

nBNB.addEventListener("keyup", function () {
    nOxi.setAttribute('value', "" + nBNB.value * 15000000);
});
//add eventlistener for keyboard typing

function opentab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

function claimPlaceHolder() {
    alert("Come Back on May 1");
}

function connectPlaceHolder() {
    alert("Still working on it");
}


async function connectWallet() {
   // document.getElementById("loader").style.display = "block";
        
   
    if (window.ethereum) {
        
       web3 = new Web3(window.ethereum);
        await window.ethereum.enable()
        const networkId = await web3.eth.net.getId();
        if (networkId != 97) {
            window.alert("Wrong network detected. Please switch to the BNB smart chain network.");
            //window.Error("Wrong network detected. Please switch to the BNB smart chain network.");
        } else {
           
          //  document.getElementById("loader").style.display = "none";
            document.getElementById("buy-button").style.display = "inline-block";
            document.getElementById("claim-tokens").style.display = "inline-block";
            document.getElementById("connect-buy").style.display = "none";
            window.alert("Connected to the BNB smart chain network.");
            await window.ethereum.request({method:'eth_requestAccounts'});
            accounts = await web3.eth.getAccounts();
            //console.log(accounts)
            account = accounts[0];
            //make account text show only begiining and end of address
            var accountText = account.substring(0, 6) + "..." + account.substring(account.length - 4, account.length);
            document.getElementById('walletbutton').textContent = accountText;
            balance = await web3.eth.getBalance(account)
            //get ETH Balance IN 2
            document.getElementById('bal').textContent = await web3.utils.fromWei(balance, "ether") + " BNB";

           
            
            

          
           

            
        }
        

        //contract = new web3.eth.Contract(ABI, ADDRESS);
    } else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
        
    
    return web3
}


async function buyToken (){
    

    
   
    
    var ido_contract = new web3.eth.Contract(ido_contract_abi,ido_contract_address);

    //console.log(accounts);
  account = accounts[0];
    //console.log(nBNB.value)
    var amount = await web3.utils.toWei(nBNB.value)
   // console.log(nBNB.value)
   // console.log (amount);

   try {
    await ido_contract.methods.BuyOxi().send(
        {
            from: account,
            gas:  300000,
            value: amount
        }
    )
}catch(ex){
    console.log(ex)
    if (ex.code == 4001) window.alert("User denied transaction signature")
    window.alert("Buy failed")
}
}

//Claim Token After Buying
async function claimOxiToken (){
    
    var ido_contract = new web3.eth.Contract(ido_contract_abi,ido_contract_address);
  
    accounts = await web3.eth.getAccounts();

    account = accounts[0];
  
    

    try{
        await ido_contract.methods.claim().send(
            {
                from: account,
                gas:  300000,
                value: 0
            }
        )
    }catch(ex){
        console.log(ex)
        window.alert("Claim Failed! You've either claimed before or You are not eligible to claim")
    }
}


document.getElementById('add-to-metamask').onclick = function () {
    addtoMeta();
}

//Add OXI to MetaMask
async function addtoMeta() {
    // document.getElementById("loader").style.display = "block";
         
    
     if (window.ethereum) {
         
        web3 = new Web3(window.ethereum);
         await window.ethereum.enable()
         const networkId = await web3.eth.net.getId();
         if (networkId != 97) {
             window.alert("Switch to BNB");
             //window.Error("Wrong network detected. Please switch to the BNB smart chain network.");
         } else {
            
           
            
            try {
              // wasAdded is a boolean. Like any RPC method, an error may be thrown.
              const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                  type: 'ERC20', // Initially only supports ERC20, but eventually more!
                  options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                  },
                },
              });

              console.log(wasAdded);
              
            
              if (wasAdded) {
                Window.alert("Added to OXI MetaMask");
              } else {
                Window.alert("Try Again");
              }
            } catch (error) {
              console.log(error);
            }
            
            
             
             
 
           
            
 
             
         }
         
 
         //contract = new web3.eth.Contract(ABI, ADDRESS);
     } else {
           window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
         }
         
     
     return newWeb3
 }



