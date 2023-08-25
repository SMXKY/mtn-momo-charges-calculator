let charges = 0 ;

function calculateChargesMTN(){
    //data collection variables
const value = Number(document.querySelector('.js-input').value) ;
const operation = document.querySelector('.js-option').value ;

//data display variables
const chargesDisplay = document.querySelector('.js-charges-paragraph') ;
const operationDisplay = document.querySelector('.js-operation-paragraph') ;
const amountDisplay = document.querySelector('.js-amount-paragraph') ;
const amountAndChargesDisplay = document.querySelector('.js-total-paragraph') ;

    if(operation === 'Transfer'){
        if(value < 99000){
            charges = value * 0.005 ;
        }else{
            charges = 500 ;
            }
        }else{
            if(value >= 100 && value <= 2499){
                charges = 50 ;
            }else if(value >= 2500  && value <= 174999){
                charges = value * 0.02 ;
            }else{
                charges = 3500 ;
            }
        }



    chargesDisplay.innerHTML = `${charges.toFixed(2)} FCFA` ;
    operationDisplay.innerHTML = `${operation}` ;
    amountDisplay.innerHTML = `${value} FCFA` ;
    amountAndChargesDisplay.innerHTML = `${value + charges} FCFA` ;

    document.querySelector('.js-input').value = '' ;
}

function Enterkey(event){
    if(event.key === 'Enter'){
        calculateChargesMTN() ;
        document.querySelector('.js-input').value = '' ;
    }
}

function resetValues(){
    //data collection variables
const value = Number(document.querySelector('.js-input').value) ;
const operation = document.querySelector('.js-option').value ;

//data display variables
const chargesDisplay = document.querySelector('.js-charges-paragraph') ;
const operationDisplay = document.querySelector('.js-operation-paragraph') ;
const amountDisplay = document.querySelector('.js-amount-paragraph') ;
const amountAndChargesDisplay = document.querySelector('.js-total-paragraph') ;

    chargesDisplay.innerHTML = `` ;
    operationDisplay.innerHTML = `` ;
    amountDisplay.innerHTML = `` ;
    amountAndChargesDisplay.innerHTML = `` ;
}