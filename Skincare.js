let options = document.getElementById("option")
let popup = document.getElementById("popup");

options.addEventListener("mouseover", function () {
    popup.style = "display:flex";
})
options.addEventListener("mouseleave", function () {
    popup.style = "display:none"
})
popup.addEventListener("mouseenter", function () {
    popup.style = "display:flex";
})
popup.addEventListener("mouseleave", function () {
    popup.style = "display:none";
})