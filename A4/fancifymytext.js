function bigger() {
	document.getElementById("text").style.fontSize = "24pt";
	console.log("Hello, world!");
	alert("Hello, world!");
}

function fancySchmancy() {
	console.log("fancy schmancy");
	if (document.getElementById("fancyschmancy").checked == true) {
		document.getElementById("text").style.fontWeight = "bold";
		document.getElementById("text").style.color = "#4181FF";
		document.getElementById("text").style.textDecoration = "underline";
	}
}

function boringBetty() {
	console.log("boring betty");
	if (document.getElementById("boringbetty").checked == true) {
		document.getElementById("text").style.fontSize = "11pt";
		document.getElementById("text").style.fontWeight = "normal";
		document.getElementById("text").style.color = "#000000";
		document.getElementById("text").style.textDecoration = "none";
		document.getElementById("text").style.textTransform = "none";
	}
}

function moo() {
	console.log("Moo!");
	document.getElementById("text").style.textTransform = "uppercase";
	let str = document.getElementById("text").value.split(".");
	document.getElementById("text").value = str.join("-Moo");
}