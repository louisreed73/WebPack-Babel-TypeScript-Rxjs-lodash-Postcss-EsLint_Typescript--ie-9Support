function cO (obj:unknown,color:string,depth:number):void {

        console.log(`%c${JSON.stringify(obj, null, depth)}`, `color:${color}`);

}
function cL (str:unknown,color:string):void {

        console.log(`%c${str}`, `color:${color}`);

}

export {
        cO,
        cL
};