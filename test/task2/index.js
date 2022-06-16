// const getQuotes = async (tag) => {
//     try {
//       const response = await fetch(
//         `https://api.imgflip.com/get_memes`
//       );
  
//       const result = await response.json();
  
//       return result
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   getQuotes().then((value)=>{
//     console.log(value);
//   })


async function nes(){
    const response = await fetch(
        `https://api.imgflip.com/get_memes`
    )
    const res = await response.json()
    return res
}

container = document.querySelector('.container')
nes().then((value)=>{
    nes = value.data.memes
    for(i = 0;i < nes.length;i++){
        pg = document.createElement('img')
        console.log(nes[i].url);
        newDiv = document.createElement('div')
        newDiv.style.width = '500px'
        newDiv.style.height = 'auto'
        p = document.createElement('p')
        p.innerText = nes[i].name
        newDiv.appendChild(p)
        newDiv.appendChild(pg)

        pg.src = nes[i].url
        container.appendChild(newDiv)
        pg.style.width ='auto'
        pg.style.height = '400px'


    }


    

})
// 500 px 

pg = document.createElement('img')


