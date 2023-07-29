//reduce() = this method applies a function to each element of an array and reduces the array to a single value
 const numm = [10,20,30,40]
 //accumulator: it is the value that is returned from the previous iteration of the function
 //currenvalue:it is the current element being processed in the array
const sum = numm.reduce((accumulator, currentValue) =>{
   return accumulator + currentValue;
 })

 console.log(sum)// output:100