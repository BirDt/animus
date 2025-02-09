function bindAuthenticate() {
    $("#password-input").onkeypress = function(e) {
	console.log("Asking for authentication");
	var keycode = e.code || e.key;
	if(keycode == "Enter"){
	    const selectedUser = users[currentUser].id;
	    console.log(`Authenticating ${selectedUser}`);

	    lightdm.authenticate(selectedUser);
	    return;
	}
    }

    lightdm.show_prompt.connect((text, type) => {
	console.log(`Responding with ${$("#password-input").value}`);
	lightdm.respond($("#password-input").value)
    });
    
    lightdm.authentication_complete.connect(() {
	const selectedSession = sessions[currentSession].id;
	console.log(`Starting session ${selectedSession}`)
	lightdm.start_session(selectedSession);
    });
}
