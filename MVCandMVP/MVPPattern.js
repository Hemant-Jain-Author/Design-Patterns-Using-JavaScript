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

class View {
    update(data) {
        console.log("View: Updating the view with data: " + data);
    }
}

class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    setData(data) {
        console.log("Presenter: Receive data from client.");
        this.model.setData(data);
    }

    updateView() {
        console.log("Presenter: Receive update view from client.");
        const data = this.model.getData();
        this.view.update(data);
    }
}

// Main class (Client code)
console.log("Client: Pass trigger to Presenter.");
const presenter = new Presenter();
presenter.updateView();

presenter.setData("Hello, Students!");
presenter.updateView();

/*
Client: Pass trigger to Presenter.
Presenter: Receive update view from client.
Model: Get data: Hello, World!
View: Updating the view with data: Hello, World!
Presenter: Receive data from client.
Model: Set data : Hello, Students!
Presenter: Receive update view from client.
Model: Get data: Hello, Students!
View: Updating the view with data: Hello, Students!
*/