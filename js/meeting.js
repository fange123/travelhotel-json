/*json*/
var xml = new XMLHttpRequest();
xml.open("get","index.json",true);
xml.onload = function(){
    var meeting = JSON.parse(xml.responseText).meeting;
    var shebeitext = document.getElementsByClassName("shebei-text")[0];
    shebeitext.innerHTML = `
         <p class="ex1">${meeting[0].title}</p>
        <h2 class="ex2">${meeting[0].subtit}</h2>
    `;
    var tit = document.getElementsByClassName("tit")[0];
    tit.innerHTML = `${meeting[0].contents}`;
    /*标题*/
    $('.ex1').textyleF();
    $('.ex2').textyleF({
        duration : 400,
        delay : 200,
        easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        callback : function(){
            $(this).css({
                color : '#504947',
                transition : '1s',
            });
            $('.desc').css({
                opacity:1,
                transition : '2s',
            });
        }

    });
    /*num*/
     var countervalue = document.getElementsByClassName("counter-value")[0];
     countervalue.innerHTML = `${meeting[1].num1}`;
    var countervalue1 = document.getElementsByClassName("counter-value")[1];
    countervalue1.innerHTML = `${meeting[1].num2}`;
    var countervalue2 = document.getElementsByClassName("counter-value")[2];
    countervalue2.innerHTML = `${meeting[1].num3}`;
    $('.counter-value').each(function(){
        flag = false;
        $(this).prop('Counter',0).stop().animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });


};
xml.send();
// var flag = true;
// $(window).scroll(function () {
//     var scrollTop = parseInt($(window).scrollTop());
//     var offsetTop = parseInt($(".demo").offset().top);
//     var num = offsetTop - scrollTop;
//     if(flag){
//         if(num < 740 ){
//             $('.counter-value').each(function(){
//                 flag = false;
//                 $(this).prop('Counter',0).stop().animate({
//                     Counter: $(this).text()
//                 },{
//                     duration: 3500,
//                     easing: 'swing',
//                     step: function (now){
//                         $(this).text(Math.ceil(now));
//                     }
//                 });
//             });
//         }
//     }
//
// });


/*视频*/
var myvideo = document.getElementById("myvideo");
var play = document.getElementById("play");
play.onclick = function () {
  myvideo.play();
  play.style.display = "none";
  myvideo.onclick = function () {
      myvideo.pause();
      play.style.display = "block";
  }
};
