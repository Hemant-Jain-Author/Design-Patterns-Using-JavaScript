class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

class Model {
    constructor() {
        this.student = new Student("Harry", 1);
    }

    setData(name, id) {
        console.log("Model: Set data : " + name + " " + id);
        this.student = new Student(name, id);
    }

    getData() {
        console.log("Model: Get data.");
        return this.student;
    }
}

class View {
    update(name, id) {
        console.log("View: Student Info : " + name + " " + id);
    }
}

class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    setData(name, id) {
        console.log("Presenter: Receive data from client.");
        this.model.setData(name, id);
    }

    updateView() {
        console.log("Presenter: Receive update from client.");
        const data = this.model.getData();
        this.view.update(data.getName(), data.getId());
    }
}

// Main class (Client code)
const presenter = new Presenter();
presenter.updateView();

presenter.setData("Jack", 2);
presenter.updateView();

/*
Presenter: Receive update from client.
Model: Get data.
View: Student Info : Harry 1
Presenter: Receive data from client.
Model: Set data : Jack 2
Presenter: Receive update from client.
Model: Get data.
View: Student Info : Jack 2
*/