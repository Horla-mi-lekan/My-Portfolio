$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navigation').addClass("sticky");
        }else{
            $('.navigation').removeClass("sticky");
        }
    })

    var typed = new Typed(".typing-1", {
        strings: [
             "Developer", "Designer", "Freelancer",
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loops: true
    })

    var typed = new Typed(".typing-2", {
        strings: [
             "Freelancer", "Designer", "Developer",
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loops: true
    })
})

let calsScrollValue = ()=>{
  let totop = document.getElementById("Scroll-up-btn");
  let pos = document.documentElement.scrollTop;
  let calsHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calsHeight);

  if(pos > 100){
 totop.style.display = "grid"
 }else{
  totop.style.display = "none"
 }

 totop.addEventListener("click", ()=>{
  document.documentElement.scrollTop = 0;
 })
}
window.onscroll = calsScrollValue;
window.onload = calsScrollValue;


const first_skills = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skill svg circle");

window.addEventListener("scroll", ()=>{
    if(!skillsPlayed)
    skillsCounter();
})

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight) return true; 
    return false;
}

function updateCount(num, maxNum){
    let currentNum = +num.innerText;
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num, maxNum);
        }, 12)
    }
}

let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skills))return;
      skillsPlayed = true;
    sk_counter.forEach((counter, i) => {
            let target = +counter.dataset.target;
            let strokeValue = 465 - 465 * (target / 100);

            progress_bars[i].style.setProperty("--target", strokeValue);

            setTimeout(() => {
                  updateCount(counter, target);
            }, 400)
    });
    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}

var MenuButton = document.getElementById("menu-btn");
var CancelButton = document.getElementById("cancel-btn");
var UnlistPart = document.getElementById("unlist-part");

MenuButton.addEventListener("click", ()=>{
    UnlistPart.style.display = "block";
})

CancelButton.addEventListener("click", ()=>{
    UnlistPart.style.display = "none";
})