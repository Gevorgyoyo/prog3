var lc = require("./lc");
var random = require("./random");
var Golem = require("./golem")
var Xotaker = require("./xotaker")
var Xotakeraker = require("./xotakeraker")

module.exports = class Tower extends lc {
    constructor(x, y) {
        super(x, y)
        this.sources = 15;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            //-----radius 2
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            //--radus 2
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1]
        ]
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character)

    }

    eat() {
        var grasseat = this.chooseCell(1)
        if (grasseat && this.sources < 22) {
            for (var i in grasseat) {
                var emptyX = grasseat[i][0];
                var emptyY = grasseat[i][1];
                matrix[emptyY][emptyX] = 0;
                for (var u in grassArr) {
                    if (grassArr[u].x == emptyX && grassArr[u].y == emptyY) {
                        grassArr.splice(u, 1);
                        
                        this.sources++
                    }
                }
            }
        }
    }

    spawn() {
        var empty = random(this.chooseCell(0))
        if (empty && this.sources >= 20) {
            var newX = empty[0]
            var newY = empty[1]
            var arr = [1, 2, 3]
            var mob = random(arr)
            if (mob == 1) {
                var gol = new Golem(newX, newY)
                matrix[newY][newX] = 5
                golemArr.push(gol)
                golemCount++             
            }
            else if (mob = 2) {
                var xotak = new Xotaker(newX, newY)
                matrix[newY][newX] = 2
                xotakerArr.push(xotak)
               grassEaterCount++
            }
            else{
                var xtt = new Xotakeraker(newX, newY)
                matrix[newY][newX] = 3
                xotakerakerArr.push(xtt)
                grassEaterEaterCount++
            }
            this.sources -= 20
        }
    }
    destroy() {
        if (sendData.season == "winter" && this.sources < 125) {
            var chance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            var yourchance = random(chance)
            if (yourchance == 1) {
                matrix[this.y][this.x] = 0;
                
                for (let i in tower) {
                    if (tower[i].x == this.x && tower[i].y == this.y) {
                        tower.splice(i, 1)
                    }
                }
            }
        }
    }
    live() {
        this.eat()
        this.spawn()
        this.destroy()
    }
}