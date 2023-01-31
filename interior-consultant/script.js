$(document).ready(function(){
    $('ul li a').hover(function(){
        $('li a').removeClass("currentpage");
        $(this).addClass("currentpage");
    });
});