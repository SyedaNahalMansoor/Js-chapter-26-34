                                                ///Chapter - 26-30//
// Q : Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// Ans : var userInput = prompt("Enter a positive number:");
// var number = parseFloat(userInput);
// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number));

// Q : 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// Ans :  var userInput = prompt("Enter a negative number:");
// var number = parseFloat(userInput);
// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number));

// Q : Write a program that displays the absolute value of a number.E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// Ans : var number = parseFloat(prompt("Enter a number (positive or negative):"));
// var absoluteValue = Math.abs(number);
// document.write("The absolute value of " + number + " is " + absoluteValue);

// Q : Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
// Ans :  Generate a random number between 1 and 6 (like a dice)
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("<h2>The value of the dice is: " + diceValue + "</h2>");

// Q : Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
// Ans : var toss = Math.floor(Math.random() * 2) + 1;
// var result;
// if (toss === 1) {
//   result = "Heads";
// } else {
//   result = "Tails";
// }
// document.write("Coin Toss Result: " + result);

// Q : Write a program that shows a random number between 1 and 100 in your browser.
// Ans : var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);

// Q : Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// Ans : var userInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(userInput);
// document.write("Your weight is: " + weight + " kilograms");

// Q : Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// Ans : var secretNumber = 9;
// var userInput = +prompt("Enter the secret number between 1 and 10 ");
// if (userInput === secretNumber) {
//     alert("Congragulations You guess right");
// } else {
//     alert("Wrong answer , Try again!");
// };
   
                                               ///Chapter - 31-34///

// Q : Write a program that displays current date and time in your browser.
// Ans : var currentDate = new Date();
// document.write("Current Date and Time: " + currentDate);

// Q : Write a program that alerts the current month in words.For example December.
// Ans : var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var currentMonth = now.getMonth(); 
// alert("Current month: " + months[currentMonth]);

// Q : Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show
// Sun.
// Ans : var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var currentDay = now.getDay();
// var dayName = days[currentDay];
// alert("Today is : " + dayName);

// Q : Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// Ans : var today = new Date();
// var day = today.getDay(); 
// if (day === 0 || day === 6) {
//     alert("It’s Fun day");
// } else {
//     alert("It’s a working day");
// };
 
// Q : Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
// Ans : var today = new Date();
// var date = today.getDate();
// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// };

// Q : Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// Ans : var now = new Date();
// var hours = now.getHours(); 
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// };

// Q : Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// Ans : var laterDate = new Date("December 31, 2022");
// document.write("Later Date: " + laterDate);

// Q : Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
// Ans : var ramadanDate = new Date("March 23, 2023");
// var today = new Date();
// var diff = today - ramadanDate;
// var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
// alert(daysPassed + " days have passed since March 23, 2023");

// Q : Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
// Ans : var currentDate = new Date();
// document.write("Current Date & Time: " + currentDate + "<br>");
// currentDate.setHours(currentDate.getHours() + 1);
// document.write("Updated Date & Time After 1 hour: " + currentDate);

// Q : Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
Ans : // Bill Information
var customerName = "Syeda Nahal Mansoor";
var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var currentMonth = months[currentDate.getMonth()];
var numberOfUnits = 430;
var chargesPerUnit = 16;
var latePayment = 350;
var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePayment;
document.write("<h1>K-Electric Bill</h1>");
document.write("<b>Customer Name:</b> " + customerName + "<br>");
document.write("<b>Month:</b> " + currentMonth + "<br>");
document.write("<b>Number of Units:</b> " + numberOfUnits + "<br>");
document.write("<b>Charges per Unit:</b> " + chargesPerUnit.toFixed(2) + "<br><br>");
document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmount.toFixed(2) + "<br>");
document.write("<b>Late Payment:</b> " + latePayment.toFixed(2) + "<br>");
document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmount.toFixed(2));










