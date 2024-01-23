let Hidden = document.querySelector(".hidden")
let Menu = document.querySelector(".menu")
let Image = document.querySelector(".Imagess") 


Menu.addEventListener('click',HamBurger)
Image.addEventListener('click',Homepage)

function HamBurger(){
    Hidden.classList.toggle('active');
    Menu.classList.toggle('active')
}

function Homepage(){
    window.location.href = "index.html"
}

