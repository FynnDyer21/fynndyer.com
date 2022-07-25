//#region init and set data
var data = window[document.getElementsByClassName("modules")[0].getAttribute("id")];
var text='';
var temptext='';
var async = [];
//#endregion

//#region add to string using a temp string based on module name
data.forEach(element => {
    if(element.module=='imgtext'){
        handleImgText(element.filename, element.text);
    }
    if(element.module=='spacer'){
        handleSpacer(element.height);
    }
    if(element.module=='header'){
        handleHeader(element.active);
    }
    if(element.module=='footer'){
        handleFooter();
    }
    if(element.module=='title'){
        handleTitle(element.text);
    }
    if(element.module=='techstack'){
        handleTechstack(element.techs);
    }
    if(element.module=='description'){
        handleDescription(element.text);
    }
    if(element.module=='widephoto'){
        handleWidePhoto(element.filename);
    }
    if(element.module=='photogrid'){
        handlePhotogrid(element.filenames);
    }
    if(element.module=='container'){
        handleContainer(element.data);
    }
    if(element.module=='responsivegallery'){
        handleResponsiveGallery(element.id, element.offset, element.filenames, element.targetHeight);
    }
    if(element.module=='lightbox'){
        handleLightbox(element.filenames);
    }
    if(element.module=='videoembed'){
        handleVideoEmbed(element.html);
    }
    if (typeof element.inline !== 'undefined') {
        handleInline(element.inline);
    }
    text+=temptext;
    temptext=''
});
//#endregion

//#region handle functions
function handleImgText(filename, text){
    temptext += '<div class=\'imgtxt\'>'

        temptext += '<div class = \'imag\'><img src=\''+filename+'\'</img></div>'
        temptext += '<div class=\'txt\'>'+text+'</div>'

    temptext += '</div>'
}

function handleSpacer(height){
    temptext +='<div class=\'spacer\' style="height:'+height+';"></div>'
}

function handleHeader(active){
    temptemp = '<div class=\'header\'>'
    temptemp +='<a href=\"/\"><img src="/assets/images/logo.png" height="100px/"><\/a>\r\n\t\t\r\n\t\t<div class=\"topnav\" id=\"myTopnav\">\r\n\t\t\t<a href=\"/projects\">Projects<\/a>\r\n\t\t\t<a href=\"/artcraft\">Art/Craft<\/a>\r\n\t\t\t<a href=\"/code\">Code<\/a>\r\n\t\t\t<a href=\"/photo\">Photo<\/a>\r\n\t\t\t<a href=\"/about\">About<\/a>\r\n\t\t\t<img src=\"/assets\/images\/menuicon.png\" class=\"menu\" onclick=\"openNavModal()\" style=\"height:30px;\"\/>\r\n\t\t<\/div>\r\n\r\n\t\t<div id=\"myNavModal\" class=\"navmodal\">\r\n\t\t\t<span class=\"close cursor\" onclick=\"closeNavModal()\">&times;<\/span>\r\n\t\t\t<div class=\"navmodal-content\">\r\n\t\t\t\t<a href=\"/projects\">Projects<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\"/artcraft\">Art/Craft<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\"/code\">Code<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\"/photo\">Photo<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\"/about\">About<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t<\/div>\r\n\t\t<\/div>';
    temptemp += '</div>'

    var text2=temptemp;

    if(active!=="none"){
        var results = getIndicesOf(active, temptemp,true);
        var firstoccurance=results[0]+active.length+1;
        var secondoccurance=results[1]+active.length+1;
        text2 = temptemp.slice(0, firstoccurance) + " class=\"active\" " + temptemp.slice(firstoccurance,secondoccurance)+ " class=\"active\" " +temptemp.slice(secondoccurance);
    }
    temptext+=text2;
}

