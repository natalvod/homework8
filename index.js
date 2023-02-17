//задание 1

const getResult = (array, callback) => {
    console.log(callback(array));
};
let sumArray = (array) => {

    let sumResult = array.reduce((el, el2) => el + el2);
    return Math.round(sumResult);
};
let multArray = (array) => {

    let multResult = array.reduce((el, el2) => el * el2);
    return Math.round(multResult);
};


getResult([1.6, 2, 3.7, 4], sumArray);
getResult([1.6, 2, 3.7, 4], multArray);

//задание 2

const sortUsers = (users) => {
    users.sort(sortAgeUsers);
    console.log(users);
}

function sortAgeUsers(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

sortUsers(users);

//еще один способ, не знала какой лучше

// const sortUsers = (users, callback) => {
//     users.sort(callback);
//     console.log(users);
// }

// function sortAgeUsers(a, b) { 
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
//   }

//   const users = [
//     {name: 'Jon', age: 22},
//     {name: 'Richard', age: 18},
//     {name: 'Anton', age: 32},
//     {name: 'Lida', age: 23},
//     {name: 'Bob', age: 44}
//   ];

// sortUsers(users, sortAgeUsers);

//задание 3

const each = (array, callback) => {
    console.log(callback(array));
}
const reverseArray = (array) => {
    let newArray = array.reverse();
    return newArray;
};

const numberArray = (array) => {
    let newArray = [];
    array.forEach((el) => {
        if (el == Number(el)) {
            newArray.push(Number(el));
        }
    });
    return newArray;
}

each([1, '4', 9, 'two'], reverseArray);

each([1, '4', false, 9, 'two'], numberArray);

// задание 4

let myDay = new Date();
let idIntervalDate = setInterval(() => console.log(myDay), 3000);
setTimeout(() => {
    clearInterval(idIntervalDate);
    console.log('30 секунд прошло');
}, 30000);

//задание 5

function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор');
}

calling();
beeps(talk);

