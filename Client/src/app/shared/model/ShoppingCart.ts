export class ShoppingCart{
    constructor(
    public username:String,
    public email: string,
    public orderId:Number,
    public donnationType:String,
    public price:Number,
    public monthly:Boolean,
    public date:Date
    ){}  
}