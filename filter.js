//this method creates a new array with all elements that pass the test implemented by the provided function

const nums = [10, 20, 30, 40]
const filterNumbers = nums.filter(numb => {
    return numb > 20;
})
console.log(filterNumbers)