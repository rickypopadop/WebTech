function savORsweet(choice){
	for (i=0; i<data["pancakes"].length; i++){
		document.getElementById(data["pancakes"][i]["id"]).classList.remove("genericalHidden")
		if(data["pancakes"][i]["sweet"] != choice){
			document.getElementById(data["pancakes"][i]["id"]).classList.add("genericalHidden")
		}
	}
}

function resetHidden(choice){
	for (i=0; i<data["pancakes"].length; i++){
		document.getElementById(data["pancakes"][i]["id"]).classList.remove("genericalHidden")
	}
}
			

function onePancake(p){
	return `<div class="box" id="${p["id"]}">
				<img src="${p["img"]}">
				<div class="inPic"><h3>${p["name"]}</h3></div>
				<a class="link" href="pancake.html#${p["id"]}"></a>
			</div>`
}

function buildPancake(){
	fullMENU = ``
	for (i=0; i<data["pancakes"].length; i++){
		fullMENU+=onePancake(data["pancakes"][i])
	}

	document.getElementById("continental").innerHTML = fullMENU
}