let cardNumber = document.getElementById('card-number')
let cardUserName = document.querySelector('.name')
let cardDate = document.querySelector('.date')
let cardCvc = document.querySelector('.cvc')

document.getElementById('user-card-number').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });

function updateCardNumber() {
    let y = document.getElementById('user-card-number').value;
    cardNumber.textContent = y;
}

function updateExpiryDate() {
    let z = document.getElementById('expiry-month').value
    let d = document.getElementById('expiry-year').value

    cardDate.textContent = `${z}/${d}`;
}

function updateCvc() {
    let v = document.getElementById('user-cvc').value
    cardCvc.textContent = v;
}

function updateText() {
    let x = document.getElementById("user-name").value;
    cardUserName.textContent = x;
  }


  let username = document.forms['form']['username'];
  let cardnumber = document.forms['form']['cardnumber'];
  let expirymonth = document.forms['form']['expirymonth'];
  let expiryyear = document.forms['form']['expiryyear'];
  let usercvc = document.forms['form']['usercvc']



  let username_error = document.querySelector('.username-error')
  let cardnumber_error = document.querySelector('.card-number-error')
  let expirymonth_error = document.querySelector('.expiry-month-error')
  let expiryyear_error = document.querySelector('.expiry-year-error')
  let cvc_error = document.querySelector('.cvc-error')



function validated() {
    if(username.value.length == 0){
        username.style.border = "1px solid red"
        username.style.margin = "0px 0px 5px 0px"
        username_error.style.display = 'block'
        return false;
        username.focus()
    }
    if(cardnumber.value.length == 0){
        cardnumber.style.border = "1px solid red"
        cardnumber.style.margin = "0px 0px 5px 0px"
        cardnumber_error.style.display = 'block'
        return false;
        cardnumber.focus()
    }
    if(expirymonth.value.length == 0){
        expirymonth.style.border = "1px solid red"
        expirymonth.style.marginBottom = "0px"
        expirymonth_error.style.display = 'block'
        return false;
        expirymonth.focus()
    }
    if(expiryyear.value.length == 0){
        expiryyear.style.border = "1px solid red"
        expiryyear.style.marginBottom = "0px"
        expiryyear_error.style.display = 'block'
        return false;
        expiryyear.focus()
    }

    if(usercvc.value.length == 0){
        usercvc.style.border = "1px solid red"
        usercvc.style.marginBottom = "0px"
        cvc_error.style.display = 'block'
        return false;
        usercvc.focus()
    }
  }

let successDiv = document.querySelector('.success')
let submitBtn = document.querySelector('.submit-btn')
let form = document.getElementById('form')

submitBtn.addEventListener('click',() =>{
    if(username.value.length > 0 && cardnumber.value.length > 0 && expirymonth.value.length > 0 && expiryyear.value.length > 0 && usercvc.value.length > 0){
        successDiv.style.display = 'flex';
        form.style.display = 'none'
    }
})

let continueBtn = document.querySelector('.continue-btn')

continueBtn.addEventListener('click',() =>{
    window.location.reload()
})