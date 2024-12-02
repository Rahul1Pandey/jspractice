// var btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//      document.querySelector('p').textContent = 'Hello text is now changed'
// })


// var btn = document.querySelector('button')
// var img1 = document.querySelector('#img1')
// var img2 = document.querySelector('#img2')
// var source;
// btn.addEventListener('click',()=>{
//    source = img1.src 
//    img1.src = img2.src
//    img2.src = source
   
// })

var form = document.querySelector('form')
var inps = document.querySelectorAll('input[type="text"]')
var h4 = document.querySelector('h4')

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  for(var i=0;i<inps.length;i++){
   if(inps[i].value ===' '){
       h4.textContent = "Error some field are blanck";
       h4.style.color = 'red'
       break;
   }
  }
})