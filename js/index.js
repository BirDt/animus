async function initGreeter(){
    if (window.greeter_config?.greeter.debug_mode){
	// debug
    }
    setHostname();
    connectPowerActions();
    populateSessions();
    populateUsers();

    console.log(lightdm.default_session);
}

window.addEventListener("GreeterReady", () => {
    initGreeter();
});
