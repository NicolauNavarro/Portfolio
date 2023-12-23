setInterval(changeAdjective, 28000);
const titleAdjective = document.querySelector('#titleAdjective');

changeAdjective()
function changeAdjective(){
    titleAdjective.innerHTML='cool'; 
    setTimeout(() => {
       titleAdjective.innerHTML='inovative';
    }, 4000);
    setTimeout(() => {
        titleAdjective.innerHTML='unique'; 
     }, 8000);
     setTimeout(() => {
        titleAdjective.innerHTML='original'; 
     }, 12000);
     setTimeout(() => {
        titleAdjective.innerHTML='extraordinary'; 
     }, 16000);
     setTimeout(() => {
        titleAdjective.innerHTML='usefull'; 
     }, 20000);
     setTimeout(() => {
        titleAdjective.innerHTML='intuitive'; 
     }, 24000);
}


const navegation = document.querySelector('.navegation')
const mainNav = document.querySelector('.mainNav')
const Projects = document.querySelector('.Projects')
const Process = document.querySelector('.Process')
const title = document.querySelector('.title')
document.addEventListener('scroll', hello)
function hello(){
    var screenSize = window.innerHeight*2
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    mainNav.style.opacity= `${(1 - ((scrollTop * 1.5) / screenSize))}`
    Projects.style.opacity= `${(((scrollTop * 1.5) / screenSize)-2)}`
    Process.style.opacity= `${(((scrollTop * 1.5) / screenSize)-4.9)}`

    
    if (scrollTop > 10){
        mainNav.style.pointerEvents= 'none';
    }else{
        mainNav.style.pointerEvents= 'visible';
    }

    navegation.style.transform=`translateY(${(scrollTop / screenSize)*-50}%)`
    if ((3.3 - (scrollTop / screenSize)) < 0){
        Projects.style.opacity= `${(3.3 - ((scrollTop) / screenSize))}`
        title.style.opacity= `${((scrollTop / screenSize)-3.3)}`;
            title.innerHTML=`
            <h1>And learning<br>from the process</h1>
            <div class="line"></div>
            <h4>Which i then like to<br>share with you</h4>
            `
    } else{
    if ((2.3 - (scrollTop / screenSize)) < 0){
        title.style.opacity= `${(3.3 - (scrollTop / screenSize))}`;
        Projects.style.opacity= `${(3.3 - ((scrollTop) / screenSize))}`
        title.innerHTML=`
            <h1>Passionated in<br>creating projects</h1>
            <div class="line"></div>
            <h4>Adaptable to anyone<br>in all possible ways</h4>
            `
    }else{
        if ((1 - (scrollTop / screenSize)) < 0){
            title.style.opacity= `${((scrollTop / screenSize)-1)}`;
            title.innerHTML=`
            <h1>Passionated in<br>creating projects</h1>
            <div class="line"></div>
            <h4>Adaptable to anyone<br>in all possible ways</h4>
            `
        } else{
            title.style.opacity= `${(1 - (scrollTop / screenSize))}`;
            title.innerHTML=`
            <h1>Nicolau is a designer<br>and senior developer</h1>
            <div class="line"></div>
            <h4>Who loves making <span id="titleAdjective">cool</span><br>projects and problem solving</h4>
            `
        }
    }
    }
}



const goBoxes = document.querySelectorAll('.goBox')
const actionSquare = document.querySelector('.ActionSquare');
goBoxes.forEach(goBox => {
    goBox.addEventListener('click', changePage); 
    function changePage(){
        var boxId = goBox.id;
        window.alert(boxId)
    }
});
