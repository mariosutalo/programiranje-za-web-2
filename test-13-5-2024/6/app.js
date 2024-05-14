let surfaceArea = 0
function calculateRectangleArea() {
    const input1 = document.querySelector('.first-input')
    const input2 = document.querySelector('.second-input')
    const sideA = Number(input1.value)
    const sideB = Number(input2.value)
    surfaceArea = sideA * sideB
    const resultP = document.querySelector('.result-p')
    resultP.innerHTML = `Surface area is: ${surfaceArea}`
    const rectangleDiv = document.querySelector('.rectangle-div')
    rectangleDiv.style.width = `${sideA}px`
    rectangleDiv.style.height = `${sideB}px`
}

function paintRectangle() {
    const rectangleDiv = document.querySelector('.rectangle-div')
    if (surfaceArea >= 100000) {
        if (rectangleDiv.classList.contains('yellow-div') === true) {
            rectangleDiv.classList.remove('yellow-div')
        }
        rectangleDiv.classList.add('red-div')
    } else {
        if (rectangleDiv.classList.contains('red-div') === true) {
            rectangleDiv.classList.remove('red-div')
        }
        rectangleDiv.classList.add('yellow-div')

    }

}