let iphoneClicked = false
function onIphoneClicked() {
    const btn = document.querySelector('.iphone-btn')
    if (iphoneClicked === false) {
        btn.classList.add('filter-btn-clicked')
        iphoneClicked = true
    } else {
        btn.classList.remove('filter-btn-clicked')
        iphoneClicked = false
    }
}

let samsungClicked = false
function onSamsungClicked() {
    const btn = document.querySelector('.samsung-btn')
    if (samsungClicked === false) {
        btn.classList.add('filter-btn-clicked')
        samsungClicked = true
    } else {
        btn.classList.remove('filter-btn-clicked')
        samsungClicked = false
    }
}

let xiaomiClicked = false
function onXiaomiClicked() {
    const btn = document.querySelector('.xiaomi-btn')
    if (xiaomiClicked === false) {
        btn.classList.add('filter-btn-clicked')
        xiaomiClicked = true
    } else {
        btn.classList.remove('filter-btn-clicked')
        xiaomiClicked = false
    }
}