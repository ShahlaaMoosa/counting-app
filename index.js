//Building a counter app

let saveEl = document.getElementById("save-el") //asking for the element with the id of save-el and storing it in a variable called saveEl
let countEl = document.getElementById("count-el") //asking for the element with the id of count-el and storing it in a variable called countEl
let count = 0

console.log(saveEl)


function increment() {
    count = count + 1
    countEl.textContent = count //modifying the html element with the new value of count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}


