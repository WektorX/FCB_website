function getContent(data, callbackFunction) {
  var xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "http://localhost/fcb/getData.php", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      callbackFunction(response);
    }
  };
  xhttp.send(JSON.stringify(data));
}
