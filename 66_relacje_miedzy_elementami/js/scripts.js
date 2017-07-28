var list = document.querySelector("#list");

var children = list.childNodes;
var elementChildren = list.children;

var first = list.firstChild;
var firstElement = list.firstElementChild;

var last = list.lastChild;
var lastElement = list.lastElementChild;

var second = firstElement.nextSibling;
var secondElement = firstElement.nextElementSibling;

var lastButOne = firstElement.previousSibling;
var lastButOneElement = lastElement.previousElementSibling;

var parent = second.parentNode;
secondElement.parentNode.removeChild(secondElement);
