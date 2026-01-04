// Page Refresh
window.addEventListener('load', function() {
    window.scrollBy(0, -50);
});



$(".navbar-toggler").click(function(){

  $(".navbar-toggler").toggleClass("showtoggle");

});



$(".closed").click(function(){

  $(".navbar-collapse").removeClass("show");

});   


    $(".jobsbtn span").click(function(){
        $(".topjobbox").slideToggle("slow");
    });


    $(".searh_bx a").click(function(){
        $(".topjobbox").slideToggle("slow");
    });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".header_sec").addClass("fixed");

    } else {
        $(".header_sec").removeClass("fixed");
    }
    
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:80,
    nav:false,
    dots:true,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

const categories = document.querySelectorAll('.category');
const items = document.querySelectorAll('.item');

categories.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.category;

    categories.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    items.forEach(item => {
      if (selected === 'all' || item.dataset.category === selected) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
