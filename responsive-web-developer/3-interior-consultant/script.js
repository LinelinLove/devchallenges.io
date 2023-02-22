let bodyoverflow = document.getElementById("overflow");
let targetDiv = document.getElementById("show_menu");
let open = document.getElementById("openmenu");

open.addEventListener('click', function () {
    targetDiv.style.display = "block";
})


let close = document.getElementById("closemenu");
close.addEventListener('click', function () {
    targetDiv.style.display = "none";
})