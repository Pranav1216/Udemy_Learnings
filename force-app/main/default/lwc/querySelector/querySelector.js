import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    userNames=["pranav", "Lalith" , "SadGuru", "Pooja"]

    handleOnClick(){
        const ele = this.template.querySelector('h1')
        const userElements = this.template.querySelectorAll('.name')
        console.log(ele.innerText)
        Array.from(userElements).forEach(item=> {
            console.log(item.innerText)
        });
    }
}