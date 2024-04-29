let circleClicked = false

function onCircleClicked() {
    const div = document.querySelector('.circle-div')
    if (circleClicked === false) {
        div.classList.add('circle-div-clicked')
        circleClicked = true
    } else {
        div.classList.remove('circle-div-clicked')
        circleClicked = false
    }
}