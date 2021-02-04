const tool = document.querySelector(".tool");

document.addEventListener("scroll",()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
      tool.style.display="flex";
    }
    else{
      tool.style.display="none";
    }
})
const hum = document.querySelector(".headsec .proweb .navbar .navger");
const mobmenu = document.querySelector(".headsec .proweb .navbar ul");
const mobitems = document.querySelectorAll(".headsec .proweb .navbar ul li a");
const header = document.querySelector(".headsec .proweb");
hum.addEventListener('click', () => {
  hum.classList.toggle("active");
  mobmenu.classList.toggle("active");
});
mobitems.forEach((item) => {
  item.addEventListener('click', () => {
    hum.classList.toggle("active");
    mobmenu.classList.toggle("active");
  });
});
