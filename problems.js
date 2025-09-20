// Reserve a string
// function reverseString(str){
//     let result = "";
//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i]
//     }
//     return result
// }
// console.log(reverseString("Hello"))

// Find Maximum number in an array

// function findMax(arr){
//     let max = arr[0];
//     for(i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max= arr[i];
//         }
//     }
//     return max
// }
// console.log(findMax([5,6,2,1,8]))
// console.log(findMax([11,33,4,6,30]))
// console.log(findMax([34,45,65,32,1]))
// console.log(findMax([6,9,2,0,1]))



// Find minimun number in an array

// function findMin(arr){
//     let min = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(findMin([2,4,10,34,5]))
// console.log(findMin([11,33,4,6,30]))
// console.log(findMin([34,45,65,32,1]))
// console.log(findMin([6,9,2,0,1]))

// Sum of an array
// function sumArr(arr){
//     let sum = 0;
//     for(i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum
// }
// console.log(sumArr([2,4,10,34,5]))
// console.log(sumArr([11,33,4,6,30]))
// console.log(sumArr([34,45,65,32,1]))
// console.log(sumArr([6,9,2,0,1]))

//checks if a string is palindrome
// function isPalindrome(str){
//     let left =0,right=str.length-1;
//     while (left<right){
//         if(str[left]!==str[right]){
//             return false;

//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("madam"))
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("racecar"))

//with built in methods

// function isPalindrome(str){
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrome("madam"))
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("racecar"))


// Modify a function
// function greek(){
//     console.log("Hello I am function")
// }

// greek = function(){
//     console.log("Hello I am a modified function")
// }

// greek();

// Returning a function in other function 

// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());