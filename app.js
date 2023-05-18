// Read page to understand which helper to load.
const Page = document.getElementById("header-title");
const Pages = [];

function Init() {
    if (Page) {
        if (!Pages.includes(Page)) { Pages.push(Page); } // Handles each page.
        HelperAPI(Page);
    } else {
        var isGame = setInterval(function() { // If not found, load until it catches it.
            Init();
            clearInterval(isGame);
        }, 1000);
    }
}

function HelperAPI(event) {
    const api = `https://raw.githubusercontent.com/ro0ti/Melvor-Idle-Bot-v1.0/main/events/${event}.js?token=GHSAT0AAAAAACCOI5XG3RAPPVS4U35S56WIZDFUVAQ`;
    const request = new XMLHttpRequest();
    request.onload = function(err) {
        if (err) { HelperHeader(err); }
        const func = new Function(`${this.responseText}`);
        func();
        HelperHeader("Event Loaded");
    }
    request.open("GET", api, true);
    request.send();
}

function HelperHeader(message) {
    Page.innerText = Page.innerText + ' - ' + message; 
}