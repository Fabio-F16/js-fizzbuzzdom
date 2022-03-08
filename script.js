console.log('js ok')


const grigliaNumerica = document.querySelector("#grigliaNumerica");

for(let boxIndex = 1; boxIndex <= 100; boxIndex++){
    const element = `<div class="numberBox numberBox-${boxIndex}">${boxIndex}</div>`;
    grigliaNumerica.innerHTML += element;

    console.log(boxIndex)

    if (boxIndex % 3 == 0){
        const element = `<div class="fizz">Fizz</div>`;
        console.log('Fizz')
        
   
    }

   
    
}