$(".img1").addClass("img1slider");
$(".img2").addClass("img2slider");
var flag = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".mtop").offset().top);
    var num = offsetTop - scrollTop;
    console.log("num"+num);
    if(num < 590){
        if(flag){
            $(".words3").lbyl({
                content: "我们能做什么？",
                speed: 200,
                type: 'show',
                finished: function(){
                    $('.words4').lbyl({
                        content:"酒店拥有高端大气的会议室和多功能厅，按功能需 求设计和精心装修后焕然一新， 可根据各类会议规模供 您选择。大会议室配备大型LED显示屏，面积约500平 方米，可容纳350人会议及用餐;多功能会议厅面积约 300平方米，可容纳150人会议及用餐。",
                        speed: 20,
                        type: 'fade',
                        fadeSpeed: 500
                    })
                }
            });
            $(".show2").css({
                opacity:1,
                transition:"2s"
            });
            flag = false;
        }


    }
    if(num < 300){
        $(".oneimg").addClass("oneimgslider");
        $(".twoimg").addClass("twoimgslider");
    }
});