;$(function(){
  var banleft = $(".left-xianshi>ul>li"); 
  var banright = $(".middle-left>.left-hide");
  
    banleft.mouseover(function(){
       var banleft_ID =  $(this).attr("data-id");
       var xixi =  banright.eq(banleft_ID-1)
       xixi.css("display","block").siblings().css("display","none");
       $(".left-xianshi").css("display","block");
    });

    $(".left-xianshi").mouseleave(function(){
      banright.css("display","none")
      });

    
    
      banright.mouseover(function(){
        banright.css("display","block")
      });
    
      banright.mouseleave(function(){
        banright.css("display","none")
      });


    

})   