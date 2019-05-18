export class ShoppingCart{
    constructor(
    public username:String,
    public orderId:Number,
    public donationType:String,
    public price:Number,
    public monthly:Boolean,
    public date:String
    ){}  
}