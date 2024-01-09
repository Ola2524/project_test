let hezb = document.getElementById("hezb")
let suar = document.getElementById("suar")
let page_num = document.getElementById("page-num")
let suar_filter = document.querySelector(".suar-filter")
let hezb_filter = document.querySelector(".hezb-filter")
let page_filter = document.querySelector(".page-filter")

suar.addEventListener("click", function() {
    suar_filter.style.display = "flex"
});

hezb.addEventListener("click", function() {
    hezb_filter.style.display = "flex"
});
page_num.addEventListener("click", function() {
    page_filter.style.display = "flex"
});

function closeSuarFilter(){
    suar_filter.style.display = "none"
}

function closeHezbFilter(){
    hezb_filter.style.display = "none"
}

function closePageFilter(){
    page_filter.style.display = "none"
}