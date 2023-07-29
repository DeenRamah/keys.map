//map() = this method creates a new array with the results of calling a provided function on every element in the calling array

const numbers = [1,2,3,4,5,6]
const squaredNumbers = numbers.map((number) => {
    return number * number;  // square each element in the array
})

console.log(squaredNumbers);// output will be [1,2,9,16,25]