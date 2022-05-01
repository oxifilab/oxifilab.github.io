//Const and Var
var Web3 = import ('/js/web3.min.js');
var accounts;
var web3;
var click =0;
var account;
var tocheckErr;

const ido_contract_address = "0x05c665531eB10B5258c3646c211E55E875E3B74D";
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
        "name": "buyOxi",
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
const tokenImage = 'https://www.oxifilab.co/img/oxitometa.png';
window.addEventListener('load', function() {
    
    
    connectWallet();
  

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    
  })
//Load MetaMask on Launch

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
    if (document.getElementById('oxi').value.length==0){
        //check if input ELEMENT CONTAINS STRING

        alert("Please enter a valid amount");
    }
    
    else {
    //claimPlaceHolder()
    buyToken()}
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
        document.getElementById("loader").style.display = "inline-block";

        
       web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        if (networkId != 97) {
            window.alert("Wrong network detected. Please switch to the BNB smart chain network.");
            //window.Error("Wrong network detected. Please switch to the BNB smart chain network.");
        } else {
           
          //  document.getElementById("loader").style.display = "none";
            document.getElementById("buy-button").style.display = "inline-block";
            document.getElementById("claim-tokens").style.display = "inline-block";
            document.getElementById("connect-buy").style.display = "none";
            
            await window.ethereum.request({method:'eth_requestAccounts'});
            accounts = await web3.eth.getAccounts();
            //console.log(accounts)
            account = accounts[0];
            //make account text show only begiining and end of address
            var accountText = account.substring(0, 6) + "..." + account.substring(account.length - 4, account.length);
            balance = await web3.eth.getBalance(account)
            //convert balance to 4 decimal places.
            var bal = Number(await web3.utils.fromWei(balance, "ether")).toFixed(4) + " BNB"
            document.getElementById('bal').textContent = bal;
            document.getElementById('walletbutton').textContent = accountText;
            document.getElementById("loader").style.display = "none";
            
            

          
           

            
        }
       

        

        //contract = new web3.eth.Contract(ABI, ADDRESS);
    } else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
        
    
    return web3
}


async function buyToken (){
    

    
    document.getElementById("loader").style.display = "inline-block";
    
    var ido_contract = new web3.eth.Contract(ido_contract_abi,ido_contract_address);

    //console.log(accounts);
  account = accounts[0];
    //console.log(nBNB.value)
    var amount = await web3.utils.toWei(nBNB.value)
   // console.log(nBNB.value)
   // console.log (amount);
   try {
    await ido_contract.methods.buyOxi().call(
        {
            from: account,
            gas:  300000,
            value: amount
        }
    )
    // Run this if there is no error
            await ido_contract.methods.buyOxi().send(
                {
                    from: account,
                    gas:  300000,
                    value: amount
                }
        
            )
            document.getElementById("loader").style.display = "none";
  }
  catch (err) {
      if (err.message != "") {
        document.getElementById("loader").style.display = "none";
    }
    
    //check err for message
   console.log(err);

    if (err.message.includes('execution reverted: Less then min amount')){
        alert("Less than Minimum Amount");
    }
    else if (err.message.includes('execution reverted: Insufficient funds')){
        alert("Insufficient funds");
    }
    else if (err.message.includes('execution reverted: Insufficient gas')){
        alert("Insufficient gas");
    }
    else if (err.message.includes('execution reverted: Insufficient balance')){
        alert("Insufficient balance");
    }
    else if (err.message.includes('execution reverted: Invalid amount')){
        alert("Invalid amount");
    }
    else if (err.message.includes('execution reverted: Not started')){
        alert("Ido has not Started yet");
    }
    else if (err.message.includes('execution reverted: Already ended')){
        alert("Ido has ended");
    }
    else if (err.message.includes('insufficient funds for transfer: address ')){
        alert("Not Enough Balance to Buy");
    }
    else if (err.message.includes('execution reverted: More then max amount')){
        alert("You can only Buy 10 BNB of OXI at a time");
    }
    //else {
       
        /* catch(ex){
            document.getElementById("loader").style.display = "none";
            console.log(ex)
            const data = ex.data;
            const txHash = Object.keys(data)[0]; // TODO improve
            const reason = data[txHash].reason;
        
            console.log(reason); 
            if (ex.code == 4001) window.alert("Transaction Canceled")
            */
        
  
    //}
  }finally{
      //UPDATES BALANCE AFTER CLAIM
    document.getElementById("loader").style.display = "none";
    balance = await web3.eth.getBalance(account)
    //convert balance to 4 decimal places.
    var bal = Number(await web3.utils.fromWei(balance, "ether")).toFixed(4) + " BNB"
    document.getElementById('bal').textContent = bal;
  }
 /*   try {
    await ido_contract.methods.buyOxi().send(
        {
            from: account,
            gas:  300000,
            value: amount
        }

    )
    document.getElementById("loader").style.display = "none";
}catch(ex){
    document.getElementById("loader").style.display = "none";
    console.log(ex)
    const data = ex.data;
    const txHash = Object.keys(data)[0]; // TODO improve
    const reason = data[txHash].reason;

    console.log(reason); 
    if (ex.code == 4001) window.alert("Transaction Canceled")
   
} */
}

