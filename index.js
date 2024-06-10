

// letter grade
// user marks input





// control statement 2 types

//  conditional control statement 
// if, else if, else  ,switch
// Loop control statement - for,while, do while
// Loop Control statement


// var num = prompt("Enter a number : ");
// if (num > 0)
//     console.log("Positive");

// else if (num < 0)
//     console.log("Negative");

// else (num == 0)
//     console.log("Zero");


// var marks = prompt("Enter your marks : ");

// if (marks > 100 || marks < 0 )
//     console.log("Invalid Marks");

// else if(marks >= 80 && marks <= 100)
//     console.log("A+");
// else if(marks >= 70 && marks <= 79)
//     console.log("A");
// else if(marks >= 60 && marks <= 69)
//     console.log("A-");
// else if(marks >= 50 && marks <= 59)
//     console.log("B");
// else if(marks >= 40 && marks <= 49)
//     console.log("C");
// else if(marks >= 33 && marks <= 39)
//     console.log("D");
// else
//     console.log("Fail");



// var num1 = prompt("Enter num1 : ");
// var num2 = prompt("Enter num2 : ");
// var num3 = prompt("Enter num3 : ");


// if (num1 > num2 && num1 > num3)
//     console.log("Large number =" + num1);

// else if (num2 > num1 && num2 > num3)
//     console.log("Large number =" + num2);
// else 
//     console.log("Large number =" + num3)



// var letter = prompt("Enter a letter : ");
// letter.toLowerCase();

// if(letter == "a" || letter == "e"  || letter == "i" || letter =="o" || letter == "u" )
//     console.log("Vowel");
// else
//     console.log("Constant");

// var digit = prompt("Enter any digit : ");

// switch(digit) {
//     case "0":
//         console.log("Zero");
//         break;
//     case "1":
//         console.log("One");
//         break;
//     case "2":
//         console.log("Two");
//         break;
//     case "3":
//         console.log("Three");
//         break;
//     case "4":
//         console.log("Four");
//         break;
//     case "5":
//         console.log("Five");
//         break;
//     case "6":
//         console.log("Six");
//         break;    
//     case "7":
//         console.log("Seven");
//         break;

//     default : 
//         console.log("Not a digit")
 
// }


// if(digit == 0);
//     console.log("Zero");
// else if( digit ==1)
//     console.log("One");
// else if( digit ==2)
//     console.log("Two");
// else if( digit ==3)
//     console.log("Three");
// else if( digit ==4)
//     console.log("Four");
// else if( digit ==5)
//     console.log("Five");
// else if( digit ==6)
//     console.log("Six");
// else    
//     console.log("Not a Digit");


// var letter = prompt("Enter any Letter: " );

// switch(letter){
//     case "a":
//     console.log("Vowel");
//         break;
// case "e":
//     console.log("Vowel");
//     break;
// case "i":
//     console.log("Vowel");
//     break;
// case "o":
//     console.log("Vowel");
//     break;
// case "u":
//     console.log("Vowel");
//     break;
// default:
//     console.log("consonent")
// }

// var m = parseInt(prompt("Enter the starting number: "));
// var n = parseInt(prompt("Enter the last number: "));

// var sum = 0;

// for (var x = m; x <= n; x = x + 1 ){
//     sum = sum + x;
// } 

// document.write(sum);


// for (var x=1; x<=5; x++){
//     var num1 =parseInt(prompt("Enter first number : ")) ;
//     var num2 =parseInt(prompt("Enter second number: ")) ;
//     var sum = num1 + num2;
//     console.log("Result = " + sum);

// }

// for (var i=1; i<= 100; i= i + 1){
//     document.write(" " + i);
    
// }


// for (var i=1; i<=100; i=i+1){
//     document.write(' '+ i);
// }


// var i=1;
// while (  i<=100 ){
//     document.write(' '+ i);
//     i=i+1 ;
// }


// 1 + 2+ 3+4
// 2+4+6+.....+100


