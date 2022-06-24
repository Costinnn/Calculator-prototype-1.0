// change color theme

let rangeSwitch = document.querySelector('[data-range]');
rangeSwitch.addEventListener('click', colorChange);

function colorChange(){
    let number = document.querySelector('[data-range]').value;
    if(number==1){
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        document.querySelector('.range-container').style.color ='hsl(30, 25%, 89%)';
        document.querySelector('.top-container').style.color ='hsl(30, 25%, 89%)';
        document.getElementById('irange').style.backgroundColor ='hsl(223, 31%, 20%)';

        document.getElementById('inputc').style.backgroundColor ='hsl(224, 36%, 15%)';
        document.getElementById('inputc').style.color ='hsl(0, 0%, 100%)';

        document.querySelector('.number-container').style.backgroundColor ='hsl(223, 31%, 20%)';

        let items = document.getElementsByClassName('item');
        for(let index in items){
            if(index==3 || index == 16){
                items[index].style.backgroundColor='hsl(225, 21%, 49%)';
                items[index].style.color='hsl(0, 0%, 100%)';
                items[index].style.boxShadow='0px 4px hsl(224, 28%, 35%)';
            } else if(index == 17){
                items[index].style.backgroundColor='hsl(6, 63%, 50%)';
                items[index].style.color='hsl(0, 0%, 100%)';
                items[index].style.boxShadow='0px 4px hsl(6, 70%, 34%)';
            } else {
                items[index].style.backgroundColor='hsl(30, 25%, 89%)';
                items[index].style.color='hsl(224, 28%, 35%)';
                items[index].style.boxShadow = '0px 4px hsl(28, 16%, 65%)';
            }
        } 
    } else if(number == 2){
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        document.querySelector('.range-container').style.color ='hsl(60, 10%, 19%)';
        document.querySelector('.top-container').style.color ='hsl(60, 10%, 19%)';
        document.getElementById('irange').style.backgroundColor ='hsl(0, 5%, 81%)';

        document.getElementById('inputc').style.backgroundColor ='hsl(0, 0%, 93%)';
        document.getElementById('inputc').style.color ='hsl(60, 10%, 19%)';

        document.querySelector('.number-container').style.backgroundColor ='hsl(0, 5%, 81%)';

        let items = document.getElementsByClassName('item');
        for(let index in items){
            if(index==3 || index == 16){
                items[index].style.backgroundColor='hsl(185, 42%, 37%)';
                items[index].style.color='hsl(0, 0%, 100%)';
                items[index].style.boxShadow='0px 4px hsl(185, 58%, 25%)';
            } else if(index == 17){
                items[index].style.backgroundColor='hsl(25, 98%, 40%)';
                items[index].style.color='hsl(0, 0%, 100%)';
                items[index].style.boxShadow='0px 4px hsl(25, 99%, 27%)';
            } else {
                items[index].style.backgroundColor='hsl(45, 7%, 89%)';
                items[index].style.color='hsl(60, 10%, 19%)';
                items[index].style.boxShadow = '0px 4px hsl(35, 11%, 61%)';
            }
        } 
    } else {
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        document.querySelector('.range-container').style.color ='hsl(52, 100%, 62%)';
        document.querySelector('.top-container').style.color ='hsl(52, 100%, 62%)';
        document.getElementById('irange').style.backgroundColor ='hsl(268, 71%, 12%)';

        document.getElementById('inputc').style.backgroundColor ='hsl(268, 71%, 12%)';
        document.getElementById('inputc').style.color ='hsl(52, 100%, 62%)';

        document.querySelector('.number-container').style.backgroundColor ='hsl(268, 71%, 12%)';

        let items = document.getElementsByClassName('item');
        for(let index in items){
            if(index==3 || index == 16){
                items[index].style.backgroundColor='hsl(281, 89%, 26%)';
                items[index].style.color='hsl(0, 0, 100%)';
                items[index].style.boxShadow='0px 4px hsl(285, 91%, 52%)';
            } else if(index == 17){
                items[index].style.backgroundColor='hsl(176, 100%, 44%)';
                items[index].style.color='hsl(198, 20%, 13%)';
                items[index].style.boxShadow='0px 4px hsl(177, 92%, 70%)';
            } else {
                items[index].style.backgroundColor='hsl(268, 47%, 21%)';
                items[index].style.color='hsl(52, 100%, 62%)';
                items[index].style.boxShadow = '0px 4px hsl(290, 70%, 36%)';
            }
        } 
    }
}

// hover effects

let keys = document.querySelectorAll('.item');
keys.forEach(element => {

    element.addEventListener('mouseover', hoverFunction =>{
        element.style.opacity = '0.65';
        element.style.cursor = 'pointer'
    });

    element.addEventListener('mouseout', hoverOutFunction =>{
        element.style.opacity = '1';
    });

});

//math operations

class Calculator{
    constructor(previousOutputText, currentOutputText){
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
        this.reset();
    }

    reset(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    addNumber(number){
        if(number==='.' && this.currentOperand.includes('.')) return;

        this.currentOperand = this.currentOperand.toString()+ number.toString();
    }

    addOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !==''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev || isNaN(current))) return;

        switch(this.operation){
            case'+':
            computation = prev + current
            break;
            case'-':
            computation = prev - current
            break;
            case'x':
            computation = prev * current
            break;
            case'/':
            computation = prev / current
            break;
            default:
                return;
        }

        this.currentOperand= computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay(){
        this.currentOutputText.innerText = this.currentOperand;
        
        this.previousOutputText.innerText = this.previousOperand;
        
        
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const previousOutputText = document.querySelector('[data-previous-output]');
const currentOutputText = document.querySelector('[data-current-output]');
let figureNumber = 0;

const calculator = new Calculator(previousOutputText, currentOutputText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(figureNumber == 20) return;

        calculator.addNumber(button.innerText);
        calculator.updateDisplay();
        figureNumber += 1;
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addOperation(button.innerText);
        calculator.updateDisplay();
        figureNumber = 0;
    })
})

equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
    figureNumber = 0;
})

resetButton.addEventListener('click', button => {
    calculator.reset();
    calculator.updateDisplay();
    figureNumber = 0;
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
    figureNumber -= 1;
})