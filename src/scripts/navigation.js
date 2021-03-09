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

function showSubpages() {
  var data = { action: "getSubpages" };
  getContent(data, addToMenu);
}

function addToMenu(data) {
  let menu = document.getElementsByClassName("navigation")[0];

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.classList.add("navigation__element");
    if (data[i].enable == 1) {
      let a = document.createElement("a");
      a.classList.add("navigation__element--link");
      console.log(window.location.pathname);
      let path = window.location.pathname == "/" ? "./" : "../";
      a.href = path + data[i].path;
      a.textContent = data[i].name;
      if (window.location.pathname == "/" + data[i].path) {
        a.classList.add("navigation__element--current");
      }
      let newLi = li;
      newLi.appendChild(a);
      menu.appendChild(newLi);
    }
  }
  addToFooter(data);
}

function addToFooter(data) {
  let links = document.getElementsByClassName("footer__links")[0];

  for (let i = 0; i < data.length; i++) {
    if (data[i].enable == 1) {
      let a = document.createElement("a");
      let path = window.location.pathname == "/" ? "./" : "../";
      a.href = path + data[i].path;
      a.textContent = data[i].name;
      links.appendChild(a);
    }
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  // make menu
  showSubpages();

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
