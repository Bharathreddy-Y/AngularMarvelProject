export class dataclass{
    public marvel : Array<dataField> = new Array<dataField>()
}
export class dataField{
    public id : Number = 0;
    public name : string ="";
    public description : string = ""
    public resourceURI : string = ""
}