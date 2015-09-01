var text_area = document.getElementById("pull_request_body");
var project_path = window.location.pathname.split("/").slice(0,3).join("/");
var template_url = window.location.origin + project_path + "/raw/master/PULL_REQUEST_TEMPLATE.md";

if(!text_area.value) {
  var client = new XMLHttpRequest();
  client.open('GET', template_url);
  client.onreadystatechange = function() {
    text_area.value = client.responseText;
    // console.log(chrome, pageAction)
    // chrome.pageAction.show();
  }
  client.send();
}
