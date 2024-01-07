let pages = document.getElementById("moshaf-pages")
// const parsesvg = new DOMParser().parseFromString(XMLDocument, "text/xml");
// console.log(parsesvg);
// for (let index = 1; index < 3; index++) {
    // pages.innerHTML += `<img src="../images/00${index}.svg">`    
//     pages.innerHTML += `<object id="sura" data="../images/00${index}.svg" type="image/svg+xml"></object>`
//     let sura = document.getElementById("sura")
//     console.log(sura.value);
// }


pages.innerHTML += `<object id="sura" data="../images/001.svg" type="image/svg+xml"></object>`
let sura = document.getElementById("sura")
console.log(sura);
