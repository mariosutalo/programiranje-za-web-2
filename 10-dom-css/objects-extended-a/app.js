// // metod, property

function showDetails() {
    const car = {
        brand: 'Citroen',
        model: 'C5',
        price: 1000,
        power: 100,
        currency: 'eur',
    }
    const car2 = {
        brand: 'Bmw',
        model: 'f30',
        price: 10000,
        power: 130,
        currency: '$',
    }
    const p = document.querySelector('#car-info-p')
    p.innerHTML = `Car model is ${car2.model}, and price is ${car2.price}${car2.currency}`
    // ISPISATI U P: Car model is C5, and price is 1000eur.
}