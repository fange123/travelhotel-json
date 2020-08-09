document.getElementById("flatpickr-tryme").flatpickr();
document.getElementById("flatpickr-tryme1").flatpickr();
/*文字*/
$(".room-tit").find("h2").addClass("h2ani");
$(".room-tit").find(".suntit").addClass("sunnitani");
$(".room-tit").find(".p1").addClass("sunnitani");
/*json*/
var xml = new XMLHttpRequest();
xml.open("get","index.json",true);
xml.onload = function () {
  var room = JSON.parse(xml.responseText).room;
    var project = room.project;
    var slider = document.getElementById("slider");
    for (var i = 0; i < project.length; i++) {
        var div = slider.getElementsByClassName("div")[i];
        div.innerHTML = `
            <img src="${project[i].pic}" alt="">
                <h2 class="tit">${project[i].tit}</h2>
                <h2 class="subtit">${project[i].suntit}</h2>
                <p>${project[i].contents}</p>
                <div class="show1">
                     <h2 class="tit">${project[i].tit}</h2>
                     <h2 class="subtit">${project[i].suntit}</h2>
                     <p>${project[i].contents}</p>
                </div>
        `;
    }
    var detail = room.detail;
    for (var i = 0; i < detail.length; i++) {
        var pro = document.getElementsByClassName("pro01")[i];
        pro.innerHTML = `
              <img src="${detail[i].pic}" alt="">
            <div class="detailtext">
                <h2>${detail[i].title}<span class="money">${detail[i].money}</span><span class="day">${detail[i].day}</span></h2>
                <p>${detail[i].list01}</p>
                <p>${detail[i].list02}</p>
                <p${detail[i].list03}</p>
                <button>立即预定</button>
            </div>
        `;


    }
};
xml.send();


