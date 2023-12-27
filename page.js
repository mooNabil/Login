let myItem = document.querySelector("#myItem")
let dataSelect = document.getElementById("dataSelect")
let input = document.querySelector("input");


let allData = []

// get data from Api
getData("pizza")
async function getData(key) {

    let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${key}`)

    let final = await result.json()

    allData = final.recipes;
    displayData()

}



//display Api content
function displayData() {

    let cartona = ``

    for (let i = 0; i < allData.length; i++) {

        cartona += `
        <div class="col-md-4">
        <div class="item">
            <img class="imgStyle w100" src="${allData[i].image_url}" alt="${allData[i].image_url}">
            <p>${allData[i].title}</p>
        </div>
    </div>
        `
    }
    myItem.innerHTML = cartona;
}

dataSelect.addEventListener("change", function (e) {
    getData(e.target.value)
})


input.addEventListener("blur", function () {
    getData(input.value)
})