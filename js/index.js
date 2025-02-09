async function initGreeter(){
    if (window.greeter_config?.greeter.debug_mode){
	// debug
    }
    setHostname();
    connectPowerActions();
}

window.addEventListener("GreeterReady", () => {
    initGreeter();
});
