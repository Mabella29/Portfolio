document.addEventListener("DOMContentLoaded", function(){
    const menuBtn= document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a")

    menuBtn.addEventListener('click', ()=>{
        nav.classList.toggle("active");

        if(nav.classList.contains("active")){
            menuBtn.innerHTML = "&#10006;";
        }else{
            menuBtn.innerHTML = "&#9776;"; 
        }
    })

    navLinks.forEach(link =>{
        link.addEventListener("click",() =>{
            nav.classList.remove("active");
            menuBtn.innerHTML =  "&#9776;"; 
        })
    })
})