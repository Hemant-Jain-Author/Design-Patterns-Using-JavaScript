class Handler {
    constructor(successor) {
        this.successor = successor;
    }

    handleRequest() {
        throw new Error("Abstract method: handleRequest");
    }
}

class ConcreteHandler1 extends Handler {
    constructor(successor) {
        super(successor);
    }

    handleRequest() {
        if (true) { // Can handle request.
            console.log("Finally handled by ConcreteHandler1");
        } else if (this.successor !== null) {
            console.log("Message passed to next in chain by ConcreteHandler1");
            this.successor.handleRequest();
        }
    }
}

class ConcreteHandler2 extends Handler {
    constructor(successor) {
        super(successor);
    }

    handleRequest() {
        if (false) { // Can't handle request.
            console.log("Finally handled by ConcreteHandler2");
        } else if (this.successor !== null) {
            console.log("Message passed to next in chain by ConcreteHandler2");
            this.successor.handleRequest();
        }
    }
}

// Client code
const ch1 = new ConcreteHandler1(null);
const ch2 = new ConcreteHandler2(ch1);
ch2.handleRequest();

/*
Message passed to next in chain by ConcreteHandler2
Finally handled by ConcreteHandler1
*/