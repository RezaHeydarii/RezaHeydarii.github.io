var bar =document.querySelectorAll(".bar");
var btn =document.querySelector(".hamberger-btn");
var searchBtn=document.querySelector("#search-btn");
var searchInput=document.querySelector("#search-input");

var navMenu =document.querySelector(".nav-menu");
btn.addEventListener("click",function(){
if(navMenu.classList.contains("open-menu")){
    bar[0].classList.remove("top-bar");
    bar[1].classList.remove("middle-bar");
    bar[2].classList.remove("bottom-bar");
    navMenu.classList.remove("open-menu");
    setTimeout(function(){
        navMenu.style.display="none";
    },700);
}
else if(!navMenu.classList.contains("open-menu")){
    navMenu.style.display="block";
    setTimeout(function(){
        bar[0].classList.add("top-bar");
        bar[1].classList.add("middle-bar");
        bar[2].classList.add("bottom-bar");
        navMenu.classList.add("open-menu");
    },2);
}

});

searchBtn.addEventListener("click",function(){
    searchBtn.style.display="none";
    searchInput.style.display="flex";
    setTimeout(function(){
        searchInput.classList.add("open-search");
    },10);
    searchInput.focus();
});



navMenu.addEventListener("click",function(){
    if(navMenu.classList.contains("open-menu")){
        bar[0].classList.remove("top-bar");
        bar[1].classList.remove("middle-bar");
        bar[2].classList.remove("bottom-bar");
        navMenu.classList.remove("open-menu");
        setTimeout(function(){
            navMenu.style.display="none";
        },700);
    }
});
