// Mixins
const PrintableMixin = {
    print(document) {
        console.log(`Printing: ${document}`);
    }
};

const ScannableMixin = {
    scan() {
        console.log("Scanning");
    }
};

const FaxableMixin = {
    fax(document) {
        console.log(`Faxing: ${document}`);
    }
};

// Classes using mixins
class BasicInkjetPrinter {
    constructor() {
        // Using object spread syntax to apply mixins
        Object.assign(this, PrintableMixin, ScannableMixin);
    }

    // Additional methods or overrides specific to BasicInkjetPrinter can be added here
}

class HighEndOfficePrinter {
    constructor() {
        // Using object spread syntax to apply mixins
        Object.assign(this, PrintableMixin, ScannableMixin, FaxableMixin);
    }

    // Additional methods or overrides specific to HighEndOfficePrinter can be added here
}

// Client code
const basicPrinter = new BasicInkjetPrinter();
basicPrinter.print("Sample Document");
basicPrinter.scan();

const officePrinter = new HighEndOfficePrinter();
officePrinter.print("Important Report");
officePrinter.scan();
officePrinter.fax("Confidential Memo");


/*
Printing: Sample Document
Scanning
Printing: Important Report
Scanning
Faxing: Confidential Memo
*/
