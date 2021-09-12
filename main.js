
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

    function submitForm(evt) {
        const loginPhoneRegEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        const isNameValid =
            loginName.value.length > 3 && loginName.value.trim() !== "";
        const isPhoneValid = loginPhoneRegEx.test(loginPhone.value);
        const isFormValid = isNameValid && isPhoneValid;

        if (isFormValid) {
            loginName.classList.remove("invalid");
            loginPhone.classList.remove("invalid");
        } else {
            evt.preventDefault();
            loginName.classList.add("invalid");
            loginPhone.classList.add("invalid");
            errorPhone.classList.remove("hidden");
            errorName.classList.remove("hidden");
        }
    }

    authButton.addEventListener("click", submitForm);
})();