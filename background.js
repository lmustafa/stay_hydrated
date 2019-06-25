// chrome.alarms.onAlarm.addListener(function(alarm) {
// 	console.log("ehllo");
//   alert("Beep");
// });
// let image = chrome.extension.getURL("water.png");
var options = {
  type: "basic",
  title: "Drink Water",
  message: "Please drink now",
  iconUrl: "water.png",
	// imageUrl: "https://www.pexels.com/photo/aerial-photography-of-seashore-1680140/"
}

function callback() {
	console.log("Popup done!");
}

function onAlarm(alarm) {
	chrome.notifications.create(options, callback);
	// console.log("EVER HERE??");
	// console.log("Alarm Fired", alarm);
}

chrome.alarms.onAlarm.addListener(onAlarm);
