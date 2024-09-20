let userInput = document.getElementById("userInput")
let homeContent = document.getElementById("homeContent")
let searchInput = document.getElementById("searchInput")
let alertInp = document.getElementById("alertInp")


let items = []

if (localStorage.getItem("allItems") != null) {
    items = JSON.parse(localStorage.getItem("allItems"))
    display()
}

function addItem() {
    if (userInput.value == "") {
        alertInp.style.display = "block"
    } else {
        alertInp.style.display = "none"

        items.push(userInput.value)
        userInput.value = ""
        localStorage.setItem("allItems", JSON.stringify(items))
        display()
    }

}


function display() {
    let cartona = ``

    items.forEach((item, index) => {
        cartona += ` <div
       class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center"
     >
       <p id="item" class="m-0 p-0">${item}</p>
       <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${index})"></i>
     </div>`
    })

    homeContent.innerHTML = cartona;
}

function deleteItem(index) {
    items.splice(index, 1)
    localStorage.setItem("allItems", JSON.stringify(items))
    display()
}


searchInput.addEventListener("input", function (event) {
    searchItem(event.target.value)

})

function searchItem(searchValue) {
    let cartona = ``

    items.forEach((item, index) => {
        if (item.toLowerCase().includes(searchValue.toLowerCase())) {
            cartona += ` <div
        class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center"
      >
        <p id="item" class="m-0 p-0">${item.toLowerCase().replace(searchValue.toLowerCase, `<span class="fw-bolder text-info">${searchValue}</span>`)}</p>
        <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${index})"></i>
      </div>`
        }
    })

    homeContent.innerHTML = cartona;
}