export class user{
    constructor(
        public email:string,
        public password:string,
        public firstName: string,
        public lastName: string,
        public cma: number,
        public phone: string,
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zipcode: number,
        public country: string,
        public urbanization: string,
       public role: string
    ){
    }
}