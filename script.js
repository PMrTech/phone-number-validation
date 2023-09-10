const indonesiaNumber = /^(0|62)\d{10,12}$/;
const validationButton = document.querySelector('.validation');
const phoneNumberInput = document.querySelector('.phone-number');
const errorMessage = document.querySelector('.error-message');
const getValueInput = () => {
    return phoneNumberInput.value;
}
function validation(){
    if(!indonesiaNumber.test(getValueInput())){
        let error = '';
        if(!/^0|62/.test(getValueInput())) error = 'bukan nomer indonesia';
        else if(!/\d{10, 12/.test(getValueInput())) error = 'nomer harus memiliki panjang 10-12 huruf'
        else error = 'periksa kembali nomer yang anda masukkan'
        
        phoneNumberInput.classList.add('error');
        errorMessage.textContent = error;
        errorMessage.style.opacity = 1;
    }else{
        alert('nomer valid');
        phoneNumberInput.classList.remove('error');
    }
}
validationButton.addEventListener('click', () =>    {
    validation();
})

