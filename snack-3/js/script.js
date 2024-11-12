// DATI
const items = ["item1", "item2", "item3", "item4", "item5"];

// ESECUZIONE LOGICA

/**
 * Funzione che ritorna un nuovo array con i valori che hanno la posizione compresa tra due numeri
 * @param {array} array
 * @param {number} min
 * @param {number} max
 * @returns {array}
 */

const numberIntervalArray = (array, min, max) => {
    const newItems = [];
    for (let i = 0; i < array.length; i++) {
        const curItem = array[i];
        if ((i >= min) && (i <= max)) {
            newItems.push(curItem);
        }
    }
    return newItems;
};

console.log(numberIntervalArray(items, 1, 3));
