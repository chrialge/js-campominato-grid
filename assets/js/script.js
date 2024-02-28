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
    
    // questo ogni volta che clicco su avvia libera il container
    containerElement.innerHTML = "";

    // il ciclo crea dei box in base al valore di numbercells
    for (let i = 0; i < numberCells; i++) {
        
        // variabile che racchiude i numeri tra 1 a 100 che sono uguali alla progressione dei cubi
        const numberIndex = i + 1;

        // variabile di markup
        const markup = `
        <div class="box">
            <h1>${numberIndex}</h1>
        </div>
        `;
        //inserisce dentro container il valore di markup
        containerElement.insertAdjacentHTML('beforeend', markup);
        
        
    }
    // costante che racoglie tutti i box del dom
    const clickBoxElement = document.getElementsByClassName('box');

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


   //ciclo per dare un evento ad ogni box
    for (let i = 0; i < clickBoxElement.length; i++) {
        const clickBox = clickBoxElement[i];

        // se vengono cliccati devo diventare azzurri e loggare il numero suo
        clickBox.addEventListener('click', function(e){
            e.preventDefault();
            clickBox.classList.toggle('bg-azzure');
            console.log(i + 1);
            
        });
        
    };


});