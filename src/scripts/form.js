import closedPopup from "./closedPopup.js";

const myForm = document.querySelector('.js-form');
const loadButton = document.querySelector('.js-form-btn');
const errors = document.querySelectorAll('.js-form-error');
const popup = document.querySelector(".js-popup");
const popupTitle = document.querySelector('.js-popup-title');


function sendForm() {
    event.preventDefault();
    if(checkVal(myForm)) {
        let formData = new FormData(myForm);
        formData.append('name', 'dima');
        formData.append('phone', '+79151111111');
        formData.append('comment', 'qwerty');
        formData.append('to', 'senior.ribnickow1985@yandex.ru');
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', function() {
            console.log(xhr.response);
            if (xhr.response) {
                popup.classList.add('active');
                popupTitle.innerText = 'Сообщение отправлено!';
                console.log(JSON.parse(xhr.response));
            } else {
                popup.classList.add('active');
                popupTitle.innerText = 'Ошибка!';
            } 
        });
    };
}

function checkVal(form) {
    let valid = true;
    if(!checkValFild(form.elements.name)) {
        valid = false;
    }
    if(!checkValFild(form.elements.email)) {
        valid = false;
    }
    if(!checkValFild(form.elements.message)) {
        valid = false;
    }
    return valid;
}

function checkValFild(field) {
    if(!field.checkValidity()) {
        errors.forEach((error) => {
            error.textContent = field.validationMessage;
            error.classList.add('active');
        });
            return false;
    } else {
        errors.forEach((error) => {
            error.textContent = '';
            error.classList.remove('active');
        });
            return true;
    }  
}

closedPopup();

loadButton.addEventListener('click', sendForm)


