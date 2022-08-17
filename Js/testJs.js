// {
//     Singleton
//     let apple = new function () {
//         this.type = "macintosh";
//         this.color = "red";
//         this.getInfo = function () {
//             return this.color + ' ' + this.type + ' apple';
//         };
//     }
//     apple.color = "reddish";
//     alert(apple.getInfo());
//
//     object
//     literals
//     let apple = {
//         type: "macintosh",
//         color: "red",
//         getInfo: function () {
//             return this.color + ' ' + this.type + ' apple';
//         }
//     }
//     apple.color = "reddish";
//     alert(apple.getInfo());
//
//     Sử
//     dụng
//     hàm
//
//     function Apple(type) {
//         this.type = type;
//         this.color = "red";
//         this.getInfo = function () {
//             return this.color + ' ' + this.type + ' apple';
//         };
//     }
//
//     let apple = new Apple('macintosh');
//     apple.color = "reddish";
//     alert(apple.getInfo());
// }

// class Apple {
//     weight;
//     color;
//     constructor(weight,color) {
//         this.weight = weight;
//         this.color = color
//     }
//     getWeight(){
//         return this.weight
//     }
//     setWeight(weight){
//         this.weight = weight
//     }
//     showInfo(){
//         return "Can nang cua qua tao la : " + this.weight + " va co mau la : " + this.color
//     }
// }
// let obj = new Apple(40,'red')
// obj.getWeight()
// console.log(obj.showInfo())

// let Circle = function(radius) {
//     this.radius = radius;
//     this.getRadius = function() {
//         return radius;
//     }
//     this.getArea = function() {
//         return Math.PI * radius * radius;
//     }
//
// };
// let circle = new Circle(20);
// let radius = circle.getRadius(); // 2
//
// let area = circle.getArea(); // 12.566370614359172
// alert("radius: " + radius + "; area: " + area);

class Circle {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getArea(){
        return this.radius*this.radius*Math.PI;
    }
}
let abc = new Circle(20, "red")
console.log(abc.getArea())

class Date{
    day;
    month;
    year;
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {return this.day;}
    getMonth() {return this.month;}
    getYear() {return this.year;}
    setDay(day){this.day = day;}
    setMonth(month){this.month = month;}
    setYear(year){this.year = year;}
}
let abcd = new Date(15,8, 2022);
console.log(abcd)
console.log(abcd.getDay())
console.log(abcd.getMonth())
console.log(abcd.getYear())
abcd.setDay(25)
abcd.setMonth(1)
abcd.setYear(1993)
console.log(abcd)




