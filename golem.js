var LiveForm = require("./lc");
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
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

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

