window.onload = function () {
    var dir = -1;
    var interval = 5000;
    var duration = 100;
    var timer;

    $("#travel_slide img:nth-child(2)").addClass("hidden");
    $("#travel_slide img:nth-child(3)").addClass("hidden");
    $("#sing_slide img:nth-child(2)").addClass("hidden");

    // 開始計時 
    // 每隔3000毫秒(interval)執行一次slideTimer
    timer = setInterval(slideTimer, interval);
    slideTimer函數

    function slideTimer() {
        $("#sing_slide img:nth-child(1)").addClass("hidden");
        $("#travel_slide img:nth-child(1)").addClass("hidden");
        $("#sing_slide img:nth-child(2)").removeClass("hidden");
        $("#travel_slide img:nth-child(3)").removeClass("hidden");
        $("#sing_slide").prepend($("#sing_slide img:nth-child(2)"));
        $("#travel_slide").prepend($("#travel_slide img:nth-child(3)"));

    };
}

// function animate(offset) {
//     // 我們可以透過直接變動html上的style變更圖片位置
//     //獲取的是style.left，是相對左邊獲取距離，所以第一張圖後style.left都為負值，
//     //且style.left獲取的是字符串，需要用parseInt()取整轉化為數字。
//     var newLeft = parseInt(list.style.top) + offset;
//     list.style.top = newLeft + '%';
//     if (newLeft < -400) {
//         list.style.top = 0 + '%';
//     }
//     if (newLeft > 0) {
//         list.style.top = -400 + '%';
//     }
// }

// prev.onclick = function () {
//     // 按下往前的鈕 變數offset+600回去
//     animate(100);
// };
// next.onclick = function () {
//     // 按下往後的鈕 變數offset-600
//     animate(-100);
// };