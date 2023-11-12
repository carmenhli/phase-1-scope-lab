// Write your solution in this file!

// 1
var customerName = 'bob';
console.log(customerName);

// 2
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// 3
function setBestCustomer(){
    bestCustomer = 'not bob';
}

// 4
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

// 5
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'someone else';
}