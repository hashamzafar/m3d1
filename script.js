

// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
const sum = function(n1,n2){
    if(n1 === n2){
        return n1* 3
    }else{
        return n1 + n2
    }

}
// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.
const numbers = function (num1,num2){
    if (num1 === 50 || num2 === 50|| num1 + num2 === 50){
    return true
    }else{
        return false
    }
}
console.log(numbers(25 , 25))
// 3)
// Create a function to remove a character at the specified position of a given string and return the new string.

const str = function(string){
   return string = string.substring(1)
    
}
let stg = "this is a string"
console.log(str(stg))

// 4)
//  Create a function to find the largest of three given integers.
const largest = function(n1,n2,n3){
    if (n1 >n2 || n1>n3){
        return n1
    }else if (n2>n1 || n2>n3){
        return n2
    }else{
    return n3
}
    
}

// 5)
// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
 const range = function(num){
     if (num >= 40 && num <= 60 || num >= 70 && num <= 100 ){
         return num
     }else{
         return "out of range"
     }
 }
 console.log(range(40))
// 6) 
// Create a function that creates and returns the specified number of copies of a given string (positive number).

// 7)
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.
const city = function(str){
    if (str.startsWith('Los')){
    return 'Los angeles'
}else if( str.startsWith("new") ){
    return "New york"
}else {
    return
}


}
console.log(city('Los'))
// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.
let myarray = [53,55,9]
const integers = function(a){
    let total = 0
    for (let i in a){
        total += a[i]
    }
    return total
   
}
 console.log(integers(myarray))
// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
let myarray= [1,3,4,5]
 const contains =function(arr , check){
     for (let i=0; i< arr.length; i++){
         if (arr[i] === check){
             return true
         }else{
             return false
         }
     }
 }
 console.log(contains(myarray, 1))
// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
let myarray2= [1,3,4,5]
const contains2 =function(arr){
   if(arr.includes(1 || 3)) {
    return false
}else{
    return true
}
}
console.log(contains2(myarray2))



// 11)
// Create a function to find the longest string from a given array of strings.
let myArray3 = ['hello','world', 'of', 'string']

const longest = function(){
    let long = 0
    for (let i = 0; i < myArray3.length; i++){
        if (myArray3[i].length > long){
            long = myArray3[i].length
        }
    }
    return long
}
console.log(longest(myArray3)
// 12)
// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const degrees = function(deg){
    if (deg > 0 && deg < 90){
        return " Acute angle"
    }else if(deg === 90){
        return "Right angle"
    }else if (deg > 90 && deg < 180 ){
        return " Obtuse angle"
    }else if (deg === 180 ){
        return "Straight angle "
    }else{
        return 'wrong angle'
    }

}
console.log(degrees(180))

13)
Create a function to find the index of the greatest element of a given array of integers

14)
Create a function to get the largest even number from an array of integers.

15)
Create a function to check from two given integers, whether one is positive and another one is negative.

16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)
Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/