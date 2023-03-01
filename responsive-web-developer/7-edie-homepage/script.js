let showmenu = document.getElementById("show_menu");
let open = document.getElementById("openmenu");

open.addEventListener('click', function () {
    showmenu.style.display = "block";
})


let close = document.getElementById("closemenu");
close.addEventListener('click', function () {
    showmenu.style.display = "none";
})