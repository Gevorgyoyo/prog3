//!Connecting client to server
var socket = io();
//!Functions to send messages to server to clear(generate) matrix
function clearMatrix(){
	socket.emit("clearMatrix");
}
function generateMatrix(){
	socket.emit("generateMatrix");
}
//!P5 Setup function
function setup() {
	var side = 35;
	var matrix = [];
	//! Getting DOM objects (HTML elements)
	let grassCount = document.getElementById('grassCount');
	let grassEaterCount = document.getElementById('grassEaterCount');
	let grassEaterEaterCount = document.getElementById('grassEaterEaterCount');
	let towerCount = document.getElementById('towerCount');
	let golemCount = document.getElementById('golemCount');
	//! adding socket listener on "data" <-- name, after that fire 'drawCreaturesAndWriteNums' function 
	socket.on("data", drawCreaturesAndWriteNums);

	function drawCreaturesAndWriteNums(data) {
		//! after getting data pass it to matrix,season variables
		matrix = data.matrix;
		season = data.season
		//!writing character number in matrix since it has been generated in td tags
		grassCount.innerText = data.grassCounter
		grassEaterCount.innerText = data.grassEaterCounter
		grassEaterEaterCount.innerText = data.grassEaterEaterCounter
		towerCount.innerText = data.towerCounter
		golemCount.innerText = data.golemCounter
		//! Every time it creates new Canvas woth new matrix size
		createCanvas(matrix[0].length * side, matrix.length * side)
		//! clearing background by setting it to new grey color
		background('#acacac');
		//! Drawing and coloring RECTs---START
		for (var y = 0; y < matrix.length; y++) {
			for (var x = 0; x < matrix[y].length; x++) {
				if (matrix[y][x] == 1) {
					if (season == "summer") { fill("green"); }
					else { fill("white") }
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
	//! Drawing and coloring RECTs---END
	}
}










