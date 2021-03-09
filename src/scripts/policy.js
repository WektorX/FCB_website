function getPolicy() {
  var data = { action: "getPrivacy" };
  getContent(data, setPolicy);
}

function setPolicy(data) {
  let container = document.getElementsByClassName("policy__text")[0];
  container.innerHTML = data[0].content;
}

document.addEventListener("DOMContentLoaded", function (event) {
  getPolicy();
});
