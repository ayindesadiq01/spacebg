'use strict';
const linkItems = document.querySelector('.link-items');
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.linke');

// CHANING NAVBAR LINK
// Using event delegation
// linkItems.addEventListener('click', (e, i) => {
//  const clicked = e.target.closest('.nav-link')
//  // console.log(clicked.dataset.nave)
//  // console.log(clicked)
//  sections.forEach(el => {
//  el.classList.remove('section-active') 
//  })
//  linke.forEach(x => {
//   x.classList.remove('active-link')
//  })

//  if(!clicked) return;
//  document.querySelector(`.section-active--${clicked.dataset.nave}`).classList.add('section-active');

//  clicked.classList.add('active-link')
// })

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navlink => {
 navlink.addEventListener('click', function(e){
  const clicked = e.target.closest('.nav-link')
  console.log(clicked)
  sections.forEach(section => {
   section.classList.remove('section-active') 
  })
  links.forEach(link => {
   link.classList.remove('active-link')
  })

  if(clicked) {
   document.querySelector(`.section-active--${clicked.dataset.nave}`).classList.add('section-active');
   clicked.classList.add('active-link')
  }
 })
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
const btns = document.querySelectorAll('.btn');

// USING EVENT DELEGATION
// planets.addEventListener('click', function(e) {
//  const clicked = e.target.closest('.planet-list');
//  planetImg.forEach(el => {
//   el.classList.remove('active-planet')
//  })
//  planetDetails.forEach(x => {
//   x.classList.remove('planet-active')
//  })
//  planetlist.forEach(c => {
//   c.classList.remove('act-link')
//  })
//  console.log(clicked)
//  if(!clicked) return;

//  document.querySelector(`.planet--${clicked.dataset.tab}`).classList.add('active-planet');
//  document.querySelector(`.planet-detail--${clicked.dataset.tab}`).classList.add('planet-active');
//  clicked.classList.add('act-link')
// })

const planetBtns = document.querySelectorAll('.planet-list');
planetBtns.forEach(planetBtn => {
 planetBtn.addEventListener('click', e => {
  const clicked = e.target.closest('.btn');
  console.log(clicked)
   planetImg.forEach(el => {
    el.classList.remove('active-planet')
   })
   planetDetails.forEach(x => {
    x.classList.remove('planet-active')
   })
   btns.forEach(c => {
    c.classList.remove('act-link')
   })


  if(clicked) {
   document.querySelector(`.planet--${clicked.dataset.tab}`).classList.add('active-planet');
   document.querySelector(`.planet-detail--${clicked.dataset.tab}`).classList.add('planet-active');
   clicked.classList.add('act-link')
  }
 })
})

// WORKIG ON DOTS
const dots =  document.querySelector('.dot');
const dotsBtn = document.querySelectorAll('.dots-dot');
const crewDetails = document.querySelectorAll('.crew-detail');


dotsBtn.forEach(dot => {
 dot.addEventListener('click', function(e) {
  const clicked = e.target.closest('.dots-dot');
  crewDetails.forEach(crewDetail => {
   crewDetail.classList.remove('active-crew')
  })
  dotsBtn.forEach(dotBtn => {
   dotBtn.classList.remove('dots-dot--active');
  })

  if(clicked) {
   document.querySelector(`.crew-detail--${clicked.dataset.slide}`).classList.add('active-crew');
   clicked.classList.add('dots-dot--active')
  }
 })
})

// WORKING WITH TECHNOLOGY
const techBtns = document.querySelectorAll('.technology-button');
const techDetails = document.querySelectorAll('.tech-details');
const techImages = document.querySelectorAll('.technology-image')

techBtns.forEach(techBtn => {
 techBtn.addEventListener('click', function(e){
  const clicked = e.target.closest('.technology-button');
  console.log(clicked)
  techBtns.forEach(tButton => {
   tButton.classList.remove('active-technology')
  });
  techDetails.forEach(techDetail => {
   techDetail.classList.remove('active-details')
  })
  techImages.forEach(techImg => {
   techImg.classList.remove('active-tech-image')
  })


  if(clicked) {
   document.querySelector(`.tech-details--${clicked.dataset.btn}`).classList.add('active-details');
   document.querySelector(`.tech-image--${clicked.dataset.btn}`).classList.add('active-tech-image');
   clicked.classList.add('active-technology')
  }
 })
})