function getInputValue (inputId) {
    const getId = document.getElementById(inputId);
    const getIdValue = getId.value;
    const getIdValueConvert = parseFloat(getIdValue);
    getId.value = ' ';
    return getIdValueConvert;
}

function getInnerTextAsNumber (Id) {
    const getId = document.getElementById(Id);
    const getValue = getId.innerText;
    const convertText = parseFloat(getValue);
    return convertText;
};

function setValue (Id , value) {
    const getId = document.getElementById(Id);
    getId.innerText = value;
}

// depoosit btn
document.getElementById('deposit-btn').addEventListener('click',function(){
    const getDepositInput = getInputValue('deposit-field');
    if (isNaN (getDepositInput) || getDepositInput < 0) {
        alert('Please Provide A Valid Number')
        return;
    }else{
        const getDepositPrevious = getInnerTextAsNumber('deposit-balance');
        const newBalance = getDepositPrevious + getDepositInput;
        setValue('deposit-balance' , newBalance);
        // get balance text 
        const getBalance = getInnerTextAsNumber('main-balance');
        const newBalanceMain = getBalance + getDepositInput;
        setValue('main-balance' , newBalanceMain);
    };
    
});

// withdraw Button

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdawInput = getInputValue('withdraw-field');
    if(isNaN(withdawInput) || withdawInput<0){
        alert('Please Provide A Valid Number');
        return;
    }else{
        const withdrawPrevious = getInnerTextAsNumber('withdraw-balance');

        const newBalance = withdawInput + withdrawPrevious;
        //main balance 
        const newMainBalance = getInnerTextAsNumber('main-balance');
        const newBalanceMain =  newMainBalance - withdawInput;
        if(withdawInput > newBalanceMain){
            alert('Are U Mad ? Your Balance is Insufficient');
            return;
        }else{
            setValue('withdraw-balance', newBalance);
            setValue('main-balance' , newBalanceMain);
        }
    }
    
})










