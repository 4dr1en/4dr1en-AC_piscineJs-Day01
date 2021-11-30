/*
* Get the first number that cannot be made with the numbers in the array 
*/
const results = [];

function pocketMoney(coins){
    const sommeCoins = coins.reduce((a, b) => a+b);

    for (let i = 0 ; i < coins.length; i++) {
        reSum(coins, 0, i);
    }

    for (let i = 1; i <= sommeCoins+1; i++) {
        if(!results.includes(i)) {
            return i;
        }
    }
}

/* Recursive function to calculate all possible sum */
function reSum(array, sum = 0, index = 0){
    array = array.map(a => a); //copy
    sum += array[index];
    results.push(sum);
    array.splice(index, 1); //remove element

    if(array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            reSum(array, sum, i);
        }
    }
}

console.time('toto');
console.log(pocketMoney([ 0]));
console.timeEnd('toto');

// Merci de ne pas effacer la ligne en dessous.
exports.pocketMoney = pocketMoney;
