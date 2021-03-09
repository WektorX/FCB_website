//underline current location on menu bar

function scrollStartAnimation(top) {
  var offerPosition =
    document.getElementById("offerTitle").offsetTop -
    document.getElementById("oferta").clientHeight / 4;

  var aboutPosition =
    document.getElementById("wspolpraca").offsetTop -
    document.getElementById("wspolpraca").clientHeight / 2;
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

function underlineMenuElement() {
  let hashName = document.location.hash;

  var top =
    (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
  setTimeout(function () {
    top =
      (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
    scrollStartAnimation(top);
  }, 100);

  if (hashName == "") {
    hashName = "#strona_glowna";
  }
  hashName = hashName.substring(1);
  let old = document.getElementsByClassName("navigation__element--current");
  if (old.length > 0) {
    old[0].classList.remove("navigation__element--current");
  }

  let current = document.getElementsByClassName("link-" + hashName)[0];
  current.classList.add("navigation__element--current");
  if (showMenu && window.innerWidth < 800) {
    showNavigation();
  }
}

function showAboutus() {
  var data = { action: "getAboutus" };
  getContent(data, setAboutus);
}

function setAboutus(data) {
  let content = document.getElementsByClassName("about__text")[0];
  content.innerHTML = data[0].content;
}

function showOffer() {
  var data = { action: "getOffer" };
  getContent(data, setOffer);
}
function showWedka() {
  var data = { action: "getWedka" };
  getContent(data, setWedka);
}

function showIntro() {
  var data = { action: "getIntro" };
  getContent(data, setIntro);
}

function showCooperation() {
  var data = { action: "getCooperation" };
  getContent(data, setCooperation);
}

function showContact() {
  var data = { action: "getContact" };
  getContent(data, setContact);
}

function setIntro(data) {
  let contentContainer = document.getElementsByClassName(
    "offer__intro_content"
  )[0];

  for (let i = 0; i < data.length; i++) {
    let element = document.createElement("div");
    element.classList.add("offer__intro_content--element");

    let title = document.createElement("h3");
    title.classList.add("offer__intro_content--title");
    title.textContent = data[i].title;
    element.append(title);

    let text = document.createElement("div");
    text.classList.add("offer__intro_content--text");
    text.innerHTML = data[i].content;
    element.append(text);

    contentContainer.append(element);
  }
}

function setWedka(data) {
  let container = document.getElementsByClassName("header__offer")[0];
  for (let i = 0; i < 5; i++) {
    if (i != 4) {
      let title = document.createElement("h3");
      title.classList.add("header__offer--item");
      data[i].content.replace("<p>", "");
      data[i].content.replace("</p>", "");
      title.innerHTML = data[i].content;
      container.append(title);
    } else {
      let list = document.createElement("ul");
      list.classList.add("header__offer--list");
      list.classList.add("header__offer--item");
      data[i].content.replace("<ul>", "");
      data[i].content.replace("</ul>", "");
      list.innerHTML = data[i].content;
      container.append(list);
    }
  }
}

function setOffer(data) {
  let contentContainer = document.getElementsByClassName("offer__content")[0];

  for (let i = 0; i < data.length; i++) {
    let element = document.createElement("div");
    element.classList.add("offer__content--element");

    let icon = document.createElement("div");
    icon.classList.add("offer__content--icon");
    element.append(icon);

    let title = document.createElement("h3");
    title.classList.add("offer__content--title");
    title.textContent = data[i].title;
    element.append(title);

    let text = document.createElement("div");
    text.classList.add("offer__content--text");
    text.innerHTML = data[i].content;
    element.append(text);

    if (data[i].readmore != "") {
      let readMore = document.createElement("a");
      readMore.classList.add("offer__content--more");
      readMore.textContent = "Czytaj więcej...";
      readMore.setAttribute("href", data[i].readmore);
      element.append(readMore);
    }

    contentContainer.append(element);
  }

  var iconsList = document.getElementsByClassName("offer__content--icon");

  for (let i = 0; i < iconsList.length; i++) {
    let num = (i % 8) + 1;
    iconsList[i].style.backgroundImage = "url(./images/icon_0" + num + ".png)";
  }
}

function setCooperation(data) {
  let contentContainer = document.getElementsByClassName("services")[0];

  for (let i = 0; i < data.length; i++) {
    let element = document.createElement("div");
    element.classList.add("services__element");

    let title = document.createElement("h3");
    title.classList.add("services__element--title");
    title.textContent = data[i].title;
    element.append(title);

    let text = document.createElement("div");
    text.classList.add("services__element--text");
    text.innerHTML = data[i].content;
    element.append(text);

    contentContainer.append(element);
  }
}

function setContact(data) {
  let container = document.getElementsByClassName("contact__info")[0];
  container.innerHTML = data[0].content;
}

document.addEventListener("DOMContentLoaded", function (event) {
  //underline curent location on menu bar

  showWedka();
  showIntro();
  showOffer();
  showAboutus();
  showCooperation();
  showContact();
  setTimeout(() => underlineMenuElement(), 500);
  window.addEventListener("scroll", function () {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    scrollStartAnimation(top);
  });

  // document.getElementsByTagName("body")[0].firstChild.remove();
});
