// Model class
class Model {
    constructor() {
        this.data = "Hello, World!";
    }

    setData(data) {
        console.log("Model: Set data : " + data);
        this.data = data;
    }

    getData() {
        console.log("Model: Get data: " + this.data);
        return this.data;
    }
}

// View class
class View {
    constructor(model) {
        this.model = model;
    }

    // In classic MVC, the view interacts with the model to get data.
    update() {
        const data = this.model.getData();
        console.log("View: Updating the view with data : " + data);
    }
}

// Controller class
class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this.model);
    }

    setData(data) {
        console.log("Controller: Receive data from client.");
        this.model.setData(data);
    }

    updateView() {
        console.log("Controller: Receive update view from client.");
        this.view.update();
    }
}

// Main class (Client code)
const controller = new Controller();
controller.updateView();

controller.setData("Hello, Students!");
controller.updateView();

/*
Controller: Receive update view from client.
Model: Get data: Hello, World!
View: Updating the view with data : Hello, World!
Controller: Receive data from client.
Model: Set data : Hello, Students!
Controller: Receive update view from client.
Model: Get data: Hello, Students!
View: Updating the view with data : Hello, Students!
*/