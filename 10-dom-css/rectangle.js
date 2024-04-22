let colorChanged = false
function changeColor() {
    const div = document.querySelector('.int-div')
    if (colorChanged === true) {
        div.classList.remove('int-div-clicked')
        colorChanged = false
    } else {
        div.classList.add('int-div-clicked')
        colorChanged = true
    }
}