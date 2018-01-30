'use strict';

function ajax(method, url, callback, data) {
  const xhr = new XMLHttpRequest();
  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === 4) {
  //     var requestAPI = JSON.parse(xhr.response);
  //     callback(requestAPI);
  //   }
  // });
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send(data);
}