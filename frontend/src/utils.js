//Helper functions (e.g., random numbers, formatting)


export const Mark_type = Object.freeze({
    O: "circle",
    X: "cross",
});

export class Marker{
    constructor(mark_type){
        this.mark_type = mark_type;
    }
    get_marker(){
        return this.mark_type;
    }
}