var showMenu = false;
//show menu bar after click hamburger menu
function showNavigation() {
  var menuBar = document.getElementsByClassName("navigation")[0];
  var navigationElements = document.getElementsByClassName(
    "navigation__element"
  );
  if (!showMenu) {
    menuBar.style.display = "flex";
    menuBar.classList.add("navigation__show");
    for (let i = 0; i < navigationElements.length; i++) {
      navigationElements[i].classList.add("navigation__element--showUp");
    }
  } else {
    menuBar.style.display = "none";
    for (let i = 0; i < navigationElements.length; i++) {
      navigationElements[i].classList.remove("navigation__element--showUp");
    }
  }
  showMenu = !showMenu;
}

document.addEventListener("DOMContentLoaded", function (event) {
  //menu hamburger button eventlistener
  var hamburger = document.getElementsByClassName("hamburger")[0];
  hamburger.addEventListener("click", () => showNavigation());

  //window on location change
  window.addEventListener("hashchange", () => underlineMenuElement());

  //eventhandler window resize if changing to wider screen toogle menu change
  window.addEventListener("resize", function () {
    // console.log(window.innerWidth)
    if (!showMenu && window.innerWidth > 800) {
      showNavigation();
    }
    if (showMenu && window.innerWidth < 800) {
      showNavigation();
    }
  });
});
