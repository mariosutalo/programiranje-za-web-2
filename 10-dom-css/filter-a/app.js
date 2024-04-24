let goodyearClicked = false
function onGoodyearClicked() {
    let btn = document.querySelector('.filter-btn-1')
    if (goodyearClicked === false) {
        btn.classList.add('filter-btn-selected')
        goodyearClicked = true
    } else {
        btn.classList.remove('filter-btn-selected')
        goodyearClicked = false
    }
}

let michelinClicked = false
function onMichelinClicked() {
    let btn = document.querySelector('.filter-btn-2')
    if (michelinClicked === false) {
        btn.classList.add('filter-btn-selected')
        michelinClicked = true
    } else {
        btn.classList.remove('filter-btn-selected')
        michelinClicked = false
    }
}

let falkenClicked = false
function onFalkenClicked() {
    let btn = document.querySelector('.filter-btn-3')
    if (falkenClicked === false) {
        btn.classList.add('filter-btn-selected')
        falkenClicked = true
    } else {
        btn.classList.remove('filter-btn-selected')
        falkenClicked = false
    }
}