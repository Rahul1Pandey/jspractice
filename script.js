var home = document.querySelector('#home')
var about = document.querySelector('#about')
var contact = document.querySelector('#contact')


var homeText = document.querySelector('#homeText')
var aboutText = document.querySelector('#aboutText')
var contactText = document.querySelector('#contactText')

// homeText.style.display = "block";
// homeText.style.width = "50%";

home.addEventListener('click',function(){
    removeTex();
    homeText.style.display = "block";
    homeText.style.width = "50%";
})
about.addEventListener('click',function(){
    removeTex();
  aboutText.style.display = "block";
  aboutText.style.width = "50%";
})
contact.addEventListener('click',function(){
    removeTex();
    contactText.style.display = "block";
    contactText.style.width = "50%";
})

function removeTex(){
    document.querySelectorAll('h3').forEach(function(h3){
        h3.style.display = "none";
    })
}