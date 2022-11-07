const rectang = require('../js/rectangle')

/// function getRectangleArea testing
// the first test
test('should properly output the area value', () => {
    const outputText = rectang.getRectangleArea(4, 5);
    expect(outputText).toBe(20);
});

// the second test
test('should properly output the area value', () => {
    const outputText = rectang.getRectangleArea(435, 1024);
    expect(outputText).toBe(445440);
});


// function getRectanglePerimeter testing
// the first test
test('should properly output the perimeter value', () => {
    const outputText = rectang.getRectanglePerimeter(4, 5);
    expect(outputText).toBe(18);
});

// the second test
test('should properly output the perimeter value', () => {
    const outputText = rectang.getRectanglePerimeter(1, 4556);
    expect(outputText).toBe(9114);
});

// function getRectangleInfo testing
// the first test
test('should properly output the message to consol', () => {
    const outputText = rectang.getRectangleInfo(6, 12);
    expect(outputText).toBe('The perimeter of a rectangle is 36 and the area is 72')
});

// the second test
test('should properly output the message to consol', () => {
    const outputText = rectang.getRectangleInfo(24, 600);
    expect(outputText).toBe('The perimeter of a rectangle is 1248 and the area is 14400')
});
