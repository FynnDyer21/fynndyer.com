var text='';

var active = document.getElementById("navmenus").getAttribute("active");
console.log(active);

//var pages = ["home","lisbon", "uk","bio"];

/*
<div class='sidemenu'>
    <a href="/" style="font-size:30px; padding-bottom:24px;">Fynn Dyer</a>
    <br><br>
    <a href="/" pp="pp">Walking Menorca</a>
    <br>
    <a href="/lisbon" >Streets of Lisbon</a>
    <br>
    <a href="/uk" pp="pp">Around the UK</a>
    <br>
    <a href="/bio">Bio</a>
</div>

<div class='mobilemenu'>

    <div>
        <a href="/">Fynn Dyer</a>
        <span style="float:right;" onclick="openNavModal()">
            menu 
        </span>
    </div>

    <div class="navmodal" id="myNavModal">
        <span class="close cursor" onclick="closeNavModal()">&times;</span>
        <div class="navmodal-content">
            <a href="/" pp="pp">Walking Menorca</a>
            <br>
            <a href="/lisbon" >Streets of Lisbon</a>
            <br>
            <a href="/uk" pp="pp">Around the UK</a>
            <br>
            <a href="/bio">Bio</a>
        </div>
    </div>

</div>
*/


text+='<div class=\'sidemenu\'>\r\n    <a href=\"\/\" style=\"font-size:30px; padding-bottom:24px;\">Fynn Dyer<\/a>\r\n    <br><br>\r\n    <a href=\"\/\" pp=\"pp\">Walking Menorca<\/a>\r\n    <br>\r\n    <a href=\"\/lisbon\" >Streets of Lisbon<\/a>\r\n    <br>\r\n    <a href=\"\/uk\" pp=\"pp\">Around the UK<\/a>\r\n    <br>\r\n    <a href=\"\/bio\">Bio<\/a>\r\n<\/div>\r\n\r\n<div class=\'mobilemenu\'>\r\n\r\n    <div>\r\n        <a href=\"\/\">Fynn Dyer<\/a>\r\n        <span style=\"float:right;\" onclick=\"openNavModal()\">\r\n            menu \r\n        <\/span>\r\n    <\/div>\r\n\r\n    <div class=\"navmodal\" id=\"myNavModal\">\r\n        <span class=\"close cursor\" onclick=\"closeNavModal()\">&times;<\/span>\r\n        <div class=\"navmodal-content\">\r\n            <a href=\"\/\" pp=\"pp\">Walking Menorca<\/a>\r\n            <br>\r\n            <a href=\"\/lisbon\" >Streets of Lisbon<\/a>\r\n            <br>\r\n            <a href=\"\/uk\" pp=\"pp\">Around the UK<\/a>\r\n            <br>\r\n            <a href=\"\/bio\">Bio<\/a>\r\n        <\/div>\r\n    <\/div>\r\n\r\n<\/div>'

var text2=text;

if(active!=="home"){
    var results = getIndicesOf(active, text,true);
    var firstoccurance=results[0]+active.length+1;
    var secondoccurance=results[1]+active.length+1;
    text2 = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance,secondoccurance)+ " class=\"active\" " +text.slice(secondoccurance);
}

document.getElementsByClassName('navmenus')[0].innerHTML = text2;