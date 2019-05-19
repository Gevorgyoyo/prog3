var lc = require("./lc");
var random = require("./random");


module.exports = class Golem extends lc{
    constructor(x, y) {
        super(x,y)
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
            [this.x + 2, this.y - 1],
            //---radius 3
            [this.x - 3, this.y + 3],
            [this.x - 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 3],
            //
            [this.x + 2, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x - 2, this.y + 3],
            //
            [this.x + 1, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x + 1, this.y - 3],
            [this.x - 1, this.y - 3],
            //
            [this.x, this.y + 3],
            [this.x, this.y - 3],
            //
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y - 2],
            [this.x + 3, this.y + 2],
            [this.x + 3, this.y - 2]

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
            [this.x + 2, this.y - 1],
            //---radius 3
            [this.x - 3, this.y + 3],
            [this.x - 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 3],
            //
            [this.x + 2, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x - 2, this.y + 3],
            //
            [this.x + 1, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x + 1, this.y - 3],
            [this.x - 1, this.y - 3],
            //
            [this.x, this.y + 3],
            [this.x, this.y - 3],
            //
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y - 2],
            [this.x + 3, this.y + 2],
            [this.x + 3, this.y - 2]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character)

    }

    eat() {
        var xotakerakereat = this.chooseCell(3)
        if (xotakerakereat) {
            for (var i in xotakerakereat) {
                var emptyX = xotakerakereat[i][0];
                var emptyY = xotakerakereat[i][1];
                matrix[emptyY][emptyX] = 0;
                for (var u in xotakerakerArr) {
                    if (xotakerakerArr[u].x == emptyX && xotakerakerArr[u].y == emptyY) {
                        xotakerakerArr.splice(u, 1)
                    }
                }

            }
        }
    }
}

