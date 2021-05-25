/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable indent */
const sideBar = document.querySelector('.sidebar');

const hamburger = document.querySelectorAll('.fa-bars');

for(let burger of hamburger){

burger.addEventListener('click', function(){
    sideBar.classList.toggle('active');
});
}