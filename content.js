console.log('content running');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log("how about here?")
	console.log(message.txt);
	console.log("1");
	if(message.txt === "hello") {
		let p = document.getElementsByTagName('p');
		for(elt of p) {
			elt.style['background-color'] = '#FF00FF';
		}
	}
}
