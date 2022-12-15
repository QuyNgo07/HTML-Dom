var button = document.querySelector('button')
var para = document.querySelector('p')

var count = 0
button.addEventListener('click', function() {
    count++
    if(count % 2 > 0) {
        para.setAttribute('style', 'display: none')
    } else if(count % 2 == 0) {
        para.setAttribute('style', 'font-weight: 500')
    }
        
    
    console.log(count)
})