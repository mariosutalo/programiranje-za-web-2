function generateRandomNumber() {

    const input1 = document.querySelector('.first-input')
    const input2 = document.querySelector('.second-input')
    const errorMessage = document.querySelector('.warning-p')
    let input1Value = input1.value 
    let input2Value = input2.value
    if (input1Value === '') {
        errorMessage.innerHTML = 'First input is empty'
        setTimeout(() => {
            errorMessage.innerHTML = ''
        }, 3000);
        return
    }
    if (input2Value === '') {
        errorMessage.innerHTML = 'Second input is empty'
        setTimeout(() => {
            errorMessage.innerHTML = ''
        }, 3000);
        return
    }
    if (input2Value <= input1Value) {
        errorMessage.innerHTML = 'Number2 must be bigger than number 1'
        setTimeout(() => {
            errorMessage.innerHTML = ''
        }, 3000);
        return
    }
    input1Value = Number(input1Value) 
    input2Value = Number(input2Value)
    const randomNumber = Math.random() * (input2Value - input1Value) + input1Value
    const numberP = document.querySelector('.generated-number')
    numberP.innerHTML = `Random number is: ${randomNumber}`

}