function onTyreBrandClicked(brandName) {
    let btn = document.querySelector(`.${brandName}`)
    if (btn.classList.contains('filter-btn-selected') === false) {
        btn.classList.add('filter-btn-selected')
    } else {
        btn.classList.remove('filter-btn-selected')
    }
}