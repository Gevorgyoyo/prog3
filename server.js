//! Setting global arrays  --  START
matrix = [];
grassArr = [];
xotakerArr = [];x
xotakerakerArr = [];
tower = [];
golemArr = [];
//! Setting global arrays  -- END



//! Creating MATRIX -- START
let random = require('./random');
function matrixGenerator(matrixSize, grass, grassEater, grassEaterEater, tower, golemArr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0 - 39
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < grassEaterEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < tower; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < golemArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(10, 5, 3,2,2,5);
//! Creating MATRIX -- END



//! Requiring modules  --  START
var Grass = require("./xot.js");
var GrassEater = require("./xotaker.js");
var GrassEaterEater = require("./xotakeraker.js");
var tower = require("./tower.js");
var golem = require("./golem.js");
//! Requiring modules  --  END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
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
}
creatingObjects();



function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (xotakerArr[0] !== undefined) {
        for (var i in xotakerArr) {
            xotakerArr[i].eat()
            xotakerArr[i].move()
            xotakerArr[i].mult()
            xotakerArr[i].die()
        }
    
    }
    if(xotakerakerArr[0]!==undefined){
        for (var i in xotakerakerArr) {
            xotakerakerArr[i].eat()
            xotakerakerArr[i].move()
            xotakerakerArr[i].mult()
            xotakerakerArr[i].die()
        }
    
    }
    if(tower[0]!==undefined){
        for (var i in tower) {
            tower[i].eat();
            tower[i].spawn();
        }
    
    }
    if(golemArr[0]!==undefined){
        for (var i in golemArr) {
            golemArr[i].eat();
        }
    
    }

    //! Object to send
    let sendData = {
        matrix: matrix
    }
    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}

setInterval(game, 1000)