const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
// window.addEventListener("scroll",()=>{
//     if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
//         navbarEl.classList.add("active");
//     }
//     else{
//         navbarEl.classList.remove("active");

//     }
// });


// const sidebtn = document.getElementById("menu-btn");
// const tableEl = document.getElementById("act");
const sidebar = document.getElementById("wrapper");
// if(sidebtn.addEventListener)

// if(sidebtn.addEventListener("click",true)){
//     sidebar.style.width = "0px";
//     tableEl.style.marginLeft = "30px";
// }
// else{
//     sidebar.style.width = "30px";
//     tableEl.style.marginLeft = "280px";

// }

// function openNav() {
//   document.getElementById("menu-btn").style.width = "250px";
//   document.getElementById("act").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("menu-btn").style.width = "0";
//   document.getElementById("act").style.marginLeft= "0";
// }





const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent= thisYear