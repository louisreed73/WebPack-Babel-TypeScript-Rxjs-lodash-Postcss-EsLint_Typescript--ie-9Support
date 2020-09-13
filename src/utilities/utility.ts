export function cO (obj:{}|[]|Function|undefined,color:string,depth:number) {

        console.log(`%c${JSON.stringify(obj, null, depth)}`, `color:${color}`);

}
export function cL (str:any,color:string) {

        console.log(`%c${str}`, `color:${color}`);

}