// Abstraction interface
class Shape {
    constructor(color) {
        this.imp = color;
    }

    draw() {
        console.log(`Drawing ${this.constructor.name} with color ${this.imp.fill()}`);
    }
}

// Implementor interface
class Color {
    fill() {
        throw new Error("Abstract method: fill");
    }
}

// Rectangle class
class Rectangle extends Shape {
    constructor(color) {
        super(color);
    }
}

// Circle class
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
}

// Red class
class Red extends Color {
    fill() {
        return "Red";
    }
}

// Green class
class Green extends Color {
    fill() {
        return "Green";
    }
}

// Blue class
class Blue extends Color {
    fill() {
        return "Blue";
    }
}

// Client code
const c1 = new Red();
const abstraction = new Circle(c1);
abstraction.draw();

const c2 = new Green();
const abstraction2 = new Rectangle(c2);
abstraction2.draw();

/*
Drawing Circle with color Red
Drawing Rectangle with color Green
*/