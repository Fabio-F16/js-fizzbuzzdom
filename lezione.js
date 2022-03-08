console.log('JS OK!');

let i;
for (i = 0; i <= 10; i++) {
  
 // Istruzioni da eseguire
 console.log(i);


}


console.log('fine ciclo', i);

// DA NON FARE MAI!!!! SOLO A SCOPO DIDATTICO!!!
i = 0;

for(; i <= 10;){

 // Istruzioni da eseguire
 console.log(i);
// 100000 LoC

 // ultimissima cosa che esegue il ciclo for prima di valutare la condizione
 i++;
}


let x = 2;
let y;
// prima incrementa X e poi assegna il valore di X a Y
y = ++x; 

// x = 3, y = 3

x = 2;
// prima assegno il valore di X a Y e poi incremento X
y = x++; 

// y = 2, x = 3


// stampare i numeri da 1 a 100;
console.log ('da 1 a 100');
for (let k=1; k <= 100; k++){

    console.log(k);

}

// stampare i numeri da 0 a 100 ma di 10 in 10

console.log(' 0 a 100 ma di 10 in 10')
for(let m = 0; m<=100; m +=10){
    console.log(m);
}

for(m = 0; m<=10; m++){
    console.log(m * 10);
}

// stampare una stringa composta da caratteri 'X' che parte da '' e arriva a 10X 'XXXXXXXXXX'

for(let x=''; x.length <= 10; x+='X'){

    console.log(x);

}

// fare la somma di 5 numeri chiesti all'utente via prompt
let somma = 0;

for(let x=0; x < 5; x++){
    // commento per non interrompere l'esecuzione
    //  const number = parseInt(prompt('dammi un numero'));
    const number = 0
    if(!isNaN(number)){
        somma = somma + number;
    }
    
    console.log('step by step', somma);
}

console.log('finale', somma);



const ul = document.querySelector("ul.list");
// const ul = document.querySelector("ul");

for (let index = 0; index < 10; index++) {
  const element = `<li class="box box-${index}">${index}</li>`;
  ul.innerHTML += element;
  
  //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
}

// inserire in #squares dei contenitori con i numeri da 0 a 99, 10 per riga
const divSquares = document.querySelector("#squares");
for(let squareIndex = 0; squareIndex < 100; squareIndex++){
    const element = `<div id="square-${squareIndex}" class="square">${squareIndex}</div>`;
    divSquares.innerHTML += element;

    const elementSquare = document.getElementById('square-'+squareIndex);
    
    elementSquare.style.transitionDelay = (50 * squareIndex) + 'ms';
    elementSquare.style.transitionProperty = 'background-color';
    elementSquare.style.transitionDuration = '2s';

    
}

document.getElementById('button').addEventListener('click', function(){
    for(let squareIndex = 0; squareIndex < 100; squareIndex++){
        const element = document.getElementById('square-'+squareIndex);
        const red = Math.floor( Math.random() * 256)
        const green = Math.floor( Math.random() * 256)
        const blue = Math.floor( Math.random() * 256)



        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue} )`;

    }
})



// ciclo dentro ciclo
for(let outerIndex=0; outerIndex<10; outerIndex++){
    console.log('outerIndex', outerIndex);


    for(let innerIndex=0; innerIndex<5; innerIndex++){
        // eseguo questo codice 5 volte per ogni volta che eseguo il ciclo esterno
        console.log('innerIndex', innerIndex);
        console.log('inner x outer', innerIndex*outerIndex)
    }

}


