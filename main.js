
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerHTML = this.innerHTML;
        select.classList.remove('is-active');

    }

};


select();


(function () {
    const loginName = document.querySelector("#name"),
        loginPhone = document.querySelector("#phone"),
        authButton = document.querySelector(".auth"),
        errorName = document.querySelector(".right__error-name"),
        errorPhone = document.querySelector(".right__error-phone");

    function submitName(evt) {
        const loginNameRegEx = /^[\w'\-,.][^0-9_!¡?÷¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        const isNameValid = loginNameRegEx.test(loginName.value);

        if (isNameValid) {
            loginName.removeAttribute('id');
            loginName.classList.add("true__name");
        } else {
            evt.preventDefault();
            errorName.classList.remove("hidden");
        }
    }

    function submitPhone(evt){
        const loginPhoneRegEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        const isPhoneValid = loginPhoneRegEx.test(loginPhone.value);

        if (isPhoneValid) {
            loginPhone.removeAttribute('id');
            loginPhone.classList.add("true__phone");
        } else {
            evt.preventDefault();
            errorPhone.classList.remove("hidden");
        }
    }

    authButton.addEventListener("click", submitName);
    authButton.addEventListener("click", submitPhone);
})();