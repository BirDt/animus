function $(c) { return document.querySelector(c); }

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
