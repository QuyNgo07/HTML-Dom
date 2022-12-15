var btn = document.querySelector('button')
var input = document.querySelector('input')


function isEven() {
    if(input.value % 2 == 0) {
        alert(`${input.value} là số chẵn`)
    } else {
        alert(`${input.value} là số lẻ`)
    }
}