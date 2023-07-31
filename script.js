function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// $('.menu').click(function(e){
//     e.preventDefault();
//    $(this).addClass('active');
//     $(this).siblings().each(function(){
//         $(this).removeClass('active') ;
    
//     });
// });