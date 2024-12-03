function getFigureInfo(figure) {
    if (figure.type === 'triangle') {
        var triangleArea = (figure.base * figure.height) / 2;
        return "Triangle with base ".concat(figure.base, " and height ").concat(figure.height, " has an area of ").concat(triangleArea);
    }
    else if (figure.type === 'rectangle') {
        var rectangleArea = figure.width * figure.height;
        return "Rectangle with width ".concat(figure.width, " and height ").concat(figure.height, " has an area of ").concat(rectangleArea);
    }
    else if (figure.type === 'circle') {
        var circleArea = Math.PI * Math.pow(figure.radius, 2);
        return "Circle with radius ".concat(figure.radius, " has an area of ").concat(circleArea.toFixed(2));
    }
    return 'Ivalid figure';
}
var triangle = { type: "triangle", base: 5, height: 10 };
var rectangle = { type: "rectangle", width: 8, height: 14 };
var circle = { type: "circle", radius: 8 };
console.log(getFigureInfo(triangle));
// Output: " Triangle with base 5 and height 10 has an area of 25"
console.log(getFigureInfo(rectangle));
// Output: " Rectangle with width 8 and height 14 has an area of 112"
console.log(getFigureInfo(circle));
// Output: " Circle with radius 8 has an area of 201.06"
