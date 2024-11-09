
// ASSIGNMENT//////////////////////////////////////////



// var inter =Number(prompt());
// console.log (inter);

// one=======1==============================



// var num =Number(prompt('enter a number'));

// if(num%3==0 && num%4==0)
// {
//     console.log ('YES')
// }
// else (
//     console.log ('NO')
// )

//two==========2====================




// var num1 =Number(prompt('enter first num'));
// var num2 =Number(prompt('enter second num'));

// if (num1 >num2) {
//     console.log(num1);
// }
// else 
// {
//     console.log(num2);
// }

//three=======3=================================




// var num =Number(prompt('enter a number'));
// if (num>0)
// {
//     console.log('positive')
// }
// else {
//     console.log('negative')
// }

//four====4===========================

// var num1 = Number(prompt('enter first number'));
// var num2 = Number(prompt('enter second number'));
// var num3 = Number(prompt('enter third number'));
// var maxElement, minElement;
// if (num1 >= num2 && num1 >= num3) {
//     maxElement = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     maxElement = num2;
// } else {
//     maxElement = num3;
// }
// if (num1 <= num2 && num1 <= num3) {
//     minElement = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//     minElement = num2;
// } else {
//     minElement = num3;
// }
// console.log(`max element ${maxElement}`);
// console.log(`min element ${minElement}`);

// five=====5=========================================

// var number = Number(prompt('enter a number'));
// if (number%2==0) {
//     console.log('even')
// }
// else {
//     console.log('odd')
// }


// six===========6====================


// var char = prompt('enter a char');
// if (char =='a' || char =='e' ||char =='i' ||char =='o' ||char =='u') {
// console.log('vowel')
// }
// else {
//     console.log('Consonant')
// }


// SEVEN=======7========================

// var number = Number(prompt('enter a number'));

// for (i=1; i<=number;i++) {
//   console.log (i);
// }  

//eight===========8===================


// var number = Number(prompt('enter a number'));

// for (i=1; i<=12;i++) {
//        console.log (i*number);
//      }  

// nine======9===============================

// var number = Number(prompt('enter a number'));

// for (i=2; i<number; i+=2) {

// console.log(i);

// }

//ten=========10=========================


// var number = Number(prompt("Enter the  number:"));
// var exponent = Number(prompt("Enter the exponent:"));
// var result = 1;
// for (var i = 0; i < exponent; i++) {
//     result *= number;
// }

// console.log(`Output: ${result}`);


//=================11================
// var num1 = Number(prompt("Enter the  number1:"));
// var num2 = Number(prompt("Enter the  number2:"));
// var num3 = Number(prompt("Enter the  number3:"));
// var num4 = Number(prompt("Enter the  number4:"));
// var num5 = Number(prompt("Enter the  number5:"));

// var total= num1+num2+num3+num4+num5;
// var avg = total/5;
// var Percentage = (total/500) *100;
// console.log(`Total marks : ${total}`);
// console.log (` Average Marks: ${avg}`);
// console.log (` Percentage Marks: ${Percentage}`);


//=============12========================

// var month = Number(prompt("Enter Month Number (1-12):"));
// var days;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     days=31;
// }
// else if (month===4 || month===6 || month===9 || month===11 ){
//     days=30;
// }
// else if (month===2) {
//     days=28;
// }

// else {
//     console.log('inter a valid number')
// }

// console.log(days);

//=============13========================================
 
// var num1 = Number(prompt("Mark of Physics:"));
// var num2 = Number(prompt("Mark of Chemistry:"));
// var num3 = Number(prompt("Mark of Biology:"));
// var num4 = Number(prompt("Mark of  Mathematics:"));
// var num5 = Number(prompt("Mark of  Computer:"));

// var total = num1+num2+num3+num4+num5;
// var Percentage =(total/500)*100;

// console.log(`Percentage :${Percentage}`);

// if (Percentage>=90) {
//     console.log('Grade A')
// }
//  else if (Percentage>=80) {
//     console.log('Grade B')
// }

// else if (Percentage>=70) {
//     console.log('Grade C')
// }

// else if (Percentage>=60) {
//     console.log('Grade D')
// }

// else if (Percentage>=40) {
//     console.log('Grade E')
// }
// else {
//     console.log('Grade F')
// }

// ==================14============================


// var month = Number(prompt("Enter Month Number (1-12):"));
// var days;

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;
//     case 2:
//         days = 28;
//         break;
//     default:
//         console.log("Invalid month number. Please enter a number between 1 and 12.");
//         break;
// }
//     console.log(`Days in Month: ${days}`);

//==================15===========================
// var char = prompt("Enter an char:").toLowerCase();
// switch (char) {

//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log(`${char} is a vowel.`);
//         break;
// default:
//     console.log(`${char} is a consonant.`);
// }

// =================16===============================

// var num1 = Number(prompt("Enter a number:"));
// var num2 = Number(prompt("Enter a number:"));


// switch (true) {
//     case (num1>num2):
//         console.log(`The maximum number is: ${num1}`);
        
//         break;
//         case (num2 > num1):
//             console.log(`The maximum number is: ${num2}`);
//             break;
//         default:
//             console.log(" equal.");
// }
//===================17==================================

// var num = Number(prompt("Enter a number:"));
// switch (num % 2) {
//     case 0: 
//         console.log(`number is: even`); 

//         break;
//         case 1 : 
//         console.log(`number is: odd`); 
//         break;
//          default :
//          console.log(`inter a valid number`);  
// }

//===================18========================================
// var num = Number(prompt("Enter a number:"));
// switch (true) {
//     case (num>0): 
//         console.log(`number is: positive`); 

//         break;
//         case (num<0) : 
//         console.log(`number is: negative`); 
//         break;

//         case (num===0) : 
//         console.log(`number is: zero`); 
//         break;
        
//          default :
//          console.log(`inter a valid number`);  
// }
// ======================19===================================
// var num1 = Number(prompt("Enter a number1:"));
// var operation = prompt("Enter a operation (+ ,- ,*, /):");
// var num2 = Number(prompt("Enter a number2:"));


// switch (true) {
// case (operation==='+'):
// console.log (num1+num2);
// break;

// case (operation==='-'):
// console.log (num1-num2);
// break;
// case (operation==='*'):
// console.log (num1*num2);
// break;
// case (operation==='/'):

// if (num2 === 0) {
//     console.log("Error");
// } else {
//     console.log(`Result: ${num1 / num2}`);
// }
// break;
// default :
// console.log(`inter a valid op`);  
// }

//=====================20 end assignment=======================