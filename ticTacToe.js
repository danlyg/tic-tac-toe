// wait for the DOM to finish loading
window.addEventListener('load', function (event) {
  // all your code should go in here.

function clearBoard(){
	//clears the board
}

function alternate(){
	if(current === 'X'){
		newCurrent = 'O';
		return newCurrent;
	} else {
		newCurrent = 'X';
		return newCurrent;
	}
}

function checkwinner(){
	//if 012 || 345 || 678...
	var winningcombs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	for (var i = winningcombs.length - 1; i >= 0; i--) {
		if (boxarr[winningcombs[i][0]] = boxarr[winningcombs[i][1]] = boxarr[winningcombs[i][2]]){
			return true;
		} else{
			return false;
		}
	};
}

var boxarr = [document.querySelector('#box1'),
document.querySelector('#box2'),
document.querySelector('#box3'),
document.querySelector('#box4'),
document.querySelector('#box5'),
document.querySelector('#box6'),
document.querySelector('#box7'),
document.querySelector('#box8'),
document.querySelector('#box9')]


var current = 'X'

var spaceoccupied = [false, false, false, false, false, false, false, false, false]




for (var i = 0; i < 9; i++) {
	if (spaceoccupied[i] === false){ //notworking

		boxarr[i].addEventListener('click', function(event){
			this.innerHTML = current;
			current = alternate(current);
			spaceoccupied[i] = true; //notupdating?


			winner = checkforwinner();
				if(winner){
					alert(current +'loses');
				}

		});
	}
};




});
