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
    connectPlaceHolder()
};
document.getElementById("claim-airdrops").onclick = function () {
    claimPlaceHolder()
};
document.getElementById("buy-button").onclick = function () {
    claimPlaceHolder()
};

function claimPlaceHolder() {
    alert("Come Back on May 1");
}

function connectPlaceHolder() {
    alert("Still working on it");
}