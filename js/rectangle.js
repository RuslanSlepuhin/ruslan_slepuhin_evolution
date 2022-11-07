function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function getRectangleArea(length, width) {
    return length * width;
}

function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    result = `The perimeter of a rectangle is ${perimeter} and the area is ${area}`
    console.log(result)
    return result
}
module.exports = {
    getRectanglePerimeter,
    getRectangleArea,
    getRectangleInfo
}

console.log(getRectanglePerimeter(1, 4556))