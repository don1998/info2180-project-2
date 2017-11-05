window.onload=myfunction;

var blankleft=300;
var blanktop=300;

function myfunction(){
	var divs=document.getElementById("puzzlearea").children;
	var t = 3; 
 	var j = 0;
 	var currstate=[];
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

