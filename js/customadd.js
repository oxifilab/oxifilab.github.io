var Web3 = import ('/js/web3.min.js');

function myFunction() {
    alert("IDO Coming Soon");
}
var nOxi = document.getElementById("oxi");
var nBNB = document.getElementById("bnb");

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

function claimPlaceHolder() {
    alert("Come Back on May 1");
}

function connectPlaceHolder() {
    alert("Still working on it");
}

async function connectWallet() {
    if (window.ethereum) {
        var web3 = new Web3(window.ethereum);
        await window.ethereum.enable()
        const networkId = await web3.eth.net.getId();
        if (networkId != 97) {
            window.alert("Wrong network detected. Please switch to the BNB smart chain network.");
            //window.Error("Wrong network detected. Please switch to the BNB smart chain network.");
        } else {
           
            document.getElementById("buy-button").style.display = "inline-block";
            document.getElementById("claim-tokens").style.display = "inline-block";
            document.getElementById("connect-buy").style.display = "none";
            window.alert("Connected to the BNB smart chain network.");
            await window.ethereum.request({method:'eth_requestAccounts'});
            var accounts = await web3.eth.getAccounts();
            console.log(accounts)
            var account = accounts[0];
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