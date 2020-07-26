const el = document.getElementById("#modul");

el.addEventListener("mousemove", (e) => {
  if(e.offsetX <=50){
      el.style.backgroundPositionX = -e.offsetX + "px";
    }
  if(e.offsetY <= 50){
    el.style.backgroundPositionY = -e.offsetY + "px";
  }
});