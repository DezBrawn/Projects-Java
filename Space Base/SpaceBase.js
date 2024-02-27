/*

        Dezerae Brawner
        5-19-22
        Space Base Assignment

*/

// this is the function name
function play(die1, die2) // these are the parameters

{ // start of function body

    // this is one variable
    var die1 = 5;
    // this is the other variable
    var die2 = 2;
    
    var sum = die1+die2; // the sum of die1 & die2
    document.write("Die 1 = " + die1);
    document.write("<br/>"); // this means a line break

    document.write("Die 2 = " + die2);
    document.write("<br/>"); // line break

    document.write("Sum = " + sum); // returns the sum of die1 & die2
    document.write("<br/>"); // line break

    if (sum == 7 || sum == 11) // if return value equals 7
    
    {document.write("CRAPS - you lose"); // prints CRAPS - you lose
    document.write("<br/>"); //line break
}

else if (die1 == die2 && die1%2 == 0)

{
document.write("DOUBLES - you win"); // prints DOUBLES - you win
document.write("<br/>"); // line break
}

} // end of function body

document.write("Simple Craps"); // prints Simple Craps
document.write("<br/>"); // line break
play()
