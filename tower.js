var lc = require("./lc");
var random = require("./random");


module.exports = class Tower extends lc{
    constructor(x, y) {
        super(x,y)
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
                        grassArr.splice(u, 1)
                    }
                }
                this.sources++
            }
        }
    }
    
    spawn() {
        var empty = random(this.chooseCell(0))
        
        if (empty && this.sources >= 20 ) {
            var newX = empty[0]
            var newY = empty[1]

            var gol = new Golem(newX, newY)
            var xotak = new Xotaker(newX, newY)
            var xtt = new Xotakeraker(newX, newY)
            var arr = [gol, xotak,xtt]
            var mob = random(arr)
            if (mob == gol) {
                matrix[newY][newX] = 5
                golemArr.push(gol)
            }
            else if(mob= xotak){
                matrix[newY][newX] = 2
                xotakerArr.push(xotak)
            }
            
            this.sources -= 20
        }
    }
}