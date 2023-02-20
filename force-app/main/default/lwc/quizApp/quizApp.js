import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    selected={} //storing ansers
    
    correctAnswers = 0 

    isSubmited = false //use to show the correct answers

    myQuestions=[
        {
            id:"Question 1",
            question:"Which one of the following is not a template loop ?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            question:"Which of the file is invalid in LWC component folder ?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question 3",
            question:"Which of the follwing is not a Directive ?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    
//used for disabling submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

//it gets called on every click on the options
    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        const {name,value}= event.target //object Destructuring
        this.selected={...this.selected, [name]: value}
    }

//for applying dynamic styling on result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'slds-text-color_success' : 'slds-text-color_error'}`
    }

// form submit handler
    submitHandler(event){
        event.preventDefault() 
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmited = true
        console.log("this.correctAnsers" , this.correctAnswers)
    }

//reset form on reset function
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmited = false
    }
}