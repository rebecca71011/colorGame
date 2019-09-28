var squares= document.querySelectorAll(".square");
var colorDisplay= document.querySelector("#colorDisplay");
var message= document.querySelector("#message");
var retry= document.querySelector("#retry");
var h1= document.querySelector("h1");
var selected=document.querySelector(".selected");
var easyBtn= document.querySelector("#easy");
var hardBtn= document.querySelector("#hard");
var colorsArray=[];
var level=6;

getRandomColor(6);
var pickedColor= pickedColor1();

for(var i=0; i<squares.length; i++) {
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor!==pickedColor){
			console.log(pickedColor, clickedColor);
			this.style.backgroundColor= "#232323";
			message.textContent="Try Again!";
		}
		if(clickedColor===pickedColor){	
			console.log(pickedColor, clickedColor);
			message.textContent="Correct!!";
			changeColor(pickedColor);
			retry.textContent= "PLAY AGAIN?";
		}
	});	
}

retry.addEventListener("click", function retryButton(){
	getRandomColor(level);
	pickedColor= pickedColor1();
	retry.textContent="new colors";
	message.textContent="";
	h1.style.backgroundColor="steelblue";	
});

easyBtn.addEventListener("click", function(){
	level=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	getRandomColor(3);
	pickedColor=pickedColor1();
	message.textContent="";
	h1.style.backgroundColor="steelblue";
	console.log(colorsArray);
	for(var i=0; i<squares.length; i++){
		if(!colorsArray[i]){
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	level=6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	getRandomColor(6);
	pickedColor=pickedColor1();
	message.textContent="";
	h1.style.backgroundColor="steelblue";
	for(var i=0; i<squares.length; i++){		
			squares[i].style.display="block";		
	}
});

//changes colors of background if correct
function changeColor(pickedColor){ 
	h1.style.backgroundColor=pickedColor;
	for(var i=0; i<colorsArray.length; i++){
		squares[i].style.background=pickedColor;
	}
}

function randomNo(){
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);
	return "rgb("+r+", "+g+", "+b+")";
}

function getRandomColor(level){
	colorsArray=[];
	for(var i=0; i<level; i++) {
		squares[i].style.backgroundColor= randomNo();	
		colorsArray.push(squares[i].style.backgroundColor);		
	}
}

function pickedColor1(){
	var picked=colorsArray[Math.floor(Math.random()*colorsArray.length)];
	colorDisplay.textContent= picked;
	return picked;
}

//ertyuiolkjhgfdcvhjk