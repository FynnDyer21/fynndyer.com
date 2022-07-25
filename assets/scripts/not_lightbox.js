//DEFINE CAPTIONS

/* #region lightbox output */
function notLightbox(lightboxData){
    var text ='<span class=\'close cursor\' onclick=\'closeModal()\'>&times;<\/span><div id=\'modal-content\' class=\'modal-content\'>';

    for(var i=1;i<lightboxData.length;i++){
        text+='<div class=\'mySlides\'>'
        text+='<img src=\'images/'+lightboxData[i].image+'\' \/>'
        text+='<div class=\'overlay\'>'
            text+='<div class=\'nav left\' onclick=\'plusSlides(-1)\'>'
                text+='<a class=\'prev\' >&#10094;<\/a><\/div>'
            text+='<div class=\'nav right\' onclick=\'plusSlides(1)\'>'
                text+='<a class=\'next\' >&#10095;<\/a><\/div>'
        text+='<\/div>'
        if(lightboxData[i].caption!==undefined)
            text+='<div class = \'caption\'>'+lightboxData[i].caption+'<\/div>'
        if(lightboxData[i].title!==undefined)
            text+='<div class=\'caption\'>'+lightboxData[i].title+' &nbsp| &nbsp'+lightboxData[i].source+' &nbsp| &nbsp<a href=\''+lightboxData[i].url+'\'>'+lightboxData[i].dimensions+'<\/a>'+'<\/div>'
        text+='<\/div>'
    }
    
    text+='<\/div>'

    return text;
}

/* #endregion */

/* #region functions */
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
/* #endregion */

/* #region open close */


document.addEventListener('keydown', function(event) {
    const key = event.key; // Or const {key} = event; in ES6+
    if (key === 'Escape') {
        closeModal();
    }
    if (key === 'ArrowLeft') {
        plusSlides(-1);
    }
    if (key === 'ArrowRight') {
        plusSlides(1);
    }
});
/* #endregion */