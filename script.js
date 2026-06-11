let currentPage = 0;

const pages = document.querySelectorAll(".page");

function showPage(index){

pages.forEach(page=>{
page.classList.remove("active");
});

pages[index].classList.add("active");
}

function nextPage(){

if(currentPage < pages.length-1){

currentPage++;

showPage(currentPage);

}
else{

document.getElementById("journalSection").style.display = "none";

document.getElementById("starsSection").classList.remove("hidden");

}

}

function prevPage(){

if(currentPage > 0){

currentPage--;

showPage(currentPage);

}
}

function startJourney(){

document.querySelector(".hero").style.display="none";

document
.getElementById("journalSection")
.classList.remove("hidden");

}
