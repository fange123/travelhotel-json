var xml = new XMLHttpRequest();
xml.open("get","index.json",true);
xml.onload = function () {
  var hotel = JSON.parse(xml.responseText).hotel;
    for (var i = 0; i < hotel.length; i++) {
        var quicklist = document.getElementsByClassName("quicklist")[i];
        quicklist.innerHTML =  `
            <img src="${hotel[i].pic}" alt="">
             <div class="quicktext">
                <h2>${hotel[i].title}</h2>
                <p>${hotel[i].contents}</p>
            </div>
        `;

    }
};
xml.send();