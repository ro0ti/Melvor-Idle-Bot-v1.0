// Combat
const HealthBar = document.getElementById("combat-player-hitpoints-bar");

Script();

function Script() {
    if (HealthBar) {
        var rawValue = HealthBar.style.width;
        var HealthValue = Math.floor(rawValue.replace("%", ""));

        if (HealthValue <= 90) {
            var HealButtons = document.getElementsByClassName("btn text-combat-smoke font-size-sm btn-outline-secondary");
            for (var i = 0; i < HealButtons.length; i++) {
                HealButtons[i].click();
            }
            alert("Auto healed.");
        }
    } else {
        setInterval(function() {
            Script();
        }, 1000);
    }
}