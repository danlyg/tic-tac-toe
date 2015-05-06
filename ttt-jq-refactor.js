//window.addEventListener('load', function (event) {

$(window).on('load', function(event){


	// function clearBoard(){
	// 	for(var i = 0; i < boxarr.length; i++){
	// 		boxarr[i].innerHTML = '&nbsp;'
	// 		boxarr[i].className = 'box'
	// 	}
	// 	whoseTurn.innerHTML = 'X goes first!'

	// }

	// // using 'this'
	// function clearBoard(){
	// 	$('.box').each(function(element){
	// 		$(this).html('&nbsp;');
	// 		$(this).removeClass();
	// 		$(this).addClass('box');
	// 	})
	// 	$('#whoseTurn').html('X goes first!')
	// }


	// // avoided using 'this'
	function clearBoard(){
		$('.box').each(function(index, elementAtIndex){
			$(elementAtIndex).html('&nbsp;');
			$(elementAtIndex).removeClass();
			$(elementAtIndex).addClass('box');
		})
		$('#whoseTurn').html('X goes first!')
	}





	// function alternate(current, element){

	// 	if(current === 'X'){

	// 		newCurrent = 'O';
	// 		document.querySelector('#whoseTurn').innerHTML = 'O Go!';
	// 		var classEle = element.className += ' X'
	// 		return newCurrent;

	// 	} else {

	// 		newCurrent = 'X';
	// 		document.querySelector('#whoseTurn').innerHTML = 'X Go!';
	// 		var classEle = element.className += ' O'
	// 		return newCurrent;

	// 	}
	// }


	function alternate(current, element){
		if(current === 'X'){
			newCurrent = 'O';
			$('#whoseTurn').html('O Go!');
			$(element).addClass('X');
			return newCurrent;

		} else {
			newCurrent = 'X';
			$('#whoseTurn').html('X Go!');
			$(element).addClass('O');
			return newCurrent;
		}
	}



	// function checkWinner(){
	// 	var winningcombs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		

	// 	for (var i = 0; i <winningcombs.length; i++) {
			
	// 		var a = boxarr[winningcombs[i][0]].innerHTML;
	// 		var b = boxarr[winningcombs[i][1]].innerHTML;
	// 		var c = boxarr[winningcombs[i][2]].innerHTML;

	// 		if ((a===b) && (b===c) && (b !== '&nbsp;')){
	// 			return true;
	// 		}
	// 	};
	// 	return false;
	// }


	function checkWinner(){
		var winningcombs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		$(winningcombs).each(function(index, element){
		
			var a = $(boxarr)[$(this)[index][0]].html;
			var b = $(boxarr)[$(this)[index][1]].html;
			var c = $(boxarr)[$(this)[index][2]].html;

			if ((a===b) && (b===c) && (b !== '&nbsp;')){
				return true;
			}
		})
		return false;
	}






	// function isBoardFull(){
	// 	for (var i = 0; i < boxarr.length; i++) {
	// 		if (boxarr[i].innerHTML === '&nbsp;'){
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }

	function isBoardFull(){
		$('.box').each(function(element){
			if ($(this).html === '&nbsp;'){
				return false;
			}
		})
		return true;
	}








	// var boxarr = [document.querySelector('#box1'),
	// document.querySelector('#box2'),
	// document.querySelector('#box3'),
	// document.querySelector('#box4'),
	// document.querySelector('#box5'),
	// document.querySelector('#box6'),
	// document.querySelector('#box7'),
	// document.querySelector('#box8'),
	// document.querySelector('#box9')]


	var boxarr = new Array();
	$('.box').each(function (i){
 		boxarr.push($(this))
 	});





	var current = 'X'






	// for (var i = 0; i < boxarr.length; i++) {

	// 	boxarr[i].addEventListener('click', function(event){
	// 		var isEmpty = (this.innerHTML === '&nbsp;');

	// 		if (isEmpty){
	// 			this.innerHTML = current;
	// 			current = alternate(current, this);			

	// 			winner = checkWinner();
	// 			isFull = isBoardFull();
	// 			if(winner){
	// 				current === 'X' ? 'O' : 'X';
	// 				alert((current === 'X' ? 'O' : 'X') +' wins!');

	// 				//add break out of the eventlistener so no more moves can be taken until the game is reset

	// 			} else if(isFull){
	// 				alert('Tie Game');
	// 			}
	// 		}
	// 	});
	// };




	//NOT WORKING......
	$(boxarr).each(function (i){
		$(this).on('click', function(event){
			var isEmpty = ($(this).html === '&nbsp;');

			if (isEmpty){
				$(this).html = current;
				current = alternate(current, this);			

				winner = checkWinner();
				isFull = isBoardFull();
				if(winner){
					current === 'X' ? 'O' : 'X';
					alert((current === 'X' ? 'O' : 'X') +' wins!');
	

					//add break out of the eventlistener so no more moves can be taken until the game is reset
					//NOT WORKING

					// $(boxarr).each(function (i){
					// 	$(this).off('click');
					// })



				} else if(isFull){
					alert('Tie Game');
				}
			}
		});
	};





	// var reset = document.querySelector('#reset')
	// reset.addEventListener('click', function(event){
	// 	clearBoard();
	// })


	$('#reset').on('click', function(event){
		clearBoard();
	})



});
//});
