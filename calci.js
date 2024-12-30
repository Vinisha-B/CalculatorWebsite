let displayValue = '';

function appendNumber(number){
    displayValue+=number;
    updateDisplay();
}

function appendOperator(operator){
    if(displayValue=='') return;
    const lastChar = displayValue.slice(-1);
    if(['+','-','*','/'].includes(lastChar)){
        displayValue=displayValue.slice(0,-1);
    }
    displayValue+=operator;
    updateDisplay();
}

function clearDisplay(){
    displayValue='';
    updateDisplay();
}

function calculate(){
    try{
        displayValue=eval(displayValue).toString();
    }catch(error){
        displayValue='Error';
    }
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').innerText=displayValue;
}