
let tyreSelected = ''
function onTyreBrandClicked(brandName) {
    let btn = document.querySelector(`.${brandName}`)
    if (tyreSelected !== '') {
        let oldSelectedBtn = document.querySelector(`.${tyreSelected}`)
        oldSelectedBtn.classList.remove('filter-btn-selected')
    }
    
    if (btn.classList.contains('filter-btn-selected') === false) {
        btn.classList.add('filter-btn-selected')
        tyreSelected = brandName
    } else {
        btn.classList.remove('filter-btn-selected')
    }
}