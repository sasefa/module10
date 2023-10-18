const { Triangle, Circle, Square } = require('./shapes');

test('Triangle', () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle', () => {
    const circle = new Circle("blue");
    expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />');
});

test('Square', () => {
    const square = new Square("blue");
    expect(square.render()).toEqual('<rect width="100" height="100" fill="blue" />');
});
