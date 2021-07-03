
// function map(array, callback) {
//     const newArr = [];

//     for (const element of array) {
//         newArr.push(callback(element));
//     }
// }
// const oldAccounts = [
//     { userID: 15, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 63, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 97, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 12, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 44, title: 'Developer Apprentice', accessLevel: 'user' }
// ];


// const newEngineers = map(oldAccounts, function (account) {
//     return Object.assign({}, account, { accessLevel: 'admin' });
// });

// console.log(newEngineers)
// console.log(oldAccounts)


// REDUCER CODE
// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
// ];

// function getTotalAmountForProducts(products) {
//     let totalPrice = 0;
//     for (const banana of products) {
//         totalPrice += banana.price;
//     };

//     return totalPrice
// }

// console.log(getTotalAmountForProducts(products));

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
// ];

// function ourReduce(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {
//         accum = reducer(accum, element);

//     };

//     return accum;
// }

// function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount
// }

// console.log(ourReduce(couponLocations, couponCounter, 3))

const hogwartsHouses = {
    "Slytherin": [],
    "Gryffindor": [],
    "Hufflepuff": [],
    "Ravenclaw": []
}

sortingHat.assign(studentName);

incomingStudents.reduce(function (houses, student) { houses[sortingHat.assign(student)].push(student) }, hogwartsHouses)