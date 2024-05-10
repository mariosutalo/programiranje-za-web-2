
let brandSelected = ''
function onPhoneClicked(brandName) {
    let btn = document.querySelector(`.${brandName}`)
    if (brandSelected !== '') {
        let oldSelectedBtn = document.querySelector(`.${brandSelected}`)
        oldSelectedBtn.classList.remove('filter-btn-selected')
    }
    
    if (btn.classList.contains('filter-btn-selected') === false) {
        btn.classList.add('filter-btn-selected')
        brandSelected = brandName
    } else {
        btn.classList.remove('filter-btn-selected')
    }
}