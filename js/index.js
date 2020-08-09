
    /*json*/
    var xml = new XMLHttpRequest();
    xml.open("get","index.json",true);
    xml.onload = function () {
        var obj = JSON.parse(this.responseText);
        /*banner*/
        var banner = obj.index[0].banner;
        var text = document.getElementById("text1");
        var html = ``;
        html = `
            <p class="ex1">${banner[0]}</p>
            <p class="ex1">${banner[1]}</p>
            <h2 class="ex2">${banner[2]}</h2>
            <p class="sel ex2">${banner[3]}</p>
            <div class="line"></div>
            <p class="num desc">${banner[4]}</p>
            <p class="num desc">${banner[5]}</p>
        `;
        text.innerHTML = html;
        /*banner文字*/
        $('.ex1').textyleF();
        $('.ex2').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#fff',
                    transition : '1s',
                });
                $('.desc').css('opacity',1);
            }
        });
        $(".line").stop().fadeIn(4000).show();
        /*热门城市*/
        var hotcity = obj.index[0].hotcity;
        var bannerlist = document.getElementsByClassName("bannerlist")[0];
        for (var i = 0; i < hotcity.length; i++) {
            var li = bannerlist.getElementsByTagName("li")[i];
            var hothtml = ``;
            hothtml = `
             <img src="${hotcity[i].pic}" alt="">
                <div class="caption1 text-center">
                    <h2>${hotcity[i].title}</h2>
                    <p>${hotcity[i].suntit}</p>
                    <p>${hotcity[i].before}<span>${hotcity[0].money}</span>${hotcity[0].after}</p>
                </div>
        `;
            li.innerHTML = hothtml;
            if(i == 1){
                li.innerHTML = `
                <img src="${hotcity[i].pic}" alt="">
                    <div class="caption1 text-center">
                        <h2>${hotcity[i].title}</h2>
                        <p>${hotcity[i].suntit}</p>
                        <p>${hotcity[i].before}<span>${hotcity[0].money}</span>${hotcity[0].after}</p>
                        <button class="hot-btn">立即预约</button>
                    </div>`;
            }
        }

        /*故事*/
        var story = obj.index[0].story;
        for (var i = 0; i < story.length; i++) {
            var story1 = document.getElementsByClassName("story")[i];
            var desc = story1.getElementsByClassName("description")[0];
            console.log(desc);
            var self1 = story1.getElementsByClassName("self")[0];
            self1.innerHTML = `
            <img src="${story[i].pic}" alt="">
                <h2>${story[i].name}</h2>
                <div class="myself">
                    <div class="zan">
                        <i>
                            <img src="img/zan.png" alt="" class="black">
                            <img src="img/zan-w.png" alt="" class="white">
                        </i>
                        <span>${story[i].zan}</span>
                    </div>
                    <div class="comment">
                        <i>
                            <img src="img/comment.png" alt="" class="black">
                            <img src="img/comment-w.png" alt="" class="white">
                        </i>
                        <span>${story[i].comment}</span>
                    </div>
                </div>
        `;
            desc.innerHTML = `
                 <h2>${story[i].title}</h2>
                 <p>${story[i].contents}</p>

            `;



        }

    };
    xml.send();

(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );
})();
/*计数器*/
var flag = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".world").offset().top);
    var num = offsetTop - scrollTop;
    // console.log(num);
    if(flag){
        if(num < 540 ){
            $('.number').each(function(){
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
        }
    }

});

/*热点*/
var index = 0;
$(".arrow1").click(function () {
    index ++;
    if(index == 0){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">

                    <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>

                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                    <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                    <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>

                </div>
            </li>      
        `);
    }else if(index == 1){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                     <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>
                   
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                    <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                 <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>


                </div>
            </li>
        `);

    }else if(index == 2){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                 <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                     
                   
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                      <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>
                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>              
                </div>
            </li>
        `);
        index = -1;
    }
});

$(".arrow2").click(function () {
    index --;
    if(index == 0){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">

                    <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>

                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                    <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                    <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>

                </div>
            </li>      
        `);
    }else if(index == -1){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                 <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    
                   
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                   <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                 <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>
                 


                </div>
            </li>
        `);

    }else if(index == -2){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                  <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>  
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                 <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                     <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>   
                </div>
            </li>
        `);
        index = 1;
    }
});
