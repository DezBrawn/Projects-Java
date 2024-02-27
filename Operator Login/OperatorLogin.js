/*

    Dezerae Brawner
    6-1-22
    Mission Control Operator Login

*/

var UserName = prompt("What is your first and last name?"); // asking user to input first and last name
var BadgeNumber = prompt("What is your 3-digit badge number?"); // asking user to input badge number

while(UserName.length <= 0 || UserName.length > 20) // check to see if username is less than 20 characters
{
    UserName = prompt("Enter a name between 1 and 20 Characters...");
    // if username is greater than 20 characters, prompts user to enter a name less than 20 characters
}

while(BadgeNumber.length <= 0 || BadgeNumber.length > 3) // check to see if badge number is less than 3 characters
{
    BadgeNumber = prompt("Enter a badge number between 1 and 3 Characters...");
    // if badge number is greater than 3 characters, prompts user to enter a number less than 3 characters
}

document.write(UserName); // prints out the username entered
document.write("<br></br>"); // line break
document.write(BadgeNumber); // prints out the badge number entered
document.write("<br></br>"); // line break