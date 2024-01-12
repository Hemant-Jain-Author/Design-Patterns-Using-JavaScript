// Model
class Model {
    constructor() {
        this.data = '';
        this.observers = [];
    }

    setData(data) {
        console.log('Model : Set data.');
        this.data = data;
        this.notifyObservers();
    }

    getData() {
        console.log('Model : Get data.');
        return this.data;
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        console.log('Model : Notify observers.');
        this.observers.forEach(observer => observer.update());
    }
}

// View
class View {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;
        this.model.addObserver(this);
    }

    update() {
        console.log('View : Update.');
        const data = this.model.getData();
        console.log('Data:', data);
    }

    getUserInput() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('View : Enter user input: ', userInput => {
            rl.close();
            this.controller.handleUserInput(userInput);
        });
    }
}

// Controller
class Controller {
    constructor(model) {
        this.model = model;
    }

    handleUserInput(userInput) {
        console.log('Controller : Handle user input.');
        this.model.setData(userInput);
    }

    setView(view) {
        this.view = view;
    }
}

// Observer interface
class Observer {
    update() {}
}

// Main class
const model = new Model();
const controller = new Controller(model);
const view = new View(model, controller);
controller.setView(view);
view.getUserInput();


/*
View : Enter user input: hello, world!
Controller : Handle user input.
Model : Set data.
Model : Notify observers.
View : Update.
Model : Get data.
Data: hello, world!
 */