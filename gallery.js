function onLoad() {
    getDelay().addEventListener("ionChange", init);
    window.addEventListener('resize', init);
    getTabs().addEventListener("ionTabsWillChange", pause);
    init();
}

function getDelay() {
    return(document.querySelector('ion-range'));
}

function getTabs() {
    return(document.querySelector('ion-tabs'));
}

function getSlides() {
    return(document.querySelectorAll('ion-slides'));
}

function init() {
    getSlides().forEach(function(s) {
        s.options = {
            width: window.innerWidth,
            autoplay: {
                delay: 5000 - getDelay().value
            }
        };
    });
}

function adelante(){
       getTabs().getSelected().then(function(tab) {
       document.getElementById(tab).slideNext(); 
   }); 
}

function atras(){
	navigator.vibrate(50);
	getTabs().getSelected().then(function(tab) {
       document.getElementById(tab).slidePrev(); 
   }); 
}

function play() {
	navigator.vibrate(50);
    getTabs().getSelected().then(function(tab) {
        document.getElementById(tab).startAutoplay();
    });
}

function pause() {
	navigator.vibrate(50);
    getSlides().forEach(function(s) {
        s.stopAutoplay();
    });
}

