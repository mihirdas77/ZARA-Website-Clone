let SB = document.querySelector(".SB")
let imz = document.querySelector(".imz")
let prdct = document.querySelector(".prdct")
let cross = document.querySelector(".cross")
let pricee = document.querySelector(".pricee")



let s = JSON.parse(localStorage.getItem("carr"))
let a = JSON.parse(localStorage.getItem("arr"))
let d = JSON.parse(localStorage.getItem("Err"))
let g = JSON.parse(localStorage.getItem("parr"))

window.addEventListener('load',change)


function change(){
    SB.innerText = s
    imz.src = a[0]
    pricee.innerText = d[0]["price"]
    prdct.innerText = g[0]
}


console.log(s[0])
console.log(a[0])
console.log(d[0]["price"])
console.log(g)