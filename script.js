/*var matrix = [ 
	[0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,2,1,1],
	[0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1],
	[1,0,2,1,0,1,0,3,3,3,0,0,0,1,1,0,0,0,2,1],
	[2,0,0,1,1,1,1,3,3,3,1,0,1,1,1,0,0,0,1,1],
	[1,1,0,0,2,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1],
	[1,0,2,0,0,0,1,1,1,1,1,1,1,1,0,1,3,3,2,1],
	[2,0,0,0,2,0,0,1,1,1,1,1,1,1,1,1,3,3,1,1],
	[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,3,3,3,1],
	[1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1],
	[1,1,3,3,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1],
	[0,0,0,3,1,1,1,1,1,1,1,1,3,1,1,1,1,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,3,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,4,1,1,1,3,3,0,2,1,1,1,1,1,2],
	[1,1,1,1,1,1,1,1,1,1,3,1,0,1,3,3,1,1,3,3],
	[1,1,1,1,1,1,1,1,1,1,1,1,0,2,3,2,1,1,2,3],
	[1,0,1,1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1],
	[3,0,1,1,0,2,1,2,0,0,0,1,0,1,2,1,3,3,1,2],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,3,3,3,3,1],
	[3,2,3,1,1,1,2,1,0,0,0,1,0,1,2,3,1,1,3,2]
]*/

var matrix = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]



var side = 35;
var grassArr = [];
var xotakerArr = [];
var xotakerakerArr = [];
var tower = [];
var golemArr = [];

for (var i = 0; i < 120; i++) {
	var x = Math.floor(Math.random() * 20);
	var y = Math.floor(Math.random() * 20);
	matrix[y][x] = 1;
	
}


for(var i=0;i<60;i++){
	var x=Math.floor(Math.random() * 20);
	var y=Math.floor(Math.random() * 20);
	matrix[y][x]=2
}

for(var i=0;i<60;i++){
	var x=Math.floor(Math.random() * 20);
	var y=Math.floor(Math.random() * 20);
	matrix[y][x]=3
}

for(var i=0;i<=1;i++){
	var x=Math.floor(Math.random() * 20);
	var y=Math.floor(Math.random() * 20);
	matrix[y][x]=4
}

function setup() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y)
				grassArr.push(gr)
			}
			else if (matrix[y][x] == 2) {
				var xt = new Xotaker(x, y)
				xotakerArr.push(xt)
			}

			else if (matrix[y][x] == 3) {
				var xtt = new Xotakeraker(x, y)
				xotakerakerArr.push(xtt)
			}

			else if (matrix[y][x] == 4) {
				var t = new Tower(x, y)
				tower.push(t)
			}

			else if (matrix[y][x] == 5) {
				var g = new Golem(x, y)
				golemArr.push(g)
			}
		}
	}

	frameRate(5);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
}




function draw() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {

				fill("green");

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

			fill("white")
			text(x + " " + y, x * side + side / 2, y * side + side / 2)


		}
	}


	for (var i in grassArr) {
		grassArr[i].mult()
	}

	for (var i in xotakerArr) {
		xotakerArr[i].eat()
		xotakerArr[i].move()
		xotakerArr[i].mult()
		xotakerArr[i].die()
	}



	for (var i in xotakerakerArr) {
		xotakerakerArr[i].eat()
		xotakerakerArr[i].move()
		xotakerakerArr[i].mult()
		xotakerakerArr[i].die()
	}

	for (var i in tower) {
		tower[i].eat();
		tower[i].spawn();
	}

	for (var i in golemArr) {
		golemArr[i].eat();
	}


}