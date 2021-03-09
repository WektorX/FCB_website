function showNews() {
  var data = { action: "getNews" };
  getContent(data, setNews);
}

function setNews(data) {
  if (data.state != "fail") {
    document.getElementsByClassName("news__empty")[0].remove();
    let newsContainer = document.getElementsByClassName("news")[0];
    for (let i = 0; i < data.length; i++) {
      let item = document.createElement("div");
      item.classList.add("news__item");
      item.setAttribute("id", data[i].timestamp_id);

      let title = document.createElement("h3");
      title.classList.add("news__item--title");

      let hrefTitle = document.createElement("a");
      hrefTitle.classList.add("news__item--hrefTitle");
      hrefTitle.textContent = data[i].title;
      hrefTitle.setAttribute("href", "#" + data[i].timestamp_id);
      title.append(hrefTitle);
      item.append(title);

      // data aktualności
      // let date = document.createElement("p");
      // date.classList.add("news__item--data");
      // date.textContent = data[i].date;
      // item.append(date);

      let content = document.createElement("p");
      content.classList.add("news__item--content");
      content.innerHTML = data[i].content;
      item.append(content);

      newsContainer.append(item);
      // console.log(item);
      setTimeout(function () {
        if (window.location.hash != "")
          document
            .getElementById(window.location.hash.slice(1))
            .scrollIntoView();
      }, 1000);
    }
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  showNews();
});
