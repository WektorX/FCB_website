function setCookie(name, value, exDays) {
  var d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
//get coocki check if session still exist
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

document.addEventListener("DOMContentLoaded", function (event) {
  let cookieInfo = getCookie("agreement");
  if (cookieInfo == "true") {
    document.getElementsByClassName("cookies")[0].remove();
  } else {
    let acceptBtn = document.getElementsByClassName("accept")[0];
    acceptBtn.addEventListener("click", function () {
      setCookie("agreement", "true", 365);
      document.getElementsByClassName("cookies")[0].remove();
    });
  }
});
