var leftButton = document.querySelector('.john__button--left');
var rightButton = document.querySelector('.main__button--right');

var tanyaContainer = document.querySelector(".container__tanya");
var johnContainer = document.querySelector('.container__john');

rightButton.addEventListener('click', function (){
    tanyaContainer.style.display = "none";
    johnContainer.style.display = "flex";
});

leftButton.addEventListener('click', function (){
    tanyaContainer.style.display = "flex";
    johnContainer.style.display = "none";
});
