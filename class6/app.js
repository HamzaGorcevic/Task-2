input = document.querySelector('input')
btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    if(input.value.length < 8){
        duzina(input.value)
    }else{
        char(input.value)
        firstL(input.value)
    }

    document.querySelector('p').innerText = input.value

})


function duzina(value){
    if(value.length < 8){
        input.style.border = '2px solid red'
        input.style.transform = 'rotate(10deg)'
    }

}


function char(value){
    chars = ['.','#',"%"]

    for(i of value){

        if(chars.includes(i)){
            return value
        }

    }
    return alert('Please input specail char')

    
}
function firstL(value){
    if(value[0] != value[0].toUpperCase()){
        return alert('First letter needs to be big')
    }
    return value
}
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // Only change code below this line
//   const half = ({ max, min }) => (max + min) / 2.0;
//   // Only change code above this line


//   console.log(half(stats));



const array1 = [
    { id: "333222111", name: "Sulejman", age: "22" },
    { id: "321123432", name: "Stefan", age: "25" },
    { id: "222312543", name: "Semir", age: "32" },
  ];
  
  function getObjects(array, key, value) {
  ...
  }
  
  console.log(getObjects(array1, "name", "Semir")); 
  // result: [ { id: '222312543', name: 'Semir', age: '32' } ] 
  
  console.log(getObjects(array1, "name", "Suad")); 
  // result: [ ] 