$(document).ready(function(){
    document.getElementById("menuBtn").addEventListener("click", MenuToggle)
    document.getElementById("contact").addEventListener("click", ContactPage);
    document.getElementById("help").addEventListener("click", HelpPage);
    
    var content = document.getElementsByClassName("contentBlock");
    // for (let i = 0; i < content.length; i++)
    // {
    //     content[i].addEventListener("change", CheckPosition)
    // }
});

var carouselCount = 1;
setInterval(Carousel, 3500);

function Carousel() {
    if (carouselCount > 3) {carouselCount = 0;}

    switch (carouselCount) {
      case 1:
        carouselCount++;
        console.log(carouselCount);
        document.getElementById("carouselImg").setAttribute("src", "/images/rollerhockey.jpg");
        break;
      case 2:
        carouselCount++;
        console.log(carouselCount);
        document.getElementById("carouselImg").setAttribute("src", "/images/rollerderby.jpg");
        break;
      case 3:
        carouselCount++;
        console.log(carouselCount);
        document.getElementById("carouselImg").setAttribute("src", "/images/iceskating1.jpg");
        break;
      default:
        carouselCount++;
        console.log(carouselCount);
        document.getElementById("carouselImg").setAttribute("src", "/images/rollerrink.jpg");
        break;

    }
}

var isClosed = true;
function MenuToggle() {
    if (isClosed)
    {
        OpenAnim();
        console.log("open");
        isClosed = false;
    }
    else
    {
        CloseAnim();
        console.log("close");
        isClosed = true;
    }
}

function OpenAnim() {
    let upper = document.getElementById("upperBar");
    let middle = document.getElementById("middleBar");
    let lower = document.getElementById("lowerBar");
    let menu = document.getElementById("menu");
    let menuBG = document.getElementById("menuBG");

    middle.style.backgroundColor="rgba(255,255,255,0)";
    upper.style.marginTop = "17px";
    lower.style.marginTop = "17px";
    upper.style.transform = "rotate(45deg)";
    lower.style.transform = "rotate(-45deg)";
    menuBG.style.backgroundColor = "rgba(0, 0, 0, 0.733)";
    menu.style.right = "0px";
    menu.style.height = "165px";
}

function CloseAnim() {
    let upper = document.getElementById("upperBar");
    let middle = document.getElementById("middleBar");
    let lower = document.getElementById("lowerBar");
    let menu = document.getElementById("menu");
    let menuBG = document.getElementById("menuBG");

    middle.style.backgroundColor="#E28300";
    upper.style.marginTop = "5px";
    lower.style.marginTop = "29px";
    upper.style.transform = "rotate(0deg)";
    lower.style.transform = "rotate(0deg)";
    menuBG.style.backgroundColor = "rgba(255,255,255,0)";
    menu.style.right = "-260px";
    menu.style.height = "0px";
}

function ContactPage() {
    console.log("contact open");
}

function HelpPage() {
    console.log("help open");
}

let lastKnownScrollPosition = 0;
let ticking = false;
$(document).ready(()=>{let one = document.getElementById("one");});
let onePos = 0;
let currImg = 0;

function doSomething(scrollPos) {
  if (scrollPos < 0 && currImg == 0)
  {
        let img = document.getElementById("contentImage");
        img.setAttribute("src", "/images/contactBtn.png");
        currImg = 1;
  }
  if (scrollPos > 0 && currImg == 1)
  {
        let img = document.getElementById("contentImage");
        img.setAttribute("src", "/images/logo.png");
        currImg = 0;
  }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = one.scrollTop;
  onePos = one.getBoundingClientRect().top;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(onePos);
      ticking = false;
    });

    ticking = true;
  }
});