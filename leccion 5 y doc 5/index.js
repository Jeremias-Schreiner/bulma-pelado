//mobile menu

const burgerIcon = document.getElementById('burger')
const navbarMenu = document.getElementById('nav-links')


burgerIcon.addEventListener(
    "click",
    ()=>{
        burgerIcon.classList.toggle('is-active')
        navbarMenu.classList.toggle('is-active')
    }
)