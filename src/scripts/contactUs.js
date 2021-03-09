function sendMail(data) {
  var xhttp = new XMLHttpRequest();
  //   xhttp.open("POST", "http://localhost/fcb/getData.php", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = this.responseText;

      let status = document.getElementsByClassName(
        "contactForm__form--status"
      )[0];
      if (JSON.parse(response).status == "success") {
        status.innerHTML = "Wyszłano maila! Dziękujemy!";
        status.style.color = "green";
        setTimeout(function () {
          let contact = document.getElementsByClassName("contactUs")[0];
          let contactForm = document.getElementsByClassName("contactForm")[0];
          contact.classList.remove("contactUsOpened");
          contactForm.classList.remove("contactForm__animateIn");
          contact.classList.add("contactUsClosed");
          contactForm.classList.add("contactForm__animateOut");

          setTimeout(clearContactForm(), 1000);
        }, 1000);
      } else {
        status.innerHTML =
          "Wysyłanie maila nie powiodło się! Spróbuj ponownie później!";
        status.style.color = "red";
      }
    }
  };
  xhttp.send(JSON.stringify(data));
}

function clearContactForm() {
  let author = document.getElementsByName("author")[0];
  let topic = document.getElementsByName("topic")[0];
  let contact = document.getElementsByName("contact")[0];
  let message = document.getElementsByName("message")[0];

  author.value = "";
  author.style.borderBottomColor = "white";

  topic.value = "";
  topic.style.borderBottomColor = "white";

  contact.value = "";
  contact.style.borderBottomColor = "white";

  message.value = "";
  message.style.borderBottomColor = "white";

  let status = document.getElementsByClassName("contactForm__form--status")[0];
  status.innerHTML = "";
}

function openContactForm() {
  let contact = document.getElementsByClassName("contactUs")[0];
  let contactForm = document.getElementsByClassName("contactForm")[0];
  if (contact.classList[1] == "contactUsOpened") {
    contact.classList.remove("contactUsOpened");
    contactForm.classList.remove("contactForm__animateIn");
    contact.classList.add("contactUsClosed");
    contactForm.classList.add("contactForm__animateOut");
  } else {
    contact.classList.remove("contactUsClosed");
    contactForm.classList.remove("contactForm__animateOut");
    contact.classList.add("contactUsOpened");
    contactForm.classList.add("contactForm__animateIn");
  }
}

function sendMessage() {
  let author = document.getElementsByName("author")[0];
  let topic = document.getElementsByName("topic")[0];
  let contact = document.getElementsByName("contact")[0];
  let message = document.getElementsByName("message")[0];
  let authTrue = false;
  let topicTrue = false;
  let contactTrue = false;
  let messTrue = false;
  if (author.value != "") {
    authTrue = true;
  } else {
    author.style.borderBottom = "1px solid red";
  }
  if (topic.value != "") {
    topicTrue = true;
  } else {
    topic.style.borderBottom = "1px solid red";
  }

  if (contact.value != "") {
    contactTrue = true;
  } else {
    contact.style.borderBottom = "1px solid red";
  }

  if (message.value != "") {
    messTrue = true;
  } else {
    message.style.borderBottom = "1px solid red";
  }
  let status = document.getElementsByClassName("contactForm__form--status")[0];
  if (authTrue && topicTrue && contactTrue && messTrue) {
    let data = {
      action: "sendMail",
      topic: topic.value,
      message:
        message.value +
        "\n" +
        "Od " +
        contact.value +
        "\n" +
        "Kontakt: " +
        contact.value,
    };
    sendMail(data);
  } else {
    status.innerHTML = "Uzupełnij wszystkie powyższe pola i spróbuj ponownie!";
    status.style.color = "red";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  let contact = document.getElementsByClassName("contactUs")[0];
  contact.addEventListener("click", () => openContactForm());

  let send = document.getElementsByClassName("contactForm__form--button")[0];
  send.addEventListener("click", () => sendMessage());
});
