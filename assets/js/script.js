console.log('ciao')
// variabili che mi racchiude gli elelmneti della dom
const containerElement = document.getElementById("container");
console.log(containerElement);
const difficultElement = document.getElementById('difficult')


  


// quando clicco su avvia in base l,opzione scelta si puo avere una griglia
document.querySelector('.button').addEventListener('click', function(e){
    e.preventDefault();
    // variabile che racchiude il valore di options
    let numberCells = difficultElement.value;
    let counter = 0
    // questo ogni volta che clicco su avvia libera il container
    containerElement.innerHTML = "";
    const mushroomArray = []
    generateMushroom(numberCells, mushroomArray);
    let trovato = false;
  
    const clickBoxElement = document.getElementsByClassName('box');

    // il ciclo crea dei box in base al valore di numbercells
    for (let i = 0; i < numberCells; i++) {



        // variabile che racchiude i numeri tra 1 a 100 che sono uguali alla progressione dei cubi
        let numberIndex = i + 1;
        if(mushroomArray.includes(numberIndex)){
            console.log('ciao')
            
            const markup = `
            <div class="box">
                <h1>${numberIndex}</h1>
            </div>
            `;
            containerElement.insertAdjacentHTML('beforeend', markup);
            const eventMushroom = clickEventMushroom(clickBoxElement[i], trovato)
            console.log(eventMushroom)
            if(eventMushroom == true){
                console.log('chiuditi')
            }
        }else{
                // variabile di markup
                const markup = `
        <div class="box">
            <h1>${numberIndex}</h1>
        </div>
        `;

        //inserisce dentro container il valore di markup
        containerElement.insertAdjacentHTML('beforeend', markup);
        const clickBox = clickEvent(clickBoxElement[i], counter)
        console.log(clickBox)
        }

        
    }
    // costante che racoglie tutti i box del dom
    

    // in base alla difficolta la griglia cambia
    if(numberCells == 81){
        for (let i = 0; i < clickBoxElement.length; i++) {
            const clickBox = clickBoxElement[i];
            clickBox.classList.add('square-9')
            

        };
    }else if(numberCells == 49){
        for (let i = 0; i < clickBoxElement.length; i++) {
            const clickBox = clickBoxElement[i];
            clickBox.classList.add('square-7')
            

        };
    }
    

});

// funzione del click su mushroom
function clickEventMushroom(clickBox, trovato){
// se vengono cliccati devo diventare azzurri e loggare il numero suo
    
    clickBox.addEventListener('click', function(){
        clickBox.classList.add('bg-red');
        clickBox.innerHTML = '😈';
        trovato = true
        console.log(trovato)
    });
    
    return trovato;
};

//funzione del click su event not mushroom
/**
 * 
 * @param {Element} clickBox 
 * @param {number} counter 
 * @returns 
 */
function clickEvent(clickBox, counter){
// se vengono cliccati devo diventare azzurri e loggare il numero suo   


    clickBox.addEventListener('click', function(e){
        clickBox.classList.add('bg-azzure');
        

    });
    return ;
};


// funzione che genera numeri random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che genera funghi
function generateMushroom(numberCells, mushroomArray){
    while (mushroomArray.length < 16) {
        const mushroomNumber = getRndInteger(1, numberCells);
        if(!mushroomArray.includes(mushroomNumber))
        mushroomArray.push(mushroomNumber)
    }
}
function contator(counter){
    counter++
    return counter
}