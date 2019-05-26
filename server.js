//! Setting global arrays  --  START
//!Season counter
seasontime = 0
//! Main Arrays
grassArr = [];
xotakerArr = [];
xotakerakerArr = [];
tower = [];
golemArr = [];
matrix = []
//!statistics Arrays
grassCount = 0
grassEaterCount = 0
grassEaterEaterCount = 0
towerCount = 0
golemCount = 0

//! Setting global arrays  -- END



// //! Creating MATRIX -- START
let random = require('./random');
function matrixGenerator(matrixSize, grass, grassEater, grassEaterEater, tower, golemArr) {
    for (let i = 0; i <=matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o <= matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i <= grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i <= grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i <= grassEaterEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i <= tower; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i <= golemArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(20, 100, 90, 90, 30, 20);
//! Creating MATRIX -- END



//! Requiring modules  --  START
var Grass = require("./xot.js");
var Xotaker = require("./xotaker.js");
var Xotakeraker = require("./xotakeraker.js");
var Tower = require("./tower.js");
var Golem = require("./golem.js");
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
server.listen(3002);
//! SERVER STUFF END  --  END


//!creating objects by indexes in matrix and counting them
function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
                grassCount++

            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
                grassEaterCount++
            }
            else if (matrix[y][x] == 3) {
                xotakerakerArr.push(new Xotakeraker(x, y));
                grassEaterEaterCount++
            }
            else if (matrix[y][x] == 4) {
                tower.push(new Tower(x, y));
                towerCount++
            }
            else if (matrix[y][x] == 5) {
                golemArr.push(new Golem(x, y));
                golemCount++
            }
        }
    }
}
creatingObjects();


//!Game function
function game() {

    //! Object to send
    sendData = {
        matrix: matrix,
        season: "winter",
        grassCounter: grassCount,
        grassEaterCounter: grassEaterCount,
        grassEaterEaterCounter: grassEaterEaterCount,
        towerCounter: towerCount,
        golemCounter: golemCount
    }


    //!Season---START
    seasontime++
    if (seasontime <= 10) {
        sendData.season = "summer"
    }
    else if (seasontime <= 20) {
        sendData.season = "winter"
    }
    else {
        seasontime = 0
    }
    //!Season---END


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mult();
        }
    }
    if (xotakerArr[0] !== undefined) {
        for (var i in xotakerArr) {
            xotakerArr[i].eat()
        }

    }
    if (xotakerakerArr[0] !== undefined) {
        for (var i in xotakerakerArr) {
            xotakerakerArr[i].eat()
        }

    }
    if (tower[0] !== undefined) {
        for (var i in tower) {
            tower[i].live();
        }

    }
    if (golemArr[0] !== undefined) {
        for (var i in golemArr) {
            golemArr[i].live();
        }
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
    //!listen "clear"command and clear matrix


}
setInterval(game, 100)
function clearMatrix() {
    seasontime = 0
    matrix = [];
    grassArr = [];
    xotakerArr = [];
    xotakerakerArr = [];
    tower = [];
    golemArr = [];
    grassCount = 0
    grassEaterCount = 0
    grassEaterEaterCount = 0
    towerCount = 0
    golemCount = 0
    matrixGenerator(20, 0, 0, 0, 0, 0)
}
io.on('connection', function (socket) {
    socket.on("clearMatrix", clearMatrix);
});
io.on('connection', function (socket) {
    socket.on("generateMatrix", function () {
        grassArr = [];
        xotakerArr = [];
        xotakerakerArr = [];
        tower = [];
        golemArr = [];
        matrixGenerator(20, 100, 90, 90, 30, 20);
        creatingObjects();

    })
});

