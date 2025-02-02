import {Mark_type, Marker} from "./utils.js";

class Board{
    constructor(dimension, player1, player2){
        this.dimension = dimension;
        this.player1 = player1;
        this.player2 = player2;
    }
}

class Square{
    constructor(grid_pos, mark = null){
        this.grid_pos = grid_pos;
        this.mark = new Marker(mark);
    }
    toString(){
        console.log(`Position: ${this.grid_pos}, Marker: ${this.mark}`)
    }
}