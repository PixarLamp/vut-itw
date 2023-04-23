function scroll(anchor) {
    $("html,body").stop();
    $("html,body").animate({ scrollTop: $(anchor).offset().top }, 1000);
}
$("a").click(function (event) {
    var href = $(this).attr("href");
    if (/^#/.test(href)) {
      event.preventDefault();
      scroll(href);
    }
});

$("#add").click(function(){
    var e = document.getElementById('add');
    var f = document.getElementById('remove');
    var x = document.getElementById("second")
    e.classList.add("hidden")
    x.classList.remove("hidden")
    f.classList.remove("hidden")
});

$("#remove").click(function(){
    var e = document.getElementById('add');
    var f = document.getElementById('remove');
    var x = document.getElementById("second")
    e.classList.remove("hidden")
    x.classList.add("hidden")
    f.classList.add("hidden")

});