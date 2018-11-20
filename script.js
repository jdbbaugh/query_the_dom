let firstSection = document.querySelector('.article__header');
firstSection.textContent = "Welcome to the Joey Blog";

let classChange = document.querySelectorAll('.article__header');

for (let i = 0; i < classChange.length; i++) {
    classChange[i].classList.add('important')
};

let removeDash = document.querySelector('.dashed');

removeDash.classList.remove('dashed');

let goldenAdd = document.querySelector('.article__footer');

goldenAdd.classList.add('goldenrod');