const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  // Your Code Here
  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] %2 === 0){
        evenNumbers.push(number[i]);
    } else {
        oddNumbers.push(number[i]);
    }
}
return [evenNumbers, oddNumbers];
}
console.log(result(number));
