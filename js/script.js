
document.getElementById("welcome_msg").style.display = "none";
document.getElementById("senses").style.display = "none";
document.getElementById("brain").style.display = "none";
document.getElementById("emotions").style.display = "none";
document.getElementById("mindfulness").style.display = "none";

// After form completed
document.querySelector("#submit").addEventListener("click",function welcome () {
	var fname = document.getElementById("fname").value;
    var favcolor = document.getElementById("favcolor").value;
    var suphero = document.getElementById("suphero").value;
    // var btn = document.createElement("INPUT");
    //     btn.setAttribute("type", "button");
    //     btn.setAttribute("value", "Continue");
    // var msg = document.getElementById("welcome_msg");
    document.getElementById("welcome_msg").style.backgroundColor = favcolor;
    document.getElementById("welcome_msg").style.display = "block";
    document.querySelector("#welcome_msg").innerHTML = "Welcome, " + fname + "! " + favcolor + " is an awesome color " + " and " + suphero + " is a great superhero " + "! Spider-Man is my favorite hero & he has the coolest super power Spidey Senses! Continue to see how you can activate your own Spidey Senses";
    // document.getElementsById("welcome_msg").appendChild(btn);
    document.getElementById("hero").style.display = "none";
    document.getElementById("senses").style.display = "block";
});

document.getElementById("hero_form").addEventListener("submit", function(event) {
    event.preventDefault();

    // welcome();

    setTimeout(function() {
    clearInterval(interval);}, 60000);
});

// welcome();

// After Senses page
document.querySelector("#next2").addEventListener("click",function senses () {
    document.getElementById("senses").style.display = "none";
    document.getElementById("brain").style.display = "block";
});

document.querySelector("#back1").addEventListener("click",function senses () {
    document.getElementById("senses").style.display = "none";
    document.getElementById("hero").style.display = "block";
});


// After Brain page
document.querySelector("#next3").addEventListener("click",function senses () {
    document.getElementById("brain").style.display = "none";
    document.getElementById("emotions").style.display = "block";
});

document.querySelector("#back2").addEventListener("click",function senses () {
    document.getElementById("brain").style.display = "none";
    document.getElementById("senses").style.display = "block";
});


// After Emotions page
document.querySelector("#next4").addEventListener("click",function senses () {
    document.getElementById("emotions").style.display = "none";
    document.getElementById("mindfulness").style.display = "block";
});

document.querySelector("#back3").addEventListener("click",function senses () {
    document.getElementById("emotions").style.display = "none";
    document.getElementById("brain").style.display = "block";
});

// After Mindfulness Page
document.querySelector("#back4").addEventListener("click",function senses () {
    document.getElementById("mindfulness").style.display = "none";
    document.getElementById("emotions").style.display = "block";
});

document.querySelector("#runback").addEventListener("click",function senses () {
    document.getElementById("mindfulness").style.display = "none";
    document.getElementById("hero").style.display = "block";
    document.getElementById("welcome_msg").style.display = "none";
});


// Reset
document.querySelector("#reset").addEventListener("click",function welcome () {
    document.getElementById("welcome_msg").style.display = "none";
});

// Video Slideshow

var video1 = document.querySelector("#senses_slideshow_video")
document.querySelector("#pause1").addEventListener("click", function() {
	console.log("Pause Video");
	video1.pause()
});

var video2 = document.querySelector("#brain_slideshow_video")
document.querySelector("#pause2").addEventListener("click", function() {
	console.log("Pause Video");
	video2.pause()
});

var video3 = document.querySelector("#emotions_slideshow_video")
document.querySelector("#pause3").addEventListener("click", function() {
	console.log("Pause Video");
	video3.pause()
});

var video4 = document.querySelector("#mindfulness_slideshow_video")
document.querySelector("#pause4").addEventListener("click", function() {
	console.log("Pause Video");
	video4.pause()
});
