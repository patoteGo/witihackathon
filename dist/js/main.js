//menu movil
const mobilebutton = document.querySelector('#menubutton')
const closebutton = document.querySelector('#closebutton')

const mobilemenu = document.querySelector('#mobilemenu')
const mobilemenuSlide = document.querySelector('#mobilemenu .menu-slide')


mobilebutton.addEventListener('click', () => {
    mobilemenu.style.pointerEvents = 'all'
    mobilemenuSlide.style.transform  = 'translateX(0px)'
})

closebutton.addEventListener('click', () => {
    mobilemenu.style.pointerEvents = 'none'
    mobilemenuSlide.style.transform  = 'translateX(100%)'
})

