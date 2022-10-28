const firstName = document.getElementById('fname');
const form = document.getElementById('form');
const lastName= document.getElementById('lname');
const adress = document.getElementById('adress');
const paymentMethod = document.getElementById('payment-method');
const debitCard = document.getElementById('debit-card');
const creditCard = document.getElementById('credit-card');
const payCash = document.getElementById('pay-cash');
const cardNumber = document.getElementById('card-number');
const csc = document.getElementById('csc');
const experationDate = document.getElementById('experation-date');
const coment = document.getElementById('comment');
const enter = document.getElementById('enter');
const message = document.getElementById('message');


form.addEventListener('submit', function(e) {
    e.preventDefault();
   if(firstName.value === '' || lastName.value === '' || adress.value === '' || paymentMethod.value === '' || debitCard.value === '' || creditCard.value === '' || payCash.value === '' || cardNumber.value === '' || csc.value === '' || experationDate.value === '' || coment.value === ''){
        alert('please fill out all the feilds');
    }
    var text = []
    if(firstName.value === ''){
        text.push('please enter your first name')
    } else
     if(lastName.value === ''){
        text.push('please enter your last name')
    } else 
    if(adress.value === ''){
        text.push('please enter your address')
    } else if (paymentMethod.value === ''){
        text.push('please enter your your payment method');
    } else if(debitCard.value === ''){
        text.push('please enter your credit card number')
    } else if(creditCard.value === ''){
        text.push('please enter your credit card number')
    } else if(payCash.value === ''){
        text.push('please let us know if you pay cash');
    } else if(cardNumber.value === ''){
        text.push('please enter your card number')
    } else if (csc.value === ''){
        text.push('please enter the csc degit number')
    } else if (experationDate.value === ''){
        text.push('plese enter your experation card date')
    } else if(coment.value === ''){
        text.push('please add a comment')
    }
   

    message.innerText = text
});



function onmouseOver(x){
    var suspenssion = document.getElementById('suspenssion');
    x.style.background = 'red';
}
function onmouseOut(x){
    var suspenssion = document.getElementById('suspenssion');
    x.style.color = 'white';
}