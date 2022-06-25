let scrollpos = window.scrollY;
let header = document.getElementById("nav");


function addClassOnScroll() {
  header.classList.add("nav-border");
};

function removeClassOnScroll(){
  header.classList.remove("nav-border");
};

window.addEventListener('scroll',function(){
  scrollpos = window.scrollY;

  if(scrollpos){
    addClassOnScroll();
  }else {
    removeClassOnScroll();
  };

});

const menuToggle = document.querySelector(".hamburger");
const nav = document.querySelector(".mobilenav");
let checkboxburger = document.querySelector("#checkboxhamburger");


menuToggle.addEventListener('click',function(){
  nav.classList.toggle('slide');
  checkboxburger.checked = false;
  body.classList.toggle("bodysaturation");
});


const closemenumobile = document.querySelector("#closemobilemenu");
closemenumobile.addEventListener("click",function(){
  nav.classList.remove('slide');
});
 
