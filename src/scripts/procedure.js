function showProcedure() {
  var data = { action: "getProcedure" };
  getContent(data, setProcedure);
}

function setProcedure(data) {
  if (data.state != "fail") {
    document.getElementsByClassName("procedure__empty")[0].remove();
    let container = document.getElementsByClassName("procedure")[0];
    for (let i = 0; i < data.length; i++) {
      let item = document.createElement("div");
      item.classList.add("procedure__item");
      item.setAttribute("id", "item_" + data[i].id);

      let title = document.createElement("h3");
      title.classList.add("procedure__item--firm");
      title.textContent = data[i].firm;
      item.append(title);

      let show = document.createElement("div");
      show.innerText = "+";
      show.setAttribute("id", "showBtn_" + data[i].id);
      show.classList.add("procedure__item--show");
      show.setAttribute("showInfo", "false");
      show.addEventListener("click", () => showFirm(data[i].id));
      item.append(show);

      let status = document.createElement("p");
      status.innerText = "Status: " + data[i].status;
      status.classList.add("procedure__item--status");
      item.append(status);

      let court = document.createElement("p");
      court.innerText = "Sąd: " + data[i].court;
      court.classList.add("procedure__item--court");
      item.append(court);

      let content = document.createElement("div");
      content.classList.add("procedure__item--content");
      content.innerHTML = data[i].content;
      item.append(content);

      container.append(item);
    }
  }
}

function showFirm(data) {
  let showBtn = document.getElementById("showBtn_" + data);
  let item = document.getElementById("item_" + data);

  if (showBtn.attributes.showinfo.value == "false") {
    showBtn.innerText = "-";
    showBtn.setAttribute("showInfo", "true");

    let animation = "rollDown 4s";

    if (window.innerWidth > 800) {
      animation = "growItem 4s";
    }
    item.classList.add("item__grown");
    item.style.animation = animation;
  } else {
    showBtn.innerText = "+";
    showBtn.setAttribute("showInfo", "false");

    let animation = "rollUp 4s";

    if (window.innerWidth > 800) {
      animation = "decreaseItem 4s";
    }
    item.classList.remove("item__grown");
    item.style.animation = animation;
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  showProcedure();
});
