$(document).ready(function() {
    // start
    $('.containerHeader').css({"height":$(window).height()});
    
    // countdown plugin
    $("#countdown").countdownTimer({
        targetDate: new Date("2025-01-04 13:00:00"), // Wedding Day January 04 2025 1 PM
        border: "2px solid orange",
        fontStyle: "Arial",
        fontColor: "green",
        numFontSize: "40px",
        labelFontSize: "10px",
        callback: function () {
            
        }
    });

    // unison plugin
    $('.unison').mergeElements();
});