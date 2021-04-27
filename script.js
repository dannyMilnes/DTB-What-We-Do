var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var homeDrawing = document.getElementById("homeDrawing");
var insightDrawing = document.getElementById("insightDrawing");
var processImprovementDrawing = document.getElementById("processImprovementDrawing");
var cloudDrawing = document.getElementById("cloudDrawing");
var applicationDevelopmentDrawing = document.getElementById("applicationDevelopmentDrawing");

function openInsignt() {
    btn1.style.display="none"
    btn2.style.display="block"
    btn3.style.display="block"
    btn4.style.display="block"

    content1.style.display="block";
    content2.style.display="none";
    content3.style.display="none";
    content4.style.display="none";

    homeDrawing.style.display="none";
    insightDrawing.style.display="block";
    processImprovementDrawing.style.display="none";
    cloudDrawing.style.display="none";
    applicationDevelopmentDrawing.style.display = "none";
}

function processImprovement() {
    btn1.style.display = "block"
    btn2.style.display = "none"
    btn3.style.display = "block"
    btn4.style.display = "block"

    content1.style.display="none";
    content2.style.display="block";
    content3.style.display="none";
    content4.style.display="none";

    homeDrawing.style.display = "none";
    insightDrawing.style.display = "none";
    processImprovementDrawing.style.display = "block";
    cloudDrawing.style.display = "none";
    applicationDevelopmentDrawing.style.display = "none";
}

function applicationDevelopment() {
    btn1.style.display = "block"
    btn2.style.display = "block"
    btn3.style.display = "none"
    btn4.style.display = "block"

    content1.style.display="none";
    content2.style.display="none";
    content3.style.display="block";
    content4.style.display="none";

    homeDrawing.style.display = "none";
    insightDrawing.style.display = "none";
    processImprovementDrawing.style.display = "none";
    cloudDrawing.style.display = "none";
    applicationDevelopmentDrawing.style.display = "block";
}

function cloud() {
    btn1.style.display = "block"
    btn2.style.display = "block"
    btn3.style.display = "block"
    btn4.style.display = "none"

    content1.style.display="none";
    content2.style.display="none";
    content3.style.display="none";
    content4.style.display="block";

    homeDrawing.style.display = "none";
    insightDrawing.style.display = "none";
    processImprovementDrawing.style.display = "none";
    cloudDrawing.style.display = "block";
    applicationDevelopmentDrawing.style.display = "none";
}