$(document).ready(function() {

    // anonymous function

    $("h1,h2").click(function() {
        $(this).css("background-color", "purple");
    });

    $("h1,h2").mouseover(function() {
        $(this).css("background-color", "black");
    });

    $("h1").mousedown(function() {
        $(this).css("background-color", "blue");
    });

    $("h1").mousedown(function() {
        $(this).css("background-color", "red");
    });

    $("h1").mouseup(function() {
        $(this).css("background-color", "orange");
    });

    $("h1").mouseup(function() {
        $(this).css("background-color", "yellow");
    });

    $("h1").mouseleave(function() {
        $(this).css("background-color", "purple");
    });

    $("h3").click(function() {
        $("h2").unbind("mouseup");
        $("h2").unbind("mousedown");
    });

});
