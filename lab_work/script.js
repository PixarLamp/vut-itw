window.onscroll = function () {
  menu_sticky();
};
var navbar = document.getElementById("navbar_bg");
var navbarOffset = navbar.offsetTop; 
function menu_sticky() {
  if (window.pageYOffset >= navbarOffset) {
    navbar.classList.add("fixed");
  } 
  else {
    navbar.classList.remove("fixed");
  }
}
if (window.innerWidth > 576 && window.innerWidth < 992) {
  $("#navbar li a")
    .slice(1)
    .contents()
    .filter(function () {
      return this.nodeType === 3;
    })
    .remove();
  $("#navbar li span").removeClass("hidden");
}
// if (window.innerWidth = 576)
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
$(".fa-bars").click(function () {
  $("#navbar li")
  .slice(1)
  .toggle("slow", function () {});
});