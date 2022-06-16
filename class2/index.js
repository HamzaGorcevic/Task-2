// removeFirst = (array) => {
//   const arr1 = [...array];
//   arr1.shift();
//   return arr1;
// };


const users = [
  { id: 1, name: "Irfan", age: 25 },
  { id: 2, name: "Nikola", age: 19 },
  { id: 3, name: "Hamza", age: 18 },
];


// const { log } = require("console");
// const { title } = require("process");

// const arr = [1, 1, 1];

// console.log(removeFirst(arr));
// console.log(arr);


  
  // const filteredUsers = users.filter((user, index) => {
  //   return user.age < 20;
  // });
  
  // elemnt, index, array;
  
  Array.prototype.newFilter = function (callback) {
    const newArray = [];
  
    const arrayClone = [...this];
    for (let i = 0; i < arrayClone.length; i++) {
      const element = arrayClone[i];
  
      if (callback(element, i, this)) {
        console.log(element);
        newArray.push(element);
      }
    }
  
    return newArray;
  };
  Less = users.newFilter((element,index)=>{
    return element.name == 'Hamza'
  })

  console.log(Less);




















// Array.prototype.newFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     if (callback(element, i, this)) {
      
//       return element
//     }
//   }

//   return undefined;

// };

// const foundUser = users.newFind((user, index, array) => {


// });
  
// console.log(foundUser);

