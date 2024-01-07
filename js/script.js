let pages = document.getElementById("moshaf-pages")

// pages.innerHTML += `
// <div class="border">
// <img src="../images/border.svg"/>
// </div>
// <object id="sura" data="../images/003.svg" type="image/svg+xml"></object>`
var page = 1
pages.innerHTML += `<object id="sura" data="../images/${page}.svg" type="image/svg+xml"></object>`

window.addEventListener("load", function () {
    let svgObject = document.getElementById('sura').contentDocument;
    let ayah = svgObject.querySelectorAll(".ayahPolygon");

    for (let index = 0; index < ayah.length; index++) {

        ayah[index].addEventListener("mouseover", function () {
            ayah[index].setAttribute("fill-opacity", 0.05);
            ayah[index].style.cursor = "pointer"
        })

        ayah[index].addEventListener("mouseout", function () {
            ayah[index].setAttribute("fill-opacity", 0);
        })
    }
});

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", function () {
    if (page < 10) {
        page++
        pages.innerHTML = `<object id="sura" data="../images/${page}.svg" type="image/svg+xml"></object>`
    }
});

prevBtn.addEventListener("click", function () {
    if (page > 0) {
        page--
        pages.innerHTML = `<object id="sura" data="../images/${page}.svg" type="image/svg+xml"></object>`
    }
});
