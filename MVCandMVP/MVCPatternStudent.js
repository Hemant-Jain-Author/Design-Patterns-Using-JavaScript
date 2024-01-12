class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Model {
    constructor() {
        this.student = new Student("Harry", 1);
    }

    setData(name, id) {
        console.log("Model: Set data : " + name + " " + id);
        this.student.name = name;
        this.student.id = id;
    }

    getData() {
        console.log("Model: Get data.");
        return this.student;
    }
}

class View {
    constructor(model) {
        this.model = model;
    }

    update() {
        const student = this.model.getData();
        console.log("View: Student Info, Name: " + student.name + " Id: " + student.id);
    }
}

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this.model);
    }

    setData(name, id) {
        console.log("Controller: Receive data from client.");
        this.model.setData(name, id);
    }

    updateView() {
        console.log("Controller: Receive update view from client.");
        this.view.update();
    }
}

// Main class (Client code)
const controller = new Controller();
controller.updateView();

controller.setData("Jack", 2);
controller.updateView();

/*
Controller: Receive update view from client.
Model: Get data.
View: Student Info, Name: Harry Id: 1
Controller: Receive data from client.
Model: Set data : Jack 2
Controller: Receive update view from client.
Model: Get data.
View: Student Info, Name: Jack Id: 2
*/