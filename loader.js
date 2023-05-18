const api = `https://raw.githubusercontent.com/ro0ti/Melvor-Idle-Bot-v1.0/main/app.js?token=GHSAT0AAAAAACCOI5XG3RAPPVS4U35S56WIZDFUVAQ`;
const request = new XMLHttpRequest();
request.onload = function(err) {
    if (err) { console.log(err); }
    const func = new Function(`${this.responseText}`);
    func();
}
request.open("GET", api, true);
request.send();