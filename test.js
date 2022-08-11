// Declare a variable 'num' <--

// let num = 5
 //   console.log(num)


    // Write a statement that checks if an 'num' is positive or negative <--

    // if ( num > 0 ){
   //     console.log("This number is Positive")
   //  }else{
   //     console.log("This Number is Negative")
    // }

    
// ........................................................................................................................................................


    // Change the value of the variable save & open it again <--

   
    // let num = 0
    // console.log(num)

    // if ( num > 0 ){
    //    console.log("This number is Positive")
    // }else{
    //    console.log("This Number is Negative")
    // }

// .........................................................................................................................................................

    // You are tasked with setting up the security for a web site that only grants users over the age of 18+ access to the site. 
    // Write a conditional that gives users who are 18+ access and logs access denied for users who do not meet the given condition.


    // If age is above 18, and it's 19, it will say access granted!

    // let age = 19 

    // if( age > 18){
    //   console.log("Access Granted!")
    //}else{
    //   console.log("Access Denied")
    //}

// .........................................................................................................................................................

    //  It will get denied because age is 15
    
    //let age = 15

    //if( age > 18){
    //    console.log("Access Granted!")
    //}else{
     //   console.log("Access Denied")
    //}

// .........................................................................................................................................................

    // For Loop Structure

    //for (let i = 0; i < 10; i++ ) {
    //    console.log(i)
    //}

// .........................................................................................................................................................

    // Write a for loop that counts down from 10 to 1.

   // for (let i = 10; i >= 1; i--) {
   //     console.log(i)
   // }


// .........................................................................................................................................................

// Write a for loop for the given output: 1, 3, 5, 7, 9

//for (let i = 1; i < 10; i = i + 2){
 //   console.log(i)
//}


// .........................................................................................................................................................

// Create a loop that outputs multiples of 3 starting at 6 ending at 60.

//for (let i = 6; i <= 60; i+=3) {
//    console.log(i)
//}

// .........................................................................................................................................................

// Notes
//let students = ["Remy", "Jude",
//"Sujitha", "Kamara", "Blake"];

// push
//students.push ("Norman");
//   console.log(students)


// .........................................................................................................................................................

// Accessing elemnets in an array
//let movies = [
//    'BreakFast]',
//    'GoodFellas', 'HappyFeet']
//    console.log (movies [-1])
// ]

// .........................................................................................................................................................

// Exercise 1

for ( let i = 0; i <= 10; i ++){
    if ( i % 2 === 0){
        console.log(i)
    }
}

// Write an if/else statement for the following requirements:
// Exercise 2

let grades = [10, 30, 50, 70, 90, 20, 40, 60, 80, 100]
console.log(grades.length);
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 80) {
        console.log("You did a good job")
    }
    else if (grades[i] >= 70) {
        console.log("Keep trying")
    }
    else if (grades[i] >= 60) {
        console.log("ehhhh")
    }
    else if (grades[i] >= 55) {
        console.log("Not to good")
    }
    else {
        console.log("Bad Grade But You'll Get Em Next Time")  
    }
}

// Or you could import it like this:

let grade = 80;

if ( grade >= 80){
    console.log("You did a good job")
}
else if ( grade >= 70 && grade < 80)
{
    console.log("Keep trying")
}
else if( grade >= 60 && grade < 70)
{
    console.log("ehhhh")
}
else if( grade >= 55 && grade < 60)
{
    console.log("Not to good")
}
else 
{
    console.log("Bad Grade But You'll Get Em Next Time")
}


for (let i = 10; i <= 90; i += 20){
    console.log(i)

    // for(let j = 20; j <= 100; j += 20){
    //     console.log(j)
    // }
    if (i === 90){
        for(let j = 20; j <= 100; j += 20){
            console.log(j) }
        }
}

// .........................................................................................................................................................


// Exercise 3
// Write a program that prints the numbers from 1 to 100 and for multiples of '3' 
// print "Fizz" instead of the number and for 
// the multiples of '5' print "Buzz". 
// If can be multiplied by 3&5 console log 'FizzBuzz'

// for (let i = 1; i < 101; 1++) {
//    if (i % 3 === 0) {
//        if (i % 5 === 0) {  
//            console.log("FizzBuzz"); 
//        }
//        console.log("Fizz");
//    } else if (i % 5 === 0) {
//        console.log("Buzz");
//    } else {
//        console.log(i);
//    }
// }

// or you could do:

// for (let i = i; i < 101; 1++) {
    // --> IF MULTIPLES OF 3 <--
// if (i % 3 === 0) {
//    if (i % 5 === 0) {
//        console.log("FizzBuzz");
//    }
//    console.log("Fizz");
// }
// --> IF MULTIPLES OF 5 <-- 
// else if (i % 5 === 0) {
// if (i % 3 === 0) {
//    console.log("FizzBuzz");
// }
// console.log("Buzz");
// } else {
//    console.log(i)
// }
// else (log in that number)

// }
   
// .........................................................................................................................................................

// Write a nested if/else statement
// Declare a variable ‘num’
// Add an if/else statement that checks if ‘num’ is positive & greater than 100
// Add another statement that checks if ‘num’ is positive but less than 100
// Add an the final statement to check if ‘num’ is negative

// let num = 150;
//    console.log(Num)
// if (Num > 0 ){
//    if (Num >100)
//    {
//        console.log('Given the number is positive and Greater than 100')
//    }
//    else
//    {
//        console.log('Given number is positive and less than 100')
//    }
// }
// else
// {
//    console.log('Given number is Negative')
// }


