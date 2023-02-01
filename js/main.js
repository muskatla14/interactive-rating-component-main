const main = document.querySelector('.main');
const ratingState = document.querySelector('.rating-state');
const thankyouState = document.querySelector('.thankyou-state');
let rates = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('.btn');
const selectedRate = document.querySelector('.selected-rate');

const rateArr = [...rates]
rateArr.forEach(rate => {
    rate.addEventListener('click', (e) => {
        rate.classList.toggle('active');
        rateArr.forEach(element => {
            if(element !== e.target) {
                element.classList.remove('active')
            }
        })    
    })
});


function addRating() {
    rateArr.forEach(rate => {
        if(rate.classList.contains('active')) {
            selectedRate.innerHTML = rate.textContent;
        } 
    ratingState.style.display = 'none';
    thankyouState.style.display = 'flex'
    });
}

submitBtn.addEventListener('click', addRating)