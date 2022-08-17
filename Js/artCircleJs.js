// //ve hinh tron
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.fill();
//
// //ve chu
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "80px Arial";
// ctx.fillText("Hello World",100,500);
// ctx.strokeText("Hello World",150,80);

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
//
// // Create gradient
// var grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");
//
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

class Circle {
    x;
    y;
    radius;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }

    getRandomColor() {
        var red = this.getRandomHex()
        var green = this.getRandomHex()
        var blue = this.getRandomHex()
        return "rgb(" + red + "," + blue + "," + green +")";
    }
}

function createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 400);
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new Circle(x, y, radius);
    var color = circle.getRandomColor();
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle(){
    for(var i = 0; i < 70; i++){
        createCircle();
    }
}

createMultipleCircle();