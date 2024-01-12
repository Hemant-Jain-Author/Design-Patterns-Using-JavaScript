class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    setWidth(width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    setHeight(height) {
        super.setWidth(height);
        super.setHeight(height);
    }
}

function testRectangle() {
    const r = new Rectangle(10, 20);
    testRect(r);
}

function testSquare() {
    const s = new Square(10);
    s.setWidth(20);
    testRect(s);
}

function testRect(rect) {
    rect.setHeight(10);
    rect.setWidth(20);
    if (200 === rect.getHeight() * rect.getWidth())
        console.log("success");
    else
        console.log("failure");
}

testRectangle();
testSquare();


/*
success
failure
*/