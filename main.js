const shareBtn = document.querySelector("button");
const contentFooter = document.querySelector(".content__footer");
shareBtn.addEventListener("click", () => {
    contentFooter.classList.toggle("show_social_icons");
});

document.addEventListener("click", (event) => {
  if (
    !shareBtn.contains(event.target) &&
    matchMedia("(min-width: 800px)").matches
  ) {
    contentFooter.classList.remove("show_social_icons");
  }
});

document.addEventListener("keydown", (e)=>{
  if(contentFooter.classList.contains("show_social_icons") && e.key === "Escape"){
    contentFooter.classList.remove("show_social_icons");
  }
})