function authenticate(){
    const selectedUser = users[currentUser].id;

    lightdm.cancel_authentication();
    lightdm.authenticate(selectedUser);
}

async function authenticationComplete() {
    const selectedSession = sessions[currentSession].id;
    
    await lightdm.respond($("#password-input").value);
    lightdm.start_session(selectedSession);
}

function bindAuthenticate() {
    $("#password-input").onkeypress = function(e) {
	var keycode = e.code || e.key;
	if(keycode == "Enter"){
	    authenticate();
	    return;
	}
    }

    window.lightdm.authentication_complete.connect(authenticationComplete);
}
