// Chapter 35 to 38

// Question 1:-
// function date(){
//     new Date()
//     document.write(new Date)
// }

// date()

// Question 2:-
// function fullname(){
//     var fname=prompt("What is you firstname.")
//     var lname=prompt("What is you lastname.")
//     document.write("Assalam Alaikum " +fname +" " +lname)
// }

// fullname()

// Question 3:-
// function addTwoNumbers() {
//     var num1 = +(prompt("Enter the first number"))
//     var num2 = +(prompt("Enter the second number"))
//     var sum = num1 + num2
//     return sum
// }

// var result=addTwoNumbers()
// document.write("The sum of two numbers is " +result)

// Question 4:-
// function calculate(num1, num2, operator) {
//     var result
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid Operator";
//     }
//     return result;
// }

// var num1 = prompt("Enter value 1")
// var num2 = prompt("Enter value 2")
// var operator = prompt("Enter the Operators (+,-,*,/)")

// var result = calculate(num1,num2,operator)

// document.write("The result is " + result)

// Question 5:-
// function square(x) {
//     return x * x
// }
// document.write(square(7))

// Question 6:-
// function factorial(n) {
//     if (n === 0)
//         return 1;
//     else {
//         return n * factorial(n - 1)
//     }
// }

// var result= prompt("Enter the factorial number")
// document.write(factorial(result))

// Question 7:-
// function displayNumbers(start, end) {
//     if (typeof start !== "number" || typeof end !== "number" || start > end) {
//         console.error("Invalid Input")
//         return
//     }
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// var start = +prompt("Enter the starting number")
// var end = +prompt("Enter the ending number")

// displayNumbers(start, end)

// Question 8:-
// function calculateHypotenuse(base, perpendicular) {
//     function calculatesquare(num) {
//         return num * num;
//     }
//     var base2 = calculatesquare(base);
//     var perpendicular2 = calculatesquare(perpendicular);
//     return Math.sqrt(base2 + perpendicular2);
// }

// document.write(calculateHypotenuse(3, 4))

// Question 9:-
// function calculateArea1(width, height) {
//     return width * height
// }

// function calculateArea2(width, height) {
//     var area = width * height
//     return area
// }

// var width = 5
// var height = 10

// document.write("Area of the rectangle with arguments as values: " + calculateArea1(width, height) + "<br>")
// document.write("Area of the rectangle with arguments as variables: " + calculateArea2(width, height))

// Question 10:-
// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/ /g, "");
//     var reversedstr = str.split("").reverse("").join("");
//     return str === reversedstr
// }

// var str1 = "racecar"
// var str2 = "madam"
// var str3 = "hello"

// document.write(isPalindrome(str1) + "<br>")
// document.write(isPalindrome(str2) + "<br>")
// document.write(isPalindrome(str3))

// Question 11:-
// function findLongestWord(str) {
//     var word = str.split(" ");
//     var longestword = "";
//     var longestwordlength = 0;

//     for (var i = 0; i < word.length; i++) {
//         var wordlength = word[i].length;
//         if (wordlength > longestwordlength) {
//             longestword = word[i];
//             longestwordlength = wordlength;
//         }
//     }
//     return longestword;
// }

// var str = "Web Development Tutorial";
// var longestword = findLongestWord(str);
// document.write(longestword)

