var btn = document.querySelector('button')
var input1 = document.querySelector('.input1')
var input2 = document.querySelector('.input2')
var result = document.querySelector('p')

btn.addEventListener('click', function() {
    result.innerHTML = parseInt(input1.value) / parseInt(input2.value ** input2.value)
})