// var showMenu = false;
// //show menu bar after click hamburger menu
// function showNavigation() {
//   var menuBar = document.getElementsByClassName("navigation")[0];
//   var navigationElements = document.getElementsByClassName(
//     "navigation__element"
//   );
//   if (!showMenu) {
//     menuBar.style.display = "flex";
//     menuBar.classList.add("navigation__show");
//     for (let i = 0; i < navigationElements.length; i++) {
//       navigationElements[i].classList.add("navigation__element--showUp");
//     }
//   } else {
//     menuBar.style.display = "none";
//     for (let i = 0; i < navigationElements.length; i++) {
//       navigationElements[i].classList.remove("navigation__element--showUp");
//     }
//   }
//   showMenu = !showMenu;
// }

//underline current location on menu bar
function underlineMenuElement() {
  let hashName = document.location.hash;

  var top =
    (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
  scrollStartAnimation(top);

  if (hashName == "") {
    hashName = "#strona_glowna";
  }
  hashName = hashName.substring(1);
  let old = document.getElementsByClassName("navigation__element--current")[0];
  old.classList.remove("navigation__element--current");

  let current = document.getElementsByClassName("link-" + hashName)[0];
  current.classList.add("navigation__element--current");
  if (showMenu && window.innerWidth < 800) {
    showNavigation();
  }
}

function scrollStartAnimation(top) {
  var offerPosition =
    document.getElementById("oferta").offsetTop -
    document.getElementById("oferta").clientHeight / 2;
  var aboutPosition =
    document.getElementById("o_nas").offsetTop -
    document.getElementById("o_nas").clientHeight / 2;
  var contactPosition =
    document.getElementById("kontakt").offsetTop -
    document.getElementById("kontakt").clientHeight / 2;

  if (top >= offerPosition) {
    document
      .getElementsByClassName("offer__content")[0]
      .classList.add("offer__content--animate");
    let elementsList = document.getElementsByClassName(
      "offer__content--element"
    );
    for (let i = 0; i < elementsList.length; i++) {
      elementsList[i].classList.add("offer__content--animate");
    }
  }

  if (top >= aboutPosition) {
    document
      .getElementsByClassName("about__text")[0]
      .classList.add("about__text--animate");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  //underline curent location on menu bar
  underlineMenuElement();

  window.addEventListener("scroll", function () {
    var doc = document.documentElement;
    // var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    scrollStartAnimation(top);
  });

  var iconsList = document.getElementsByClassName("offer__content--icon");

  for (let i = 0; i < iconsList.length; i++) {
    let num = (i % 6) + 1;
    iconsList[i].style.backgroundImage = "url(./images/icon_" + num + ".png)";
  }
});
