const getQuotes = async (tag) => {
    try {
      const response = await fetch(
        `https://api.quotable.io/random?tags=${tag}`
      );
  
      const result = await response.json();
  
      return result
    } catch (error) {
      console.log(error);
    }
  };

function funk(tag){
    container.innerHTML = ''
    getQuotes(tag).then((value)=>{
      pg = document.createElement('p')
      pg.innerText = value.author
      pgC = document.createElement('p')
      pgC.innerText = value.content
      newDiv = document.createElement('div')
      newDiv.classList.add('newDiv')
      newDiv.appendChild(pg)
      newDiv.appendChild(pgC)
      container.appendChild(newDiv)
  
    })
  }
  
  
  
container = document.querySelector('.container')
tehn = document.querySelector('.tehn')

tehn.addEventListener('click', ()=>{
  funk('technology')
})

document.querySelector('.hist').addEventListener('click',()=>{
  funk('history')
})

document.querySelector('.polit').addEventListener('click',()=>{
  funk('politics')
})


  // const createCard = (author, quote) => {
  //   return `<div
  //  style="
  //    width: 400px;
  //    min-height: 100px;
  //    border: 1px solid black;
  //    margin: 10px;
  //    padding: 20px;
  //  "
  // >
  //  <p>
  //    ${quote}
  //  </p>
  //  <p>By: ${author}</p>
  // </div>`;
  // };
  
  // getQuotes().then((result) => {
  //   result.forEach((quote) => {
  //     console.log(contentDiv.innerHTML);
  //     contentDiv.innerHTML =
  //       contentDiv.innerHTML + createCard(quote.author, quote.content);
  //   });
  //   //   contentDiv.appendChild();
  // });
  
  // const createCardNode = (author, quote) => {
  //   const div = document.createElement("div");
  //   div.style = ` width: 500px;
  //        min-height: 150px;
  //        border: 1px solid black;
  //        margin: 10px;
  //        padding: 20px;
  //      `;
  
  //   const p = document.createElement("p");
  //   p.textContent = quote;
  
  //   div.appendChild(p);
  
  //   const p2 = document.createElement("p");
  //   p2.textContent = `By: ${author}`;
  
  //   div.appendChild(p2);
  
  //   return div;
  // };
  
  // // getQuotes().then((result) => {
  // //   result.forEach((quote) => {
  // //     const newCard = createCardNode(quote.author, quote.content);
  // //     contentDiv.appendChild(newCard);
  // //   });
  // // });
  
  // const clickable = () => {
  //     getQuotes(pageInput.value).then((result)=>{
  //         contentDiv.innerHTML = ''
  //           result.forEach((value)=>{
  //               newDiv = createCardNode(value.author,value.content)
  //               contentDiv.appendChild(newDiv)
  //           })
  //     })
  // };
  





  // const button = document.getElementById("click");
  
  // button.addEventListener("click", clickable);


// // Use var to initialize a variable
// fullMoon = true
// var species = "human";


// function hamza(){
//   if (fullMoon) {
//     // Attempt to create a new variable in a block
//     var species = "werewolf";
//     return(`It is a full moon. Lupin is currently a ${species}.`);
//   }

// }
// console.log(hamza());

// console.log(`It is not a full moon. Lupin is currently a ${species}.`);