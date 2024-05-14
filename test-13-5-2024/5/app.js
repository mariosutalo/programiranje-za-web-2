const test = 'hi'

function calculateRectangleArea() {
    const input1 = document.querySelector('.first-input')
    const input2 = document.querySelector('.second-input')
    const sideA = Number(input1.value)
    const sideB = Number(input2.value)
    const surfaceArea = sideA * sideB
    const resultP = document.querySelector('.result-p')
    resultP.innerHTML = `Surface area is: ${surfaceArea}`
}