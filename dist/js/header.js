//header
$(document).ready(function () {
  $("#respMenu").aceResponsiveMenu({
    resizeWidth: '768', // Set the same in Media query       
    animationSpeed: 'fast', //slow, medium, fast
    accoridonExpAll: false //Expands all the accordion menu on click
  });
});
// $(document).ready(function(){
//   $('.dropdown-submenu a.test').on("click", function(e){
//     $(this).next('ul').toggle();
//     e.stopPropagation();
//     e.preventDefault();
//   });
// });