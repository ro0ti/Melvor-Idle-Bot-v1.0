// Read page to understand which helper to load.
var TargetPage = document.getElementById("header-title");

Init();
setInterval(function() {
    //console.clear();
    //console.log("Melvor Idle Bot - v1.0 [ro0ti#2266]\nPage Loaded: " + TargetPage.innerText + "\nEvent Loaded: " + TargetPage.innerText + ".js");
    Init();
}, 5000);

function Init() {
    if (TargetPage) {
        HelperAPI(TargetPage.innerHTML);
    }
}

function HelperAPI(event) {
    var api = `https://raw.githubusercontent.com/ro0ti/Melvor-Idle-Bot-v1.0/main/events/${event}.js?token=GHSAT0AAAAAACCOI5XG3RAPPVS4U35S56WIZDFUVAQ`;
    var request = new XMLHttpRequest();
    request.onload = function(err) {
        if (err) { console.log(err); }
        var func = new Function(`${this.responseText}`);
        func();
    }
    request.open("GET", api, true);
    request.send();
}