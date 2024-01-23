let img = document.querySelectorAll(".img")
let Img = document.querySelector(".Image>img")
let pc = document.querySelectorAll(".pc")
let Hidden = document.querySelector(".hidden")
let Menu = document.querySelector(".menu")
let add_btn = document.querySelector(".add-btn")
let cart = document.querySelector(".cart")
let sb = document.querySelector(".sb")



Menu.addEventListener('click',HamBurger)
// Img.addEventListener('load',change)
window.addEventListener('load',change)

function HamBurger(){
    Hidden.classList.toggle('active');
    Menu.classList.toggle('active')
}

add_btn.addEventListener('click',addtocart)

let carr = []

let parr = []

function addtocart(){
    cart.innerText++
    carr.push(cart.innerText)
    parr.push(pc[0].innerText)
    savedata()
}

console.log("yes",pc[0].innerText)
// sb.addEventListener('click',savedata)

// let carr = [cart.innerText]


function savedata(){
    localStorage.setItem("carr",carr)
    localStorage.setItem("parr",parr)
}

let b = JSON.parse(localStorage.getItem("Arr"))
let d = JSON.parse(localStorage.getItem("Err"))

let c = []
 c.push(b[0]["1"])
 c.push(b[0]["2"])
 c.push(b[0]["3"])
 c.push(b[0]["4"])
 c.push(b[0]["5"])

let e = []
e.push(d[0]["product"]) 
e.push(d[0]["price"]) 
e.push(d[0]["description"]) 


function change(){
    let a = JSON.parse(localStorage.getItem("arr"))
    Img.src = a[0]
    img.forEach(function(ele,i){
        ele.src = c[i]
    })
    pc.forEach(function(ele,i){
        ele.innerText = e[i]
    })
}

// console.log(e[0])
// click method

// img.forEach(function(ele,i){
//     ele.addEventListener('click',function(){
//        Img.src = ele.src
//     })
// })


// scroll method

img.forEach(function(ele,i,arr){
    let a = JSON.parse(localStorage.getItem("arr"))
    ele.addEventListener('mouseover',function(){
       Img.src = ele.src
    })
    ele.addEventListener('mouseout',function(){
        Img.src = a
    })
})