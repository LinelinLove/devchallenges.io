$(document).ready(function () {
    
    $('ul li a').hover(function () {
        $('li a').removeClass("currentpage");
        $(this).addClass("currentpage");
    });

    const targetDiv = document.getElementById("show_menu");
    const bodyoverflow = document.getElementById("overflow");
    const btn = document.getElementById("openmenu");
    btn.onclick = function () {
        targetDiv.style.visibility = "visible";
        bodyoverflow.style.overflow = "hidden";
    };

    const clsbtn = document.getElementById("closemenu");
    clsbtn.onclick = function () {
        targetDiv.style.visibility = "hidden";
        bodyoverflow.style.overflow = "auto";
    };
});