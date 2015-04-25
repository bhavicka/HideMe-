
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('styles/inject.css');
(document.head||document.documentElement).appendChild(style);
