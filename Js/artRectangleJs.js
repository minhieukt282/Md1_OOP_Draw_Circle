class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    getArena() {
        return this.width * this.height;
    }

    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }

    getRandomColor() {
        var red = this.getRandomHex()
        var green = this.getRandomHex()
        var blue = this.getRandomHex()
        return "rgb(" + red + "," + blue + "," + green + ")";
    }
}

function creatRectangle() {
    var creRectangle = document.getElementById("myCanvas").getContext("2d");
    var x = Math.random() * 500;
    var y = Math.random() * 500;
    var rectangle = new Rectangle(x, y);

    var firstPointX = Math.random() * 300;
    var firstPointY = Math.random() * 300;
    console.log(x, y, firstPointY, firstPointX);
    creRectangle.moveTo(firstPointX, firstPointY);
    creRectangle.lineTo(x, firstPointY);
    creRectangle.lineTo(x, y);
    creRectangle.lineTo(firstPointX, y);
    creRectangle.lineTo(firstPointX, firstPointY);
    creRectangle.fillStyle = rectangle.getRandomColor();
    creRectangle.fill();
}

function createMultipleRectangle() {
    for (var i = 0; i < 5; i++) {
        creatRectangle();
    }
}

createMultipleRectangle()