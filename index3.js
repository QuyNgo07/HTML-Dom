var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var squre = document.querySelector('div')

btn1.addEventListener('click', function() {
    squre.setAttribute('style', 'width:240px; height:240px; background: #32c24a')
})

btn2.addEventListener('click', function() {
    squre.setAttribute('style', 'width:60px; height:60px; background: #32c24a')
})
