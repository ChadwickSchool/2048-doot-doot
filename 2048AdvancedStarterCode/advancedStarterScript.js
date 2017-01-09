
//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [];
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var x = " ";
var score = 0;



//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innergrid = [];
		for(var j=0; j<4; j++){
			innergrid.push(" ");
		}
		board.push(innergrid);
	}

	addTile();

}


function addTile() {
	//place a 2 on a random spot in the board
	var xx = Math.round(Math.random()*3);
	var y = Math.round(Math.random()*3);
	if (board[xx][y] < 2 || board[xx][y] == " "){
		board[xx][y] = 2;
	}
	else{
		addTile();
	}
}




function printBoard(){
	for(var i=0; i<4; i++){
		for(var j=0; j<4; j++){
			var boardID = "r"+i+"c"+j;
			if (board[i][j] != x){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else{
				document.getElementById(boardID).innerHTML = "";
			}

			//if the tile is not zero, put it on the board
				document.getElementById(boardID).innerHTML = board[i][j];
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 2:
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
				default:
					document.getElementById(boardID).style.background = "rgba(238, 228, 218, 0.35)";
					break;
					//similar to the else statement. If none of the other cases execute, this statement will execute
			}
		}
	}
}


//show students an ascii conversion tool.
document.onkeydown = function(e){

	 e = e || window.event;
	    if (e.keyCode == UP_ARROW) {
        // up arrow

        combineTilesUp();
        moveTilesUp();
        addTile();

    }
    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        combineTilesDown();
        moveTilesDown();
        addTile();
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       combineTilesLeft();
       moveTilesLeft();
       addTile();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       combineTilesRight();
       moveTilesRight();
       addTile();
    }

    printBoard(); //have to recall print board to get the board to update
};

function combineTilesUp(){
	for(var r = 0; r < board.length; r++)
    {
        for(var c = 0; c < board[r].length; c++)
        {
            if(r !== 0  && board[r][c] !== " " && board[r-1][c] === board[r][c])
            {

								board[r][c] = board[r][c]*2;
                board[r-1][c] = " ";
                score += 1;
                console.log(score);
            }

        }



	}
}

function combineTilesDown(){
 for(var r = board.length-1; r >= 0; r--)
    {
        for(var c = 0; c < board[r].length; c++)
        {
            if(r !== board.length-1  && board[r][c] !== " " && board[r+1][c] === board[r][c])
            {

                board[r][c] = board[r][c]*2;
                board[r+1][c] = " ";
                score += 1;
                console.log(score);

            }


        }

    }

}

function combineTilesLeft()
{

    for(var r = 0; r < board.length; r++)
    {
        for(var c = 0; c < board[r].length; c++)
        {

            if(c !== 0  && board[r][c] !== " " && board[r][c-1] === board[r][c])
            {

                board[r][c] = board[r][c]*2;
                board[r][c-1] = " ";
                score += 1;
                console.log(score);

            }

        }

    }

}

function combineTilesRight()
{

    for(var r = 0; r < board.length; r++)
    {
        for(var c = board.length-1; c >= 0; c--)
        {
            if(c !== board[r].length-1  && board[r][c] !== " " && board[r][c+1] === board[r][c])
            {
                board[r][c] = board[r][c]*2;
                board[r][c+1] = " ";
                score += 1;
                console.log(score);


            }


        }

    }

}




function moveTilesUp()
{

    for(var r = 0; r < board.length; r++)
    {
        for(var c = 0; c < board[r].length; c++)
        {
            if(r !== 0  && board[r][c] !== " " && board[r-1][c] === " ")
            {
								board[r-1][c] = board[r][c];
                board[r][c] = " ";
            }

        }

    }

}
function moveTilesDown()
{

    for(var r = board.length-1; r >= 0; r--)
    {
        for(var c = 0; c < board[r].length; c++)
        {
            if(r !== board.length-1  && board[r][c] !== " " && board[r+1][c] === " ")
            {

                board[r+1][c] = board[r][c];
                board[r][c] = " ";
            }

        }

    }

}

function moveTilesLeft()
{

    for(var r = 0; r < board.length; r++)
    {
        for(var c = 0; c < board[r].length; c++)
        {
            if(c !== 0  && board[r][c] !== " " && board[r][c-1] === " ")
            {

                board[r][c-1] = board[r][c];
                board[r][c] = " ";
            }

        }

    }

}


function moveTilesRight()
{

    for(var r = 0; r < board.length; r++)
    {
        for(var c = board.length-1; c >= 0; c--)
        {
            if(c !== board[r].length-1  && board[r][c] !== " " && board[r][c+1] === " ")
            {
                board[r][c+1] = board[r][c];
                board[r][c] = " ";

            }

        }

    }

}
