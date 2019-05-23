function setup() {
var socket=io();	
var side = 35;
var matrix=[]
//! Getting DOM objects (HTML elements)
let grassCount = document.getElementById('grassCount');
let grassEaterCount = document.getElementById('grassEaterCount');
//! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 
socket.on("data", drawCreatures);
	frameRate(5);
	function drawCreatures(data) {
        //! after getting data pass it to matrix variable
		matrix = data.matrix;
		season=data.season
		grassCount.innerText=data.grassCount
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var y = 0; y < matrix.length; y++) {
			for (var x = 0; x < matrix[y].length; x++) {
				if (matrix[y][x] == 1) {
					if(season=="summer"){fill("green");}
					else{fill("white")}
				}
				else if (matrix[y][x] == 2) {
					fill("yellow");
				}
				else if (matrix[y][x] == 3) {
					fill("red");
				}
				else if (matrix[y][x] == 4) {
					fill("magenta");
				}
				else if (matrix[y][x] == 5) {
					fill("gray");
				}
				else if (matrix[y][x] == 0) {
					fill("#acacac");
				}
				rect(x * side, y * side, side, side)
	
			}
		}
    }
}





	




