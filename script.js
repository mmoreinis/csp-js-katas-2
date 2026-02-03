/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * Perform basic arithmetic as a calculator
 * @param: none (main never gets params)
 * @return: none (main never gets returns)
 */
function main(){
    let result;
    let operation = prompt("What operation do you want? +, -, *, /");
    let a = parseInt(prompt("Enter the first number."));
    let b = parseInt(prompt("Enter the second number."));
    if (operation == "+"){
          result =add(a,b);
    }
    else if (operation == "-")  result =subtract(a,b);
    else if (operation == "*")  result =muiltiply(a,b);
    else {
          result =divide(a,b);
    }
    alert(a + operation + b + "=" + result);
}
 // Ask the user what operation they want (+, -, *, /)
 // Ask the user for the first number (a)
 // Parse a as an integer
 // Ask the user for the second number (b)
 // Parse b as an integer
 // Based on the operation, send the numbers to the right function as arguments 
 // store the returned value in variable called result
 // Alert the equation a + operation + b = result

/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
return a+b;
}
/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */

/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */
function add(a,b){
return a+b;
}
/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
function add(a,b){
return a+b;
}