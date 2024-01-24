let img = document.querySelectorAll(".img")

let arr = []

let Arr = [{ 1: "https://static.zara.net/photos///2024/V/0/2/p/2599/100/922/2/w/563/2599100922_1_1_1.jpg?ts=1705667397022", 2: "https://static.zara.net/photos///2024/V/0/2/p/2599/100/922/2/w/563/2599100922_2_1_1.jpg?ts=1705667399232", 3: "https://static.zara.net/photos///2024/V/0/2/p/2599/100/922/2/w/563/2599100922_2_2_1.jpg?ts=1705667399485", 4: "https://static.zara.net/photos///2024/V/0/2/p/2599/100/922/2/w/563/2599100922_2_3_1.jpg?ts=1705667397111", 5: "https://static.zara.net/photos///2024/V/0/2/p/2599/100/922/2/w/563/2599100922_2_4_1.jpg?ts=1705667400729" }, { 1: "https://static.zara.net/photos///2024/V/0/2/p/1063/411/800/2/w/563/1063411800_1_1_1.jpg?ts=1705480884793", 2: "https://static.zara.net/photos///2024/V/0/2/p/1063/411/800/2/w/563/1063411800_2_1_1.jpg?ts=1705480886224", 3: "https://static.zara.net/photos///2024/V/0/2/p/1063/411/800/2/w/563/1063411800_2_2_1.jpg?ts=1705480885358", 4: "https://static.zara.net/photos///2024/V/0/2/p/1063/411/800/2/w/563/1063411800_2_3_1.jpg?ts=1705480884166", 5: "https://static.zara.net/photos///2024/V/0/2/p/1063/411/800/2/w/563/1063411800_2_4_1.jpg?ts=1705480889159" }]

let Drr = [{product:"ABSTRACT PRINT SHIRT",price:"₹ 3,590.00",description:"Cropped fit collared shirt made of linen and viscose. Short sleeves and a button-up front."},{product:"STRIPED VISCOSE SHIRT",price:"₹ 3,290.00",description:"Relaxed fit shirt made of viscose fabric. Lapel collar and short sleeves. Button-up front."}]



let Narr = []

let Err = []

img.forEach(function (ele, i) {
    ele.addEventListener('click', function () {
        Narr.push(Arr[i])
        Err.push(Drr[i])
        arr.push(ele.src)
        savedata()
        window.location.href = "./proman.html"
    })
})


function savedata() {
    localStorage.setItem("arr", JSON.stringify(arr))
    localStorage.setItem("Arr", JSON.stringify(Narr))
    localStorage.setItem("Err", JSON.stringify(Err))
}
