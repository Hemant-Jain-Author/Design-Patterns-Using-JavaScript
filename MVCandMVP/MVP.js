// Model
class Model {
    constructor() {
        this.data = '';
        this.presenter = null;
    }

    setData(data) {
        console.log('Model: Set data.');
        this.data = data;
        this.presenter.modelUpdateEvent();
    }

    getData() {
        console.log('Model: Get data.');
        return this.data;
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }
}

// Presenter
class Presenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    handleUserInput(userInput) {
        console.log('Presenter: Handle user input.');
        this.model.setData(userInput);
    }

    modelUpdateEvent() {
        console.log('Presenter: Model update event.');
        this.view.update(this.model.getData());
    }
}

// View
class View {
    constructor() {
        this.presenter = null;
    }

    update(data) {
        console.log('View: Update UI.');
        console.log('Data:', data);
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }

    getUserInput() {
        console.log('View: Enter user input: hello, world!');
        const userInput = 'hello, world!';
        console.log(userInput);
        this.presenter.handleUserInput(userInput);
    }
}

// Client code
const model = new Model();
const view = new View();
const presenter = new Presenter(model, view);

model.setPresenter(presenter);
view.setPresenter(presenter);

view.getUserInput();

/*
View: Enter user input: hello, world!
Presenter: Handle user input.
Model: Set data.
Presenter: Model update event.
Model: Get data.
View: Update UI.
Data: hello, world! 
 */