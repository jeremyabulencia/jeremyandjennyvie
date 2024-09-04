$(document).ready(function() {
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

    console.log($('#unisonContainer').width());
    var $unisonContainerWidth = $('#unisonContainer').width();
    var divider = 0;
    if ($unisonContainerWidth > 1300) {
        divider = 2.67
    } else if ($unisonContainerWidth > 600) {
        divider = 2.9;
    } else if ($unisonContainerWidth > 400) {
        divider = 3.45
    } else if ($unisonContainerWidth > 300) {
        divider = 3.83;
    }
    $('.unison').mergeElements({
        mergePoint: parseInt($('#unisonContainer').width())/divider // middle of the width of the container
        // mergePoint: parseInt(parseInt($('.body').width())-parseInt($('.body').css("marginRight"))*.334)/2.64 // middle of the width of the container
    });
});