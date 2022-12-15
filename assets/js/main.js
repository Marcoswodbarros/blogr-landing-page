var leftButton = document.querySelector('.john__button--left');
var rightButton = document.querySelector('.tanya__button--right');

var tanyaContainer = document.querySelector(".section__container--tanya");
var johnContainer = document.querySelector('.section__container--john');

rightButton.addEventListener('click', function (){
    tanyaContainer.style.display = "none";
    johnContainer.style.display = "flex";
});

leftButton.addEventListener('click', function (){
    tanyaContainer.style.display = "flex";
    johnContainer.style.display = "none";
});
