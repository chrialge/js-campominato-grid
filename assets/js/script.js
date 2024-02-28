console.log('ciao')

const containerElement = document.getElementById("container");
console.log(containerElement);
const difficultElement = document.getElementById('difficult')


const numberCells = 100


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const valueDifficult = difficultElement.value
    console.log(valueDifficult);
    let numberCells = valueDifficult

    let numberCremental = []
for (let i = 0; i < numberCells; i++) {
    const numberIndex = i + 1
    console.log(numberIndex)
    const markup = `
    <div class="box">
        <h1>${numberIndex}</h1>
    </div>
    `
    containerElement.insertAdjacentHTML('beforeend', markup)
    numberCremental.push(numberIndex)
}
console.log(numberCremental)



const clickBoxElement = document.getElementsByClassName('box')
for (let i = 0; i < clickBoxElement.length; i++) {
    const clickBox = clickBoxElement[i];
    clickBox.addEventListener('click', function(e){
        e.preventDefault();
        clickBox.classList.toggle('bg-azzure')
        console.log(i + 1)
        
    })
}
})