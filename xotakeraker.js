var lc = require("./lc");
var random = require("./random");


module.exports = class Xotakeraker extends lc{
    constructor(x, y) {
        super(x,y)
        this.energy = 20;
       
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
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character)

    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 40) {
          grassEaterEaterCount++;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var xxt = new Xotakeraker(newX, newY);
            xotakerakerArr.push(xxt);
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {

            this.energy++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in xotakerArr) {
                if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
                    xotakerArr.splice(i, 1)
                    
                }
            }
            this.x = x;
            this.y = y;

            if (this.energy >= 13) {
                this.mult();
            }
        }
        else {
            this.move()
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerakerArr) {
                if (xotakerakerArr[i].x == this.x && xotakerakerArr[i].y == this.y) {
                    xotakerakerArr.splice(i, 1)
                    
                }
            }
        }
    }
}