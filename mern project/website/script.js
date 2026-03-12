document.addEventListener("DOMContentLoaded",function(){
    const button = document.querySelector("button");
    button.addEventListener("click",function(){
        alert("Welcome to VizAlgo! Start learning Data Structure and Algorithms.");

    });

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
    link.addEventListener("click",function(){
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active")
    });
    });
    });