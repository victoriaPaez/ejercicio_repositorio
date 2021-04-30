$(document).ready(function(){
   $('ul.tabs li a:first').addClass('active');
   $('.Definiciones article').hide();
   $('.Definiciones article:first').show();


   $('ul.tabs li a').click(function(){
       $('ul.tabs li a').removeClass('active');
       $(this).addClass('active')
       $('.Definiciones article').hide();
       var activeTab= $(this).attr('href');
       $(activeTab).show();
       return false;
   });

});

