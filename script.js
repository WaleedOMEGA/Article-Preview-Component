// get html elements
const button = document.querySelector('.share button');
const tooltip = document.querySelector('.tooltip');
console.log(button);
console.log(tooltip);
button.addEventListener('click', function () {
    button.classList.toggle('active');
    tooltip.classList.toggle('active');
})