import suar from "./suar.js";

let sura = document.getElementById("sura")

for (let index = 0; index < 7; index++) {

    sura.innerHTML += `
    <div id="ayah" class="ayah">
        <div class="ayah-text">${suar[index].aya_text_emlaey}</div>
        <div class="separator">
            <span>${suar[index].aya_no}</span>
            <div class="separator-img">
                <img src="../images/separator.png">
            </div>
        </div>
    </div>
    `

    // let separator = document.createElement("div");
    // let separator_text = document.createElement("span");
    // separator.className = "separator";
    // let separator_img = document.createElement("img");
    // separator_img.src = "../images/separator.png";
    // separator_img.className = "separator-img"

    // let ayah = document.createElement("span");
    // ayah.id = suar[index].id
    // ayah.className = "ayah"
    // ayah.innerText = `${suar[index].aya_text_emlaey} `
    // separator_text.innerText = suar[index].aya_no
    // separator.appendChild(separator_text)
    // separator.appendChild(separator_img)
    // ayah.appendChild(separator)
    // first_page.appendChild(ayah);
}

// ${suar[index].aya_text_emlaey}