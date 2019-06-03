//changing black squares' colors - forEach excercise
const blackBoxes = document.querySelectorAll(".blackbox");

blackBoxes.forEach(function(blackBox){

	let color = function(){
	blackBox.style.backgroundColor = "purple";	
	};
	blackBox.addEventListener("click", color);
	blackBox.addEventListener("dblclick", function(){
	if(color = true){
		blackBox.style.backgroundColor = "black";	
	};
});

});


//reveal flexbox chessboard after clicking a header - loop excercise
const head2 = document.querySelector("h2.sol3");
head2.addEventListener("click", function(){         
	const div = document.createElement("div");
	div.setAttribute("class", "container");
	document.body.appendChild(div);
	

	for(let i=0; i<25; i++){
		document.querySelector("div");
		const innerDiv = document.createElement("div");
		innerDiv.setAttribute("class", "item");
		div.appendChild(innerDiv);
	}
});
