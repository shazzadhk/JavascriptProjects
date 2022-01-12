const len = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generateButton = document.getElementById('generate');
const display = document.getElementById('pw');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numberList = '0123456789';
const symbolList = '!@#$%^&*(){}[]?=/<>';

generateButton.addEventListener('click',() => {

    let actualPassword = '';

    if(upper.checked){
        actualPassword +=getUppercase();
        
    }

    if(lower.checked){
        actualPassword +=getLowerCase();
        
    }

    if(number.checked){
        actualPassword +=getNumber();
        
    }

    if(symbol.checked){
        actualPassword +=getSymbol();
        
    }

    for(let i = actualPassword.length;i < len.value;i++){
        let passwordArray = [];
        passwordArray.push(getUppercase());
        passwordArray.push(getLowerCase());
        passwordArray.push(getNumber());
        passwordArray.push(getSymbol());

        actualPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)];
        
    }

    display.textContent = actualPassword;

});


function getUppercase(){
    const randomNumber =  Math.floor(Math.random() * upperCase.length);
    return upperCase[randomNumber];
}

function getLowerCase(){
    const randomNumber =  Math.floor(Math.random() * lowerCase.length);
    return lowerCase[randomNumber];
}

function getNumber(){
    const randomNumber =  Math.floor(Math.random() * numberList.length);
    return numberList[randomNumber];
}

function getSymbol(){
    const randomNumber =  Math.floor(Math.random() * symbolList.length);
    return symbolList[randomNumber];
}

const copyEl = document.getElementById('copy');

//password copy to clipboard
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = display.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});

