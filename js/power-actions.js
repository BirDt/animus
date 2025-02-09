function connectPowerActions() {
    $("#poweroff-button").onclick = () => { lightdm.shutdown(); }
    $("#restart-button").onclick = () => { lightdm.restart(); }
}
