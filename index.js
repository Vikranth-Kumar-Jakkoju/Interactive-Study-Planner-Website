var name;
window.onload = () => {
    name = prompt("Can I know your name?");
};

// const name = prompt("Can I know your name?");
if(name) {
    var greet = "Greetings Mr / Ms " + name;
    document.querySelector("h3").innerText = greet;
} 
