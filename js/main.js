const button = document.querySelector('#toggle')
const dropdown = document.querySelector('.dropdown')

button.addEventListener('click',()=>{
    dropdown.classList.toggle('show')
})

const simpleAnimate = document.querySelectorAll('.js-plane-image')
simpleAnimate.forEach((e)=>{
    gsap.from(e,{duration:1,opacity:0,y:50,scrollTrigger:{trigger:e}})
})

gsap.from('.js-stag',{duration:0.6,opacity:0,y:50,stagger:0.2})
