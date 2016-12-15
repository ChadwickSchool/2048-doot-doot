var grid = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var x = "x";

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
			innergrid.push(x);
		}
		grid.push(innergrid);
	}

	addTile();

}

function getX(){
	return x.value();
}

function addTile() {
	//place a 2 on a random spot in the board
	var x = Math.round(Math.random()*3);
	var y = Math.round(Math.random()*3);
	if (grid[x][y] % 2 != 0){
	grid[x][y] = "2";
}
	else{
	addTile();
}


}


function printBoard(){
	var board = '<br/>' + "*--------------*" + '<br/>';
	for(var i=0; i<grid.length; i++){
		board += "|   ";
		for(var j=0; j<grid[i].length; j++){
			board += grid[i][j] + "   |   ";
		}
		board += '<br/>';
		board += "*--------------*";
		board += '<br/>';
	}

	//console.log(board);
	document.getElementById("container").innerHTML = board;
}


//function gets called anytime  a key is pressed
//e is a special variable
// that references the event obeject that reads if the user is interacting with
//the window


document.onkeydown = function(e) {

    //makes it work in internet explorer which uses window.event and not e
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign
    if (e.keyCode == UP_ARROW) {
        // up arrow
        moveTilesUp();
        combineTilesUp();
        addTile();

    }
    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        moveTilesDown();
        combineTilesDown();
        addTile();
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       moveTilesLeft();
       combineTilesLeft();
       addTile();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       moveTilesRight();
       combineTilesRight();
       addTile();
    }

    printBoard(); //have to recall print board to get the board to update
};

function combineTilesUp(){
	for(var r = 0; r < grid.length; r++)
    {
        for(var c = 0; c < grid[r].length; c++)
        {

            if(r !== 0  && grid[r][c] !== x && grid[r-1][c] === grid[r][c])
            {
							grid[r-1][c] = grid[r][c]*2;
              grid[r][c] = x;
            }
        }
		}
}

function combineTilesDown(){
 for(var r = grid.length-1; r >= 0; r--)
    {
        for(var c = 0; c < grid[r].length; c++)
        {
            if(r !== grid.length-1  && grid[r][c] !== x && grid[r+1][c] === grid[r][c])
            {

                grid[r+1][c] = grid[r][c]*2;
                grid[r][c] = x;
            }

        }

    }

}

function combineTilesLeft()
{

    for(var r = 0; r < grid.length; r++)
    {
        for(var c = 0; c < grid[r].length; c++)
        {
            if(c !== 0  && grid[r][c] !== x && grid[r][c-1] === grid[r][c])
            {

                grid[r][c-1] = grid[r][c]*2;
                grid[r][c] = x;
            }

        }

    }

}

function combineTilesRight()
{

    for(var r = 0; r < grid.length; r++)
    {
        for(var c = grid.length-1; c >= 0; c--)
        {
            if(c !== grid[r].length-1  && grid[r][c] !== x && grid[r][c+1] === grid[r][c])
            {
                grid[r][c+1] = grid[r][c]*2;
                grid[r][c] = x;

            }

        }

    }

}




function moveTilesUp()
{

    for(var r = 0; r < grid.length; r++)
    {
        for(var c = 0; c < grid[r].length; c++)
        {
            if(r !== 0  && grid[r][c] !== x && grid[r-1][c] === x)
            {
				grid[r-1][c] = grid[r][c];
                grid[r][c] = x;
            }

        }

    }

}
function moveTilesDown()
{

    for(var r = grid.length-1; r >= 0; r--)
    {
        for(var c = 0; c < grid[r].length; c++)
        {
            if(r !== grid.length-1  && grid[r][c] !== x && grid[r+1][c] === x)
            {

                grid[r+1][c] = grid[r][c];
                grid[r][c] = x;
            }

        }

    }

}

function moveTilesLeft()
{

    for(var r = 0; r < grid.length; r++)
    {
        for(var c = 0; c < grid[r].length; c++)
        {
            if(c !== 0  && grid[r][c] !== x && grid[r][c-1] === x)
            {

                grid[r][c-1] = grid[r][c];
                grid[r][c] = x;
            }

        }

    }

}


function moveTilesRight()
{

    for(var r = 0; r < grid.length; r++)
    {
        for(var c = grid.length-1; c >= 0; c--)
        {
            if(c !== grid[r].length-1  && grid[r][c] !== x && grid[r][c+1] === x)
            {
                grid[r][c+1] = grid[r][c];
                grid[r][c] = x;

            }

        }

    }

}
