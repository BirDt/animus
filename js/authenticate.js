function authenticate(){
    const selectedUser = users[currentUser].id;
    console.log(selectedUser);

    lightdm.cancel_authentication();
    lightdm.authenticate(selectedUser);
}

async function authenticationComplete() {
    const selectedSession = sessions[currentSession].id;
    console.log(selectedSession);
    
    await lightdm.respond($("#password-input").value);
    console.log("Response positive");
    lightdm.start_session(selectedSession);
}

function bindAuthenticate() {
    $("#password-input").onkeypress = function(e) {
	console.log("Submitting");
	var keycode = e.code || e.key;
	if(keycode == "Enter"){
	    authenticate();
	    return;
	}
    }

    window.lightdm.authentication_complete.connect(authenticationComplete);
}
