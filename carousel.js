window.onload = function () {
    var dir = -1;
    var interval = 3500;
    var duration = 100;
    var timer;

    $("#travel_slide img:nth-child(2)").addClass("hidden");
    $("#travel_slide img:nth-child(3)").addClass("hidden");

    // 開始計時 
    // 每隔3000毫秒(interval)執行一次slideTimer
    timer = setInterval(slideTimer, interval);
    slideTimer函數

    function slideTimer() {
        $("#travel_slide img:nth-child(1)").addClass("hidden");
        $("#travel_slide img:nth-child(3)").removeClass("hidden");
        $("#travel_slide").prepend($("#travel_slide img:nth-child(3)"));
    };
}
