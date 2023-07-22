// All console.log tests are commented out, uncomment
// to verify the results.

// Q1. Calculate the sum of two numbers.

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(sumOfTwoNumbers(3 , 2))
// console.log(sumOfTwoNumbers(-3, -6))
// console.log(sumOfTwoNumbers(7, 3))

// Q2. Convert hour into seconds.

function hoursIntoSeconds(hour1) {
  return hour1 * 3600;
}

// console.log(hoursIntoSeconds(2))
// console.log(hoursIntoSeconds(10))
// console.log(hoursIntoSeconds(24))

// Q3. Calculate the perimeter of a rectangle.

function calcPerimeterRectangle(width1, height1) {
  return width1 * 2 + height1 * 2;
}

// console.log(calcPerimeterRectangle(6, 7))
// console.log(calcPerimeterRectangle(20, 10))
// console.log(calcPerimeterRectangle(2, 9))

// Q4. Calculate the area of a triangle.

function calcTriangleArea(base1, height2) {
  return base1 * 0.5 * height2;
}

// console.log(calcTriangleArea(3, 2))
// console.log(calcTriangleArea(10, 10))
// console.log(calcTriangleArea(20, 20))

// Q5. Append "Frontend" to the string argument.

function appendFrontend(string1) {
  return string1 + "Frontend";
}

// we can use (+num) inside a function to convert the argument
// to a number type.

// console.log(appendFrontend('Apple'))
// console.log(appendFrontend('Banana'))
// console.log(appendFrontend('Orange'))

// Q6. Return true if the sum of 2 numbers is greater than 100,
// otherwise return false.

// function sumGreaterThan100(num3, num4) {
//     sum = num3 + num4;
//     if (sum > 100) {
//         return true;
//     }
//     return false
// }

function sumGreaterThan100Better(num3, num4) {
  return num3 + num4 > 100;
}

// console.log(sumGreaterThan100Better(20,10))
// console.log(sumGreaterThan100Better(50,60))
// console.log(sumGreaterThan100Better(100,-50))

// Q7. Return true if the number is less than or equal to
// zero, otherwise return false.

function lessThanOrEqualToZero(num5) {
  return num5 <= 0;
}

// console.log(lessThanOrEqualToZero(3))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))

// Q8. Return the opposite of the boolean input.

function oppositeBoolean(boolean1) {
  return !boolean1;
}

// console.log(oppositeBoolean(true))
// console.log(oppositeBoolean(false))

// Q9. Return true if the number is 0, otherwise return false.

function isNotZero(num6) {
  return num6 !== 0;
}

// console.log(isNotZero(5))
// console.log(isNotZero(0))
// console.log(isNotZero(null))

// Q10. Return the remainder of 2 numbers.

function calcRemainder(num7, num8) {
  return num7 % num8;
}

// console.log(calcRemainder(4,2))
// console.log(calcRemainder(7,8))
// console.log(calcRemainder(9,8))

// Q11. If a number is odd return true, otherwise return false.

function isNumberOdd(num9) {
  return num9 % 2 === 1;
}

// console.log(isNumberOdd(1))
// console.log(isNumberOdd(2))
// console.log(isNumberOdd(3))

// Q12. If a number is even, return 1, otherwise return -1.

function booleanInteger(num10) {
  if (num10 % 2 === 0) {
    return 1;
  }
  return -1;
}

function booleanIntegerTernary(num11) {
  return num11 % 2 === 0 ? 1 : -1;
}

// console.log(booleanInteger(1))
// console.log(booleanInteger(2))
// console.log(booleanInteger(5))

// console.log(booleanIntegerTernary(1))
// console.log(booleanIntegerTernary(2))
// console.log(booleanIntegerTernary(5))

// Q13. Check if a user is logged in AND subscribed using string arguments.

function isLoggedInAndSubscribed(string2, string3) {
  return (string2 === "LOGGED_IN") && (string3 === "SUBSCRIBED")
}

// console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_IN','NOT_SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED'))

// Q14. Check if a user is logged in OR subscribed.

function isLoggedInOrSubscribed (string4, string5) {
    return (string4 === 'LOGGED_IN') || (string5 === 'SUBSCRIBED')
}

// console.log(isLoggedInOrSubscribed('LOGGED_IN','SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_IN','NOT_SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT','SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT','NOT_SUBSCRIBED'))