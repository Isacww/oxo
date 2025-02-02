import Mark_type from "./utils.js";

export class Player {
    constructor(name, marker) {
        this.name = name;
        this.mark_type = new Mark_type(marker)
    }
    //Show player info
    displayInfo() {
        console.log(`Player: ${this.name}, Marker: ${this.mark_type}`);
    }
}