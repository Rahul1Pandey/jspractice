// var btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//      document.querySelector('p').textContent = 'Hello text is now changed'
// })


var btn = document.querySelector('button')
var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var source;
btn.addEventListener('click',()=>{
   source = img1.src 
   img1.src = img2.src
   img2.src = source
   
})