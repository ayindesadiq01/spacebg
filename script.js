'use strict';
const linkItems = document.querySelector('.link-items');
const sections = document.querySelectorAll('section');
const linke = document.querySelectorAll('.linke');

// CHANING NAVBAR LINK
linkItems.addEventListener('click', (e, i) => {
 const clicked = e.target.closest('.nav-link')
 // console.log(clicked.dataset.nave)
 // console.log(clicked)
 sections.forEach(el => {
 el.classList.remove('section-active') 
 })
 linke.forEach(x => {
  x.classList.remove('active-link')
 })

 if(!clicked) return;
 document.querySelector(`.section-active--${clicked.dataset.nave}`).classList.add('section-active');

 clicked.classList.add('active-link')
})

// CLOSE AND OPEN ICON
const mIcon = document.querySelector('.menu-icon');
const cIcon = document.querySelector('.bg-link');


mIcon.addEventListener('click', () => {
 cIcon.classList.toggle('hidden')
})
cIcon.addEventListener('click', () => {
 cIcon.classList.add('hidden')
})

// WORKING WITH PLANET
const planets = document.querySelector('.planet');
const planetImg = document.querySelectorAll('.planet-image')
const planetDetails = document.querySelectorAll('.planet-detail-each')
const planetlist = document.querySelectorAll('.planet-list')
planets.addEventListener('click', function(e) {
 const clicked = e.target.closest('.planet-list');
 planetImg.forEach(el => {
  el.classList.remove('active-planet')
 })
 planetDetails.forEach(x => {
  x.classList.remove('planet-active')
 })
 planetlist.forEach(c => {
  c.classList.remove('act-link')
 })
 console.log(clicked)
 if(!clicked) return;

 document.querySelector(`.planet--${clicked.dataset.tab}`).classList.add('active-planet');
 document.querySelector(`.planet-detail--${clicked.dataset.tab}`).classList.add('planet-active');
 clicked.classList.add('act-link')
})