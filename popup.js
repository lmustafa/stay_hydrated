// let changeColor = document.getElementById('changeColor');
//
// // chrome.storage.sync.get('color', function(data) {
// // 	changeColor.style.backgroundColor = data.color;
// // 	changeColor.setAttribute('value', data.color);
// // });
//
// changeColor.onclick = function() {
//
// 	document.getElementById("yo").innerHTML = "YOU CLICKED ME!";
//
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		let msg = {
// 			txt: "hello"
// 		}
// 		console.log("am i here");
// 		chrome.tabs.sendMessage(tabs[0].id, msg);
// 	// 	chrome.tabs.executeScript(
// 	// 			tabs[0].id,
// 	// 			{code: 'document.body.style.backgroundColor = "' + color + '";'});
//  });
// };

let resetTime = document.getElementById('stopButton');

resetTime.onclick = function() {
	chrome.alarms.clear("foo", function() {
		//console.log()
		alert("alarm restarted!");
		document.getElementById("yo").innerHTML = "Alarm Stopped.";
	});
}

let submitTime = document.getElementById('textButton');

submitTime.onclick = function() {
	let written = document.getElementById("enterText").value;
	console.log("Entered Value is = " + written);
	document.getElementById("enterText").value = "";
	//document.getElementById("yo").innerHTML = "Timer will alert in " + written + " minutes.";


	if(isNaN(written)) {
		document.getElementById("yo").innerHTML = "Please enter a number.";
	}
	else{
		if(written == 1) {
			document.getElementById("yo").innerHTML = "Timer will alert in " + written + " minute.";
		}
		else{
			document.getElementById("yo").innerHTML = "Timer will alert in " + written + " minutes.";
		}

		var name = "foo";
		var alarmInfo = {
		'delayInMinutes': parseInt(written)
		};

		chrome.alarms.create(name, alarmInfo);
	}


	// console.log(JSON.stringify(alarmInfo))

// document.getElementById("pressMe").onclick = function() {myFunction()};
//
// function myFunction() {
//   document.getElementById("yo").innerHTML = "YOU CLICKED ME!";
}


// changeColor.onclick = function(element) {
// 	let color = element.target.value;
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		let msg = {
// 			txt: "hello"
// 		}
// 		chrome.tabs.sendMessage(tabs[0].id, msg);
// 	// 	chrome.tabs.executeScript(
// 	// 			tabs[0].id,
// 	// 			{code: 'document.body.style.backgroundColor = "' + color + '";'});
//  });
// };

// chrome.browserAction.onClicked.addListener(buttonClicked);
//
// function buttonClicked(tab) {
// 	let msg = {
// 		txt: "hello"
// 	}
// 	chrome.tabs.sendMessage(tab.id, msg);
// }
