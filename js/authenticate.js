function bindAuthenticate() {
    $("#password-input").onkeypress = function(e) {
	console.log("Asking for authentication");
	var keycode = e.code || e.key;
	if(keycode == "Enter"){
	    const selectedUser = users[currentUser].id;

	    lightdm.authenticate(selectedUser);
	    return;
	}
    }

    lightdm.show_prompt.connect((text, type) => {
	lightdm.respond($("#password-input").value);
    });
    
    lightdm.authentication_complete.connect(() => {
	const selectedSession = sessions[currentSession].id;
	lightdm.start_session(selectedSession);
    });
}
