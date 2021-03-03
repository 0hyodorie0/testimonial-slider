var slideIndex =1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var x = document.getElementsByClassName("slide__wrap");
    if (n>x.length) {
        slideIndex=1
    }
    if (n<1) {
        slideIndex=x.length
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    function mediaQueryDisplay(m) {
        if (m.matches){
            x[slideIndex-1].style.display="flex";
        } else {
            x[slideIndex-1].style.display="block";
        }
    }
    var m = window.matchMedia("(min-width:1000px)")
    mediaQueryDisplay(m)
    m.addListener(mediaQueryDisplay)
}
