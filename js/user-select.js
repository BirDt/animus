let usersWrapper = document.querySelector('#user-items-wrapper');
let users = document.querySelectorAll('.user');
let currentUser = 0;
let isAnimatingUsers = false;

function cycleUser(direction) {
    if (isAnimatingUsers) return;
    
    const itemWidth = users[0].offsetWidth;
    const oldIndex = currentUser;
    currentUser = (currentUser + direction + users.length) % users.length;
    
    const animationOffset = direction * itemWidth;
    
    usersWrapper.style.transform = `translateX(${-oldIndex * itemWidth - animationOffset}px)`;
    isAnimatingUsers = true;
    
    setTimeout(() => {
        usersWrapper.style.transition = 'none';
        usersWrapper.style.transform = `translateX(-${currentUser * itemWidth}px)`;
        void usersWrapper.offsetHeight; // Trigger reflow
        usersWrapper.style.transition = 'transform 0.3s ease-in-out';
        isAnimatingUsers = false;
    }, 300);
}

function populateUsers() {
    let userObjects = lightdm.users;
    usersWrapper.innerHTML = "";
    userObjects.forEach((u) => {
	let newUser = document.createElement("div");
	newUser.id = u.username;
	newUser.className = "item user";
	newUser.textContent = u.display_name;
	usersWrapper.appendChild(newUser);
    });

    usersWrapper = document.querySelector('#user-items-wrapper');
    users = document.querySelectorAll('.user');
    currentUser = 0;
    isAnimatingUsers = false;
}
