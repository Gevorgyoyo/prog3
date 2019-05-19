var LiveForm = require("./lc");
var random = require("./random");


module.exports = class Grass extends lc{
    constructor(x, y) {
        super(x,y);
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 

    mult() {
        var newdir= random(this.chooseCell(0))
        this.multiply++
        if (newdir && this.multiply > 5) {
            var newX = newdir[0]
            var newY = newdir[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}


