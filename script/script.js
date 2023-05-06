window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("navigation-bar-behaver").style.background = "rgba(255, 255, 255, 0.5)";
    document.getElementById("amal-logo").style.color = "#000000";
  } else {
    document.getElementById("navigation-bar-behaver").style.background = "rgba(0,0,0,0)";
    document.getElementById("amal-logo").style.color = "#ffffff"; // Change the color back to white
  }
}