//Claim Token After Buying

async function claimOxiToken (){

    
    document.getElementById("loader").style.display = "inline-block";

    
    var ido_contract = new web3.eth.Contract(ido_contract_abi,ido_contract_address);
  
    accounts = await web3.eth.getAccounts();
   

    account = accounts[0];
  
    

    try{
        await ido_contract.methods.claim().call(
            {
                from: account,
                gas:  300000,
                value: 0
            }
        )
   
     await ido_contract.methods.claim().send(
            {
                from: account,
                gas:  300000,
                value: 0
            }
        )
      
        
        
    }catch(err){
        document.getElementById("loader").style.display = "none";
        console.log(err);
        if(err.message.includes("execution reverted: Not Enough Tokens For Claim")){
            alert("Please Wait, Come Back Later");
        }
        else if(err.message.includes("execution reverted: You have not Bought Oxi Yet"
        )){
            alert("Purchase Oxi before Claiming");
        }
        else if(err.message.includes("execution reverted: Distribution not started"
        )){
            alert("Distribution has not Started yet");
        }
        }finally{

            //UPDATES BALANCE AFTER CLAIM
            document.getElementById("loader").style.display = "none";
         balance = await web3.eth.getBalance(account)
    //convert balance to 4 decimal places.
    var bal = Number(await web3.utils.fromWei(balance, "ether")).toFixed(4) + " BNB"
    document.getElementById('bal').textContent = bal;
            document.getElementById("loader").style.display = "none";
        }
       
    }



document.getElementById('add-to-metamask').onclick = function () {
    
    console.log(click);
    if (click <1){
   
    addtoMeta();
    click = 1;
    }else {
        window.alert("Requesting Too Much, Reload Page");
    }
}

//Add OXI to MetaMask
async function addtoMeta() {

    
    // document.getElementById("loader").style.display = "block";
      if (click < 1) {  
        document.getElementById("loader").style.display = "inline-block";
    
     if (window.ethereum) {
        //document.getElementById("loader").style.display = "block";
        web3 = new Web3(window.ethereum);
         
         const networkId = await web3.eth.net.getId();
         
         if (networkId != 97) {
             window.alert("Switch to BNB Chain");
             //window.Error("Wrong network detected. Please switch to the BNB smart chain network.");
         } else {
            
            //document.getElementById("loader").style.display = "none";
            
            try {
                document.getElementById("loader").style.display = "none";
                
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
         
     
     return web3
    }
    else{
      
    }

}

async function getTokenBalance(){
    try{
        var balance = await web3.eth.getBalance(ido_contract_address) 
        var token_balance = Number(await web3.utils.fromWei(balance, "ether")).toFixed(4)
        document.getElementById("tokenbalance") = token_balance
    }catch(ex){
        console.log(ex)
    }
}
