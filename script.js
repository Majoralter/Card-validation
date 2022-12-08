let cardNumber = document.getElementById('card-number')
let cardUserName = document.querySelector('.name')
let cardDate = document.querySelector('.date')
let cardCvc = document.querySelector('.cvc')


function updateText() {
    let x = document.getElementById("user-name").value;
    cardUserName.textContent = x;
  }

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