let bill = document.querySelector('.input-container__bill-input');
let billValue = parseInt(bill.value);

let people = document.querySelector('.input-container__people-input');
let peopleValue = parseInt(people.value);

let tipResult = document.querySelector('.result__value');
let totalResult = document.querySelector('.result__value--total');

let error = document.querySelector('.alert')

let btns = document.querySelectorAll('.btns__btn');


let tipValue = 5;
btns.forEach(element => {
    element.addEventListener('click', (e) => {
        tipValue = (parseInt(e.target.innerText.slice(0, -1)));   
        tipResult.innerText = `$${((billValue * (tipValue / 100)) / peopleValue).toFixed(2)}`;
        totalResult.innerText = `$${((billValue * (tipValue / 100) + billValue)/peopleValue).toFixed(2)}`;

        btns.forEach(element => {
            element.classList.remove('btns__btn--active');
        })
        element.classList.add('btns__btn--active');

    })
})

//Actualizando el bill
bill.addEventListener('input', (e) => {
    billValue = parseInt(e.target.value);
    calculateTip()
})

// actualizando el people
people.addEventListener('input', (e) => {
    peopleValue = parseFloat(e.target.value);

    if(peopleValue <= 0){
        people.style.border = '2px solid red';
        error.classList.add('error');
    } else {
        people.style.border = 'none';
        error.classList.remove('error');
    }

    calculateTip(); 
})

function calculateTip(){
    tipResult.innerText = `$${((billValue * (tipValue / 100)) / peopleValue).toFixed(2)}`;
    totalResult.innerText = `$${((billValue * (tipValue / 100) + billValue)/peopleValue).toFixed(2)}`;
}



