
  window.addEventListener("load",function(){

  var toggle = document.querySelector("#toggle");
 
  toggle.classList.add("instant") 
  
  if(window.location.protocol==="https:"){
toggle.classList.add("https");
    toggle.protocol="http :";
    

    
  }
    else if(window.location.protocol=="http:"){
toggle.classList.add("http");
      
    
    
    }
  
})
!function($){
    $(function(){
      "use strict ";

      $.support.transition-(function(){
        var transitionEnd =(function(){

          var el = document.createElement('bootstrap'),
            transEndEventNames ={
              'webkitTransition':'webkitTransitionEnd'
              , 'MozTransition':'transitionEnd'
              , 'OTransition':'MSTransitionEnd',
              ,'transition':'transitionEnd',
              
            }
          ,name
          for(name in transEndEventNames){
            if(el.style[name] !== undefined){
              return transEndEventNames[name]
            }
            
          }()
            return transitionEnd &&{

            end:transitionEnd
            }
        }
                           )
      })()
      
    })
}




var crypto = new BenchmarkSuite('Crypto',[266181]{
  new BenchMark("Encrypt",true,false,3900,encrypt);
  new BenchMark("Decrypt",true,false,220,decrypt)])
}
var dbits;
var BI_DB;
var BI_DV;
var BI_FP;
var BI_FV;
