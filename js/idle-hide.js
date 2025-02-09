let hideInterval = 1;

setInterval(() => {
    if(hideInterval > 8){
        document.querySelectorAll(".hideable").forEach(el => {
            el.classList.add("hidden")
        });
        hideInterval = 1;
        return;
    }
    hideInterval += 1;
}, 1000);

function showHiddenElements() {
    document.querySelectorAll(".hideable").forEach(el => {
        el.classList.remove("hidden")
    });
    hideInterval = 1;
}

document.body.onclick = showHiddenElements;
document.body.onmousemove = showHiddenElements;
document.body.onkeydown = showHiddenElements;
