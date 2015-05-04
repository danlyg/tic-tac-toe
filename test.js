// wait for the DOM to finish loading
window.addEventListener('load', function (event) {
  // all your code should go in here.

	function clearBoard(){
		for(var i = 0; i < boxarr.length; i++){
			boxarr[i].innerHTML = '&nbsp;'
		}
		whoseTurn.innerHTML = 'X goes first!'
	}

	function alternate(){

		if(current === 'X'){
			newCurrent = 'O';
			document.querySelector('#whoseTurn').innerHTML = 'O Go!';
			return newCurrent;
		} else {
			newCurrent = 'X';
			document.querySelector('#whoseTurn').innerHTML = 'X Go!';
			return newCurrent;
		}
	}

	function checkWinner(){
		//if 012 || 345 || 678...
		var winningcombs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		

		// console.log('entering loop for checkwinner')
		for (var i = 0; i <winningcombs.length; i++) {
			
			// console.log('inside loop checking for a winner')
			var a = boxarr[winningcombs[i][0]].innerHTML;
			var b = boxarr[winningcombs[i][1]].innerHTML;
			var c = boxarr[winningcombs[i][2]].innerHTML;

			// console.log('checking if A === B ', a === b)
			// console.log('checking if B === C ', b === c)
			// console.log('value of b', b.trim(), 'type of b', typeof(b), b.length)
			// console.log('checking if b!==&nbsp;', b !=='&nbsp;')


			if ((a===b) && (b===c) && (b !== '&nbsp;')){
				// console.log('found a winner')
				return true;
			}
			// console.log('no winner yet checking next possible combination')
		};
		// console.log('no winner found')
		return false;
	}




	function isBoardFull(){
		console.log(boxarr.length)
		for (var i = 0; i < boxarr.length; i++) {
			if (boxarr[i].innerHTML === '&nbsp;'){
				return false;
			}
		}
		return true;
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


	for (var i = 0; i < boxarr.length; i++) {

		boxarr[i].addEventListener('click', function(event){
			var isEmpty = (this.innerHTML === '&nbsp;');

			if (isEmpty){
				this.innerHTML = current;
				current = alternate(current);			

				winner = checkWinner();
				isFull = isBoardFull();
				if(winner){
					current = alternate(current);
					alert(current +' wins!');
				} else if(isFull){
					alert('Tie Game');
				}
			}

		});
		
	};

	var reset = document.querySelector('#reset')
	reset.addEventListener('click', function(event){
		clearBoard();
	})




});
