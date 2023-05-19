// Combat
const HealthBar = document.getElementById("combat-player-hitpoints-bar");
const hasClaimableLoot = document.getElementsByClassName("bank-item no-bg btn-light pointer-enabled");

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

    var claimLootAlert = setInterval(function() {
        if (hasClaimableLoot.length > 0) {
            alert('Claim your loot');
            clearInterval(claimLootAlert);
        }
    }, 5000);
    
}