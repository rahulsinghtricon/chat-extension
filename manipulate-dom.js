// console.log("working");
// var x = document.getElementsByTagName("body");
// for (i=0;i<x.length;i++){
// x[i].innerHTML="dfgfd";
// }

var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("index.html");

document.body.insertBefore (iFrame, document.body.firstChild);