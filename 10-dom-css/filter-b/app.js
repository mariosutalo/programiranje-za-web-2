let selectedButton = ''
function onPhoneClicked(phoneName) {
    const btn = document.querySelector(`.${phoneName}`)
    if (btn.classList.contains('filter-btn-clicked') === false) {
        if (selectedButton !== '') {
            const oldBtn = document.querySelector(`.${selectedButton}`)
            oldBtn.classList.remove('filter-btn-clicked')
        }
        btn.classList.add('filter-btn-clicked')
        selectedButton = phoneName
    } else {
        btn.classList.remove('filter-btn-clicked')
    }
}