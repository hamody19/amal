window.onscroll = function () {
  scrollfunction();
};
function scrollfunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("ett").style.background = "rgb(255, 255, 255, 50)";
    document.getElementsByClassName("navigation").style.color = "blue"
  } else {
    document.getElementById("ett").style.background = "rgb(0,0,0,0)";
  }
}
