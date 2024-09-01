// Task 1: Variables and Data Types
let employeeName = "Candy Man";
const employeeID =33;
var isactive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof (employeeID));
console.log(isactive, typeof (isactive));

// Task 2: Compound Data Types
let products = ["cottoncandy","lollipops","chocolatebars"];
const productDetails = {
    name: products,
    price: 5.00,1.50,1.25,
    instock: cottoncandy,lollipops,
}
console.log(products,productDetails);

// Task 3: Assignment Operators
let accountBalance = 2500;
console.log("initialBalance:", accountBalance);// Output: initalBalance 2500

accountBalance +=500;
console.log("UpdatedBalance:", accountBalance); // Output: Updated Balance: 3000
accountBalance -=250;
console.log("UpdatedBalance:", accountBalance); // Output: Updated Balance: 2750
accountBalance *=2;
console.log("UpdatedBalance:", accountBalance); // Output: Updated Balance: 5500
accountBalance /=1.5;
console.log("UpdatedBalance:", accountBalance); // Output: Updated Balance: 3666.67
accountBalance %=36.67
console.log("UpdatedBalance:", accountBalance); // Output: Updated Balance: 36.67

// Task 4: Comparison Operators
let employeeScore1 = 80
let employeeScore2 = 65

employeeScore1 > employeeScore2;
console.log(employeeScore1 > employeeScore2); // Output: true
employeeScore1 < employeeScore2;
console.log(employeeScore1 < employeeScore2); // Output: false
employeeScore1 >= employeeScore2;
console.log(employeeScore1 >= employeeScore2); // Output: false
employeeScore1 <= employeeScore2;
console.log(employeeScore1 <= employeeScore2); // Output: false
employeeScore1 === employeeScore2;
console.log(employeeScore1 === employeeScore2); // Output: false

//Task 5: Logical Operators
let haskeyCard = true;
let hasPermission =true;
console.log(haskeyCard && hasPermission); // Output: true has access
console.log(haskeyCard || hasPermission); // Output: true has access
console.log(!hasPermission); // Output: false no access
