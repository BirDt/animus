async function initGreeter(){
    if (window.greeter_config?.greeter.debug_mode){
	// debug
    }
    setHostname();
    connectPowerActions();
    populateSessions();
    populateUsers();

    bindAuthenticate();
}

window.addEventListener("GreeterReady", () => {
    initGreeter();
});
