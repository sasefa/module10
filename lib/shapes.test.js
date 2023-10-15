const { Triangle } = require('./shapes');

test('Triangle shape render method test', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
