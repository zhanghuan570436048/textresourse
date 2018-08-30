
//回到页面顶部 有向上的动画 20180707
function backTop(){
  var timer=null;
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn(){
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(oTop > 0){
      scrollTo(0,oTop-50);
      timer = requestAnimationFrame(fn);
    }else{
      cancelAnimationFrame(timer);
    }
  });
}