// var i = 2;
// var sum = 0;


// while( i<= 100){
//     sum = sum + i;
//     i = i + 2;
// }
// document.write(sum);


//  write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100 


// var i =1;
// var sum = 0;

// while (i <= 50) {
//     if(i % 3 == 0 && i % 5 == 0){
//         document.write(" "+i);
//         sum = sum +i;
//     }
    
//     i = i +1;
// }
// document.write(" sum = " + sum);
// document.write("<h1> END </h1>");

// var i =0;


//     do {
//         document.write(" " + i);
//         i++;
//     } while(i <= 10  );


    // var i = 1;

    // do{
    //     document.write(" " + i );
    //     i++;
    // } while (i <= 20);


// for (var i = 1; i <= 100; i++){
//     if(i %2 == 0) {
//         continue;
//     }
//     document.write(" " + i);
// }

//  document.write(" End");



// var num = 8;
// var result = num * num;
// document.write("result = " + result + "<br>");


// var num = 12;
// var result = num * num;
// document.write("result = " + result + "<br>");

// creating a function

// function square(num1,num2)
// {
//     var result = num1 * num2;
//     // document.write("Result = " + result + "<br>");
//     return result;
// }
//calling function

// var x = square(5,6);

// document.write( "result = "+ x );


//add function

// function addition (x,y)
// {
//     var result = x + y ;
//     document.write("Sum =" + result + "<br>") ;

// }

//sub function

// function subtraction (x,y){
//     var result = x - y ;
//     document.write("Sub =" + result + "<br>") ;
// }

// addition(10,20);
// subtraction(464,54)


//craeting a function
//calling a function
//how to pass value in function
//returning a value



// var name1, name2, name3 , name4;

// name1 = "Anis";
// name2 = "Lima";
// name3 = "shipa";
// name4 = "Rinku";
// // console.log(name3);


// var names = new Array(5);
// names[0] = "Anis";
// names[1] = "Lima";
// names[2] = "shipa";
// names[3] = "Rinku";

// var names = ["Anis", "Lima","shipa", "Rinku","suma" ]


// names.push("sokina");
// names.push("Liton");
// names.push("Tara");
// names.push("Lina");
// console.log(names.length);

// names.pop();
// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names.length);



// var country1 = ["Bangladesh", "India" ];
// var country2 = ["Pakistan", "Nepal"];

// var country = country1.concat(country2);
// console.log(country);


// var num = new Array();
// var sum = 0;

// for(var i = 0; i < 5; i++)
// { 
//     num[i] = parseInt(prompt("Enter a number : " ));
//     // console.log(num[i]);
//     // sum = sum + num[i];
// }
// var sum = 0;
// for (var i = 0; i < 5; i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }

// console.log("sum = " + sum );

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);


// var names = ["Anis", "rabeya", "Kolpona"];
// console.log(names)

// names.shift();
// console.log(names)

// // unshift = opposite of push

// names.unshift("Sagor");
// console.log(names);

// names.splice(2,1,"karim","Rahim");
// console.log(names);


// console.clear();
//  function highestScore(scores){

//     let max = scores[0];
//     for(var x = 1; x < scores.length; x++){
//         if(max < scores[x]){
//             max = scores[x];        }
//     }

//     return max;
//     // console.log(scores);
//  }
//  let scores =[12,34,56,87,65,78];
//  var maxScores = highestScore(scores);

// console.log(maxScores)


// function highestRunScorer(playersInfo){


//     var highestRunScorer = playersInfo[0][0];
//     var highestRunScore = playersInfo[0][1];
//     for(var x = 1; x < playersInfo.length; x++){
//         if(highestRunScore < playersInfo [x][1]){

//         }
//     }
// }
// var playersInfo = [
//     ["Ashraful", 95],
//     ["Mizan", 25],
//     ["Rakib",45],
//     ["lu",104],
// ];

// highestRunScorer(playersInfo);



