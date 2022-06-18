

$('.scrollbar').on('click',function(e){ 

var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});


let darkmode = document.getElementsByClassName("modemalam")[0];
let lightmode = document.getElementsByClassName("modesiang")[0];

lightmode.addEventListener("click",function(){
      lightmode.classList.toggle("sembunyikan");
      if(lightmode.classList.containts("sembunyikan")){
        darkmode.classList.remove("sembunyikan");
    }
});


