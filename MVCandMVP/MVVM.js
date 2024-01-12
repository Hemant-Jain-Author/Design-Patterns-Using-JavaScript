// Model
class Model {
    constructor() {
        this.data = '';
    }

    setData(data) {
        console.log("Model: Set data.");
        this.data = data;
    }

    getData() {
        console.log("Model: Get data.");
        return this.data;
    }
}

// ViewModel
class ViewModel {
    constructor(model) {
        this.model = model;
        this.data = '';
        this.updateData();
    }

    updateModel(data) {
        console.log("ViewModel: Update data.");
        this.model.setData(data);
        this.updateData();
    }

    updateData() {
        console.log("ViewModel: Fetch data.");
        this.data = this.model.getData();
    }

    getData() {
        return this.data;
    }
}

// View
class View {
    constructor(viewModel) {
        this.viewModel = viewModel;
    }

    displayData() {
        console.log("Display Data: " + this.viewModel.getData());
    }

    getUserInput() {
        // Simulating user input
        console.log("View: Enter user input: hello, world!");
        const userInput = "hello, world!";
        console.log(userInput);
        this.viewModel.updateModel(userInput);
    }
}

// Client code
const model = new Model();
const viewModel = new ViewModel(model);
const view = new View(viewModel);

// Display initial data
view.displayData();

// Get user input and update data
view.getUserInput();

// Display updated data
view.displayData();

/*
ViewModel: Fetch data.
Model: Get data.
Display Data: null
View: Enter user input: hello, world!
ViewModel: Update data.
Model: Set data.
ViewModel: Fetch data.
Model: Get data.
Display Data: hello, world!
*/