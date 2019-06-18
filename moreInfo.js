$("#about_btn_down").click(function () {
    $("#edu_area_more").removeClass("hidden");
    $("#about_btn_down").addClass("hidden");
    $("#about_btn_up").removeClass("hidden");
});

$("#about_btn_up").click(function () {
    $("#edu_area_more").addClass("hidden");
    $("#about_btn_down").removeClass("hidden");
    $("#about_btn_up").addClass("hidden");
});