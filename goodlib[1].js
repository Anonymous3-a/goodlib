function getQueryVariable(variable) { 
  var query = window.location.search.substring(1); 
  var vars = query.split("&"); 
  for (var i=0;i<vars.length;i++) { 
    var pair = vars[i].split("="); 
    if (pair[0] == variable) { 
      return pair[1]; 
    } 
  }
  return -1; //not found 
}

function setInnerHTML(selector, html) {
    document.querySelector(selector).innerHTML = html;
}

function setText(selector, text) {
    document.querySelector(selector).textContent = text;
}

function addElement(selector, id) {
    document.querySelector('body').innerHTML += '<' + selector + ' id="' + id + '"' + '>';
}

function qsel(selector) {
    return document.querySelector(selector);
}