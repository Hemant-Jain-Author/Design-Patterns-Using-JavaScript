// Iterator interface
class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
        return null;
    }

    hasNext() {
        return this.index < this.collection.length;
    }
}

// Concrete Aggregate class
class ConcreteAggregate {
    constructor() {
        this.data = [];
    }

    addData(value) {
        this.data.push(value);
    }

    getIterator() {
        return new Iterator(this.data);
    }
}

// Client code
const aggregate = new ConcreteAggregate();
aggregate.addData("Item 1");
aggregate.addData("Item 2");
aggregate.addData("Item 3");

const iterator = aggregate.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}

/*
Item 1
Item 2
Item 3
*/