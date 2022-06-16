const array1 = [
    { id: "333222111", name: "Sulejman", age: "22" },
    { id: "321123432", name: "Stefan", age: "25" },
    { id: "222312543", name: "Semir", age: "32" },
  ];
  
  
  function getObjects(array, key, value) {


    for(i of array){
        arr = []
        
        if(i[key] == value){
            return i

    }
    

  }}
  
  console.log(getObjects(array1, "name", "Semir")); 
  // result: [ { id: '222312543', name: 'Semir', age: '32' } ] 
  
  console.log(getObjects(array1, "name", "Suad")); 
  // result: [ ] 