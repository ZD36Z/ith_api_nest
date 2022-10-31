export interface ISales{
    id_user : number
    details : IDetails[]
}

export interface IDetails{
    prodcut : string
    quantity : number
    unit_price : number
}