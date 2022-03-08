// console.log('js ok')


const grigliaNumerica = document.querySelector("#grigliaNumerica");

for(let boxIndex = 1; boxIndex <= 100; boxIndex++){


    if (boxIndex % 3 == 0 && boxIndex % 5 == 0) {

        let element = `<div class="numberBox fizzbuzz">FizzBuzz</div>`;
        console.log('FizzBuzz');
        grigliaNumerica.innerHTML += element;
    }
   
    else if (boxIndex % 3 == 0){
        let element = `<div class="numberBox fizz">Fizz</div>`;
        console.log('Fizz');
        grigliaNumerica.innerHTML += element;
   
    }
    
    else if (boxIndex % 5 == 0) {

        let element = `<div class="numberBox buzz">Buzz</div>`;
        console.log('Buzz');
        grigliaNumerica.innerHTML += element;
    }

    else{
    let element = `<div class="numberBox">${boxIndex}</div>`;
    console.log(boxIndex);
    grigliaNumerica.innerHTML += element;

    }
   
}




    // const fizz = document.querySelector('.fizz');

    
    // fizz.addEventListener ('click', function (){ 
    // let element = `<div class="numberBox">${boxIndex}</div>`;



