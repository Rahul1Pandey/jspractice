var strt = document.querySelector('#strt')
var stop = document.querySelector('#stop')
var h3 = document.querySelector('h3')

var inp;
strt.addEventListener('click',()=>{
   var count = 0;
   inp = setInterval(()=>{
      h3.textContent = count;
      count++
   },1000)
}) 

stop.addEventListener('click',()=>{
  clearInterval(inp)
})