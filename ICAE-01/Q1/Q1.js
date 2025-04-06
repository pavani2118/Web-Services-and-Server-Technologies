function findMaxPurchase(budget, keyboardPrices, mousePrices) {
    let maxPurchase = -1;
	
    for (let keyboardPrice of keyboardPrices) {
        for (let mousePrice of mousePrices) {
            let totalPrice = keyboardPrice + mousePrice;

            if (totalPrice <= budget && totalPrice > maxPurchase) {
                maxPurchase = totalPrice;
            }
        }
    }
    return maxPurchase;
}
console.log(findMaxPurchase(60, [40, 50, 60], [5, 8, 12]));
console.log(findMaxPurchase(10, [3, 1], [5, 2, 8]));  
console.log(findMaxPurchase(20, [30, 15], [8, 10, 6]));