function handleFooter(){
    var icons = '<div class=\'footer\'>'
    icons += '<a href=\'https:\/\/github.com\/notoliver\' target=\'_blank\' class=\'icon\'><img src=\'\/assets\/images\/github.png\' alt=\'ghub\' \/><\/a>\r\n<a href=\'https:\/\/www.linkedin.com\/in\/oliver-qiu-6b209a23a\/\' target=\'_blank\' class=\'icon\'><img src=\'\/assets\/images\/linkedin.png\' alt=\'ghub\' \/><\/a>\r\n<a href=\'https:\/\/www.youtube.com\/c\/naughtoliver\' target=\'_blank\' class=\'icon\'><img src=\'\/assets\/images\/youtube.png\' alt=\'yt\' \/><\/a>\r\n<a href=\'https:\/\/www.instagram.com\/oliverqiu_\/\' target=\'_blank\' class=\'icon\'><img src=\'\/assets\/images\/instagram.png\' alt=\'insta\' \/><\/a>\r\n<a href=\'mailto:me@oliverqiu.com\' class=\'icon\'><img src=\'\/assets\/images\/email.png\' alt=\'email\' \/><\/a>';
    icons += '</div>'

    temptext+=icons;
}

function handleTitle(input){
    temptext+='<div class=\'title\'>'+input+'</div>'
}

function handleTechstack(techs){
    temptext+='<div class = \'techstack\'>';

    techs.forEach(tech => {
        temptext+='<img src=\'\/assets\/images\/'+tech+'.png\' \/>'
    });

    temptext+='</div>';
}

function handleDescription(input){
    temptext+='<div class=\'description\'>'+input+'</div>'
}

function handleWidePhoto(filename){
    temptext+='<div class=\'image\'><img data-src=\'images/'+filename+'\' class=\'lazyload\'></img></div>'
}

function handlePhotogrid(filenames){
    temptext+='<div class=\'photogrid\'>';
 
    filenames.forEach(filename => {
        //math for width??
        var ratio = filename.x / filename.y;
        temptext+='<div class="teaser lazyload" style=\'flex: '+ratio+'\'><img data-src=\'images/'+filename.image+'\' class=\'lazyload\'></img></div>'
    });

    temptext+='</div>';
}

function handleContainer(data){
    temptext+='<div class=\'container\'>';

    data.forEach(element => {
        temptext+='<figure>'

        //OPEN
        if (typeof element.url !== 'undefined') {
            temptext+='<a href=\'/'+element.url+'\'>';
        }
        if (typeof element.img !== 'undefined') {
            temptext+='<img data-src=\''+element.img+'\' class=\'lazyload\' alt=\''+element.url+'\'>';
        }
        if (typeof element.caption !== 'undefined'){
            temptext+='<div class=\'caption\'>'+element.caption+'<\/div>';
        }

        //CLOSE
        if (typeof element.url !== 'undefined') {
            temptext+='</a>';
        }

        temptext+='</figure>'
    });

    if(data.length%3!=0){
        for(var i=0;i<3-data.length%3;i++){
            temptext+='<figure><\/figure>';
        }
    }

    temptext+='</div>';
}

function handleInline(inline){
    var firstoccurance = temptext.indexOf('>');
    temptext = temptext.slice(0, firstoccurance)+" "+inline+" "+temptext.slice(firstoccurance);
}

function handleResponsiveGallery(id, offset, filenames, targetHeight){
    temptext+='<div id=\''+id+'\' class=\'wrapper\'></div>'
    async.push ({
        type: 'responsivegrid',
        id: id,
        offset: offset,
        targetHeight: targetHeight,
        filenames: filenames
    });
    temptext+='<div id=\'myModal\' class=\'modal\'>'
    temptext+=notLightbox(filenames);
    temptext+='</div>';
}

function handleLightbox(filenames){
    temptext+='<div id=\'myModal\' class=\'modal\'>'
    temptext+=notLightbox(filenames);
    temptext+='</div>';
}

function handleVideoEmbed(html){
    temptext+='<div class=\'embed\'>'+html+'</div>';
}
//#endregion

//#region helper functions
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}
function openNavModal() {
    document.getElementById("myNavModal").style.display = "block";
}
function closeNavModal() {
    document.getElementById("myNavModal").style.display = "none";
}
//#endregion

//#region output and async
//output to container
document.getElementsByClassName('modules')[0].innerHTML = text;

//async run after doc load
function handleAsync(){    
    Array.from(async).forEach(element => {
        if(element.type == 'responsivegrid'){
            notGrid(document.getElementById(element.id),element.filenames,element.targetHeight,element.offset);
        }
    });
}

handleAsync();

//JQUERY
$(window).on('resize', function(){
    handleAsync();
});
$('body').on('click', function(event) {
    closeModal();
});
$('div.wrapper, div.mySlides').on('click', function(event) {
    event.stopPropagation();
});
//#endregion