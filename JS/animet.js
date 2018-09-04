
        // ;function active(div,tarage,num){

        //     clearInterval(window.intset);

        //    window.intset = setInterval(function(){
   
        //    var juli = div.offsetLeft;

        //     console.log(juli)

        //    var stex = tarage>juli?num:-num;

           
   
        //    if( Math.abs(tarage - juli)>Math.abs(stex)){
        //           var haha = stex + juli;
        //           div.style.left = haha+"px";
                 
        //       }else{     
        //           div.style.left = tarage + "px";            
        //           clearInterval(window.intset);       
        //       }
        //   },100)

        // }

        function animate(element, target, num) {

            //num不传是undefined，设置了一个默认值是10
            num = num || 10;
          
            clearInterval(element.timer);
            element.timer = setInterval(function () {
              //先获取原来的位置
              var leader = element.offsetLeft;
              var step = target > leader ? num : -num;

            //   var x = Math.abs(leader);

            //   var ss = Math.abs(target - x);
            //   console.log(ss)
            
          
              //判断leader与target的距离， 如果超过step，就可以跑，否则，就清除定时器
              if (Math.abs(target - leader) >= Math.abs(step)) {
                  
                leader += step; 
                element.style.left = leader + "px";
              } else {
                clearInterval(element.timer);
                //手动设置到终点
                element.style.left = target + "px";
              }
            }, 10);
          }