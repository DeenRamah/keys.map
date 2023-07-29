//this method is similar to the reduce() method . however , it iterates over the array elements from rigth to left instead of drom left to rigth
const nuum = [10, 20,20,40]
const sum = nuum.reduceRight((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log(sum)