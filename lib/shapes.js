class Shape {
    constructor(color) {
        this.color = color;
    }
    
    addText(svg, text, color) {
        return svg.replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" `)
            .replace('</svg>', `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}">${text}</text></svg>`);
    }
}
    
class Triangle extends Shape {
    render(text, textColor) {
        let svg = `<svg width="200" height="300"><polygon points="100,30 50,165 150,165" fill="${this.color}" /></svg>`;
        return this.addText(svg, text, textColor);
    }
}
    
class Square extends Shape {
    render(text, textColor) {
        let svg = `<svg width="200" height="300"><rect x="50" y="50" width="100" height="100" fill="${this.color}" /></svg>`;
        return this.addText(svg, text, textColor);
    }
}

class Circle extends Shape {
    render(text, textColor) {
        let svg = `<svg width="200" height="300"><circle cx="100" cy="100" r="80" fill="${this.color}" /></svg>`;
        return this.addText(svg, text, textColor);
    }
}

module.exports = { Triangle, Circle, Square };
