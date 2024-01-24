let Hidden = document.querySelectorAll(".hidden")
let Menu = document.querySelectorAll(".menu")


// Menu.addEventListener('click',HamBurger)



Menu.forEach(function(ele){
    ele.addEventListener('click',function(){
        ele.classList.toggle('active')
        Hidden.forEach(function(ele){
            ele.classList.toggle('active')
        })
    })
})

// function HamBurger(){
//     Hidden.classList.toggle('active');
//     Menu.classList.toggle('active')
// }


let content = document.querySelector(".content")
let leftArrow = document.querySelector(".left")
let rightArrow = document.querySelector(".right")

var cl = 0

leftArrow.addEventListener('click',function(){
    cl = (cl > 0) ? cl - 1 : 0
    content.style.transform = 'translate(' + (cl) * -33.33 +'%)'
})

rightArrow.addEventListener('click',function(){
    cl = (cl < 2) ? cl + 1 : 2
    content.style.transform = 'translate(' + (cl) * -33.33 +'%)'
})
