
document.querySelector("#submit").addEventListener("click",function welcome () {
	var fname = document.getElementById("fname").value;
    var favcolor = document.getElementById("favcolor").value;
    var suphero = document.getElementById("suphero").value;
    var btn = document.createElement("INPUT");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", "Continue");
    // var msg = document.getElementById("welcome_msg");
    document.getElementById("welcome_msg").style.backgroundColor = favcolor;
    document.querySelector("#welcome_msg").innerHTML = "Welcome, " + fname + "! " + favcolor + " is an awesome color " + " and " + suphero + " is a great superhero " + "! Spider-Man is my favorite hero & he has the coolest super power Spidey Senses! Continue to see how you can activate your own Spidey Senses";
    // document.getElementsById("welcome_msg").appendChild(btn);
});

// document.getElementsByClassName(welcome_current).innerHTML = welcome;
document.getElementById("hero_form").addEventListener("submit", function(event) {
    event.preventDefault();

    // welcome();

    setTimeout(function() {
    clearInterval(interval);}, 60000);
});

welcome();