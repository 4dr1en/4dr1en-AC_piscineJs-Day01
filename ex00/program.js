/*
* Return an array of number with each number of the array to the power of 2
*/

function tabTriCarre(array){
   return array.map(element => element * element);
}

console.log(tabTriCarre([1, 2, 3, 4, 5]));
// Merci de ne pas effacer la ligne en dessous.
exports.tabTriCarre =  tabTriCarre;