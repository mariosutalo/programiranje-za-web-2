function generateRandomNumber() {
    const input1 = document.querySelector('.first-input')
    const input2 = document.querySelector('.second-input')
    const errorMessage = document.querySelector('.warning-p')
    const input1Value = input1.value
    const input2Value = input2.value
    if (input1Value === '') {
        errorMessage.innerHTML = 'First input is empty'
    }

}