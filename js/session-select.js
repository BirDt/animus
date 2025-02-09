let sessionsWrapper = document.querySelector('#session-items-wrapper');
let sessions = document.querySelectorAll('.session');
let currentSession = 0;
let isAnimatingSession = false;

function cycleSession(direction) {
    if (isAnimatingSession) return;
    
    const itemWidth = sessions[0].offsetWidth;
    const oldIndex = currentSession;
    currentSession = (currentSession + direction + sessions.length) % sessions.length;
    
    const animationOffset = direction * itemWidth;
    
    sessionsWrapper.style.transform = `translateX(${-oldIndex * itemWidth - animationOffset}px)`;
    isAnimatingSession = true;
    
    setTimeout(() => {
        sessionsWrapper.style.transition = 'none';
        sessionsWrapper.style.transform = `translateX(-${currentSession * itemWidth}px)`;
        void sessionsWrapper.offsetHeight; // Trigger reflow
        sessionsWrapper.style.transition = 'transform 0.3s ease-in-out';
        isAnimatingSession = false;
    }, 300);
}

function populateSessions() {
    let sessionObjects = lightdm.sessions;
    sessionsWrapper.innerHTML = "";
    
    sessionObjects.forEach((s) => {
	let newSession = document.createElement("div");
	newSession.id = s.key;
	newSession.className = "item session";
	newSession.textContent = s.name;
	sessionsWrapper.appendChild(newSession);
    });
    
    sessionsWrapper = document.querySelector('#session-items-wrapper');
    sessions = document.querySelectorAll('.session');
    currentSession = 0;
    isAnimatingSession = false;
}
