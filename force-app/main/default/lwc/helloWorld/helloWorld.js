import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

//Data Binding
    fullname = "KARTHIKEYA";
    text = "AURA";

    changeHandler(event){
        this.text = event.target.value
    }
//@track using
    @track adress = {
        Country:"India" , City:"Hyderabad"
    }

    trackHandler(event){
        this.adress.City = event.target.value;
    }
//using SPREAD operator
    adrs = {
        Cntry:"India" , Cty:"Hyderabad"
    }

    spreadHandler(event){
        this.adrs = {...this.adrs,"Cty" : event.target.value};
    }

//Getters
    user = ["pranav" , "pooja" , "komal"];
    num1 = 10;
    num2 = 20;

    get firsuser(){
        return this.user[0].toUpperCase();
    }

    get multiply(){
        return this.num1 * this.num2;
    }

}