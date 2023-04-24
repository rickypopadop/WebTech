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
		console.log("he");
	}

	document.getElementById("continental").innerHTML = fullMENU
}

function homePage(){
	window.location.href = "index.html"
}
function sanitizedID(id) {
	if (!isNaN(id)){
		if (id >= 1 && id <= data["pancakes"].length){
			return id
		}
	}
	window.location.href = "index.html"
}

function searchId(id){

	for (i=0; i<data["pancakes"].length; i++){
		if (data["pancakes"][i]["id"] == id){
					
			return data["pancakes"][i]
		}
	}
	return null
}
function buildPage(p){
	page=``
	page+=`<div class="row">
				<div class="column">
					<div id="ingrediants">
						<h2>Ingreediants</h2>
						<p>`
	for(i=0; i<p["ingredients"].length-1; i++){
		page+=`${p["ingredients"][i]} <br>`
	}
	page+=`${p["ingredients"][p["ingredients"].length-1]} </p>`
	page+=`</div>
		</div>
		<div class="column">
		<img src="${p["img"]}" width=100%>
	</div>
	</div>
	<div class="row">
		<div class="column">
			<div id="instructions">
				<h2>Cooking instructions</h2>
				<p>
	`
	for(i=0; i<p["instructions"].length-1; i++){
		page+=`${p["instructions"][i]} <br>`
	}
	page+=`${p["instructions"][p["instructions"].length-1]} </p>
		</div>
		</div>
	</div>

`
document.getElementById("pancakePage").innerHTML = page
return null

}
