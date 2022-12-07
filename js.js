const buttonUp = document.querySelector('#clickMe').addEventListener('click', clickMe)
const buttonReset = document.querySelector('#zerar').addEventListener('click', zerar)
const buttonDown = document.querySelector('#diminuir').addEventListener("click", diminuir)
const counterParagraph = document.getElementById("counterParagraph")
let count = 0

function clickMe() {    
    count++
    counterParagraph.innerHTML = `O contador está em <strong> ${count} </strong> Clicks`
}
function zerar() {
    count = 0
    counterParagraph.innerHTML = `O contador está em <strong> ${count} </strong> Clicks`
}
function diminuir() {
    count--
    if (count < 0) {
        count = 0
    }
    counterParagraph.innerHTML = `O contador está em <strong> ${count} </strong> Clicks`   
}