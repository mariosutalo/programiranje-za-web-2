let isYellow = false
function changeColor() {
    const div = document.querySelector('.int-div')
    if (isYellow === false) {
        div.classList.add('int-div-mouse-over')
        isYellow = true
    } else {
        div.classList.remove('int-div-mouse-over')
        isYellow = false
    }
}