// DATI
const bikes = [
    { nome: "bike1", peso: 10 },
    { nome: "bike2", peso: 20 },
    { nome: "bike3", peso: 30 },
    { nome: "bike4", peso: 40 },
    { nome: "bike5", peso: 50 },
];

/**
 * Funzione che calcola il peso minore tra gli elementi di un array
 * @param {array} array
 * @returns {number}
 */

function lighterBike(array) {
    let ligtherWeight = bikes[0].peso;
    for (let i = 0; i < bikes.length; i++) {
        const curBike = bikes[i];
        if (curBike.peso < ligtherWeight) {
            ligtherWeight = curBike.peso;
        }
    }
    return ligtherWeight;
}

console.log(lighterBike(bikes));