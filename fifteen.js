//I implemented the multiple backgrounds extra feature.


window.onload=myfunction;

var blankleft=300;
var blanktop=300;

function myfunction(){
	var divs=document.getElementById("puzzlearea").children;
	var t = 3; 
 	var j = 0;
 	var currstate=[];



 	var para1=document.createElement('p');
 	para1.innerHTML="Backgrounds";
 	document.getElementById("overall").appendChild(para1);
 	var radioInput = document.createElement('input');
	radioInput.setAttribute('type', 'button');
	radioInput.setAttribute('id', 'zed');
	radioInput.setAttribute('value', 'Riven');
	document.getElementById("overall").appendChild(radioInput);
	


	var para2=document.createElement('p');
 	document.getElementById("overall").appendChild(para2);
 	var radioInput2 = document.createElement('input');
	radioInput2.setAttribute('type', 'button');
	radioInput2.setAttribute('id', 'corki');
	radioInput2.setAttribute('value', 'Yasuo');
	document.getElementById("overall").appendChild(radioInput2);


	var para3=document.createElement('p');
 	document.getElementById("overall").appendChild(para3);
 	var radioInput3 = document.createElement('input');
	radioInput3.setAttribute('type', 'button');
	radioInput3.setAttribute('id', 'jon');
	radioInput3.setAttribute('value', 'Jon');
	document.getElementById("overall").appendChild(radioInput3);

	var para4=document.createElement('p');
 	document.getElementById("overall").appendChild(para4);
 	var radioInput4 = document.createElement('input');
	radioInput4.setAttribute('type', 'button');
	radioInput4.setAttribute('id', 'tyrion');
	radioInput4.setAttribute('value', 'Tyrion');
	document.getElementById("overall").appendChild(radioInput4);


 	for (let i=0; i<divs.length;i++) { 
 		for (var a = 0; a <= t; a++) { 
 			divs[i].classList.add("puzzlepiece");
 			divs[i].style.left = 100 * a + "px";  
 			divs[i].style.top = 100 * j + "px"; 
 			divs[i].style.backgroundPosition = -a * 100 + "px " + j * -100 + "px";
 			divs[i].addEventListener("click", swap);
 			divs[i].addEventListener("mouseover", colorchange);
 			i++; 
 			} 
 		j++; 
 		if (j > 2) { 
 			t = 2; 
 			} 
 		i--; 
 	}

 	document.getElementById("zed").addEventListener("click",function(){
 			var t = 3; 
 			var j = 0;
 		for (let i=0; i<divs.length;i++){
 			for (var a = 0; a <= t; a++) { 
 			divs[i].classList.add("puzzlepiece");
 			divs[i].setAttribute('style',"background-image:url('Zed.jpg')");
 			divs[i].style.left = 100 * a + "px";  
 			divs[i].style.top = 100 * j + "px"; 
 			divs[i].style.backgroundPosition = -a * 100 + "px " + j * -100 + "px";
 			i++; 
 			} 
 		j++; 3
 		if (j > 2) { 
 			t = 2; 
 			} 
 		i--; 	
 			}

	});


	 	document.getElementById("corki").addEventListener("click",function(){
 			var t = 3; 
 			var j = 0;
 		for (let i=0; i<divs.length;i++){
 			for (var a = 0; a <= t; a++) { 
 			divs[i].classList.add("puzzlepiece");
 			divs[i].setAttribute('style',"background-image:url('Corki.jpeg')");
 			divs[i].style.left = 100 * a + "px";  
 			divs[i].style.top = 100 * j + "px"; 
 			divs[i].style.backgroundPosition = -a * 100 + "px " + j * -100 + "px";
 			i++; 
 			} 
 		j++; 3
 		if (j > 2) { 
 			t = 2; 
 			} 
 		i--; 	
 			}

	});


	 document.getElementById("jon").addEventListener("click",function(){
 			var t = 3; 
 			var j = 0;
 		for (let i=0; i<divs.length;i++){
 			for (var a = 0; a <= t; a++) { 
 			divs[i].classList.add("puzzlepiece");
 			divs[i].setAttribute('style',"background-image:url('Jon.jpg')");
 			divs[i].style.left = 100 * a + "px";  
 			divs[i].style.top = 100 * j + "px"; 
 			divs[i].style.backgroundPosition = -a * 100 + "px " + j * -100 + "px";
 			i++; 
 			} 
 		j++; 3
 		if (j > 2) { 
 			t = 2; 
 			} 
 		i--; 	
 			}

	});


	 	 document.getElementById("tyrion").addEventListener("click",function(){
 			var t = 3; 
 			var j = 0;
 		for (let i=0; i<divs.length;i++){
 			for (var a = 0; a <= t; a++) { 
 			divs[i].classList.add("puzzlepiece");
 			divs[i].setAttribute('style',"background-image:url('Tyrion.jpg')");
 			divs[i].style.left = 100 * a + "px";  
 			divs[i].style.top = 100 * j + "px"; 
 			divs[i].style.backgroundPosition = -a * 100 + "px " + j * -100 + "px";
 			i++; 
 			} 
 		j++; 3
 		if (j > 2) { 
 			t = 2; 
 			} 
 		i--; 	
 			}

	});


 	document.getElementById("shufflebutton").addEventListener("click",shuffle);
}

function winner(v){
}

function colorchange(event){
	if (ismoveable(this.style.left,this.style.top)){
		this.classList.add("movablepiece");
	}
	if ((ismoveable(this.style.left,this.style.top)===false)) {
		this.classList.remove("movablepiece");
	}
}

function swap(event){
	if (ismoveable(this.style.left,this.style.top)){
            var tempCol = this.style.left;
            var tempRow = this.style.top;
            this.style.top = blanktop + "px"; 
            this.style.left = blankleft + "px";
            blanktop = parseInt(tempRow);
            blankleft = parseInt(tempCol);
	}
}


function scrambleswap(tile){
	if (ismoveable(tile.style.left,tile.style.top)){
            var tempCol = tile.style.left;
            var tempRow = tile.style.top;
            tile.style.top = blanktop + "px"; 
            tile.style.left = blankleft + "px";
            blanktop = parseInt(tempRow);
            blankleft = parseInt(tempCol);
	}
}


function ismoveable(left,top){
		if (Math.abs(blankleft - parseInt(left))==100){
			if (Math.abs(blanktop - parseInt(top))==0){
			return true;
			}
		}
		else if (Math.abs(blanktop - parseInt(top))==100){
			if (Math.abs(blankleft - parseInt(left))==0){
			return true;
			}

		}		
		return false;

}

function shuffle(){
	let divs=document.getElementById("puzzlearea").children;
    let gameset= [];
    for (var a=0; a<300; a++){
        for (var i=0; i < divs.length; i++){
            if (ismoveable(divs[i].style.left, divs[i].style.top)){
                gameset.push(divs[i]);
            }
        }
        scrambleswap(gameset[(Math.floor(Math.random() * gameset.length))]);
        gameset = []; 
    }
 }

