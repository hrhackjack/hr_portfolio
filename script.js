import { sk, sky } from "./resources/skills.js";



$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    }
    else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    }
    else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Cybersecurity Enthusiast", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Cybersecurity Enthusiast", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script

  if (screen.width <= 500) {
    $(".carousel").owlCarousel({
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive:
      {
        0: {
          items: 1,
          nav: false,
        },

      },
    });
  }
  else if (screen.width > 501 && screen.width <= 900) {
    $(".carousel").owlCarousel({
      margin: 15,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive:
      {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },

      },
    });
  }
  else {
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive:
      {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  }


});

if (screen.width >= 501 && screen.width <= 690) {
  document.getElementById("skills-content").innerHTML = "";
  document.getElementById("skills-content").innerHTML = (sk());
  // console.log(sk());
}
if (screen.width >= 691 && screen.width <= 947) {
  document.getElementById("skills-content").innerHTML = "";
  document.getElementById("skills-content").innerHTML = (sky());
  // console.log(sky());
}

//For getting the calendar data
GitHubCalendar(".calendar", "Hrishabh ", { responsive: true ,tooltips: true});



// total git commit Live data

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
sleep(100).then(() => {
  let x = document.querySelector(".contrib-number").innerText;
  
  if(x>0)
  {
    window.location.reload();
  }
  
  // x = x.split(" ");
  // x = (+(x[0])--);
  // x = x - (x % 10);
  x=87

  
  document.querySelector("#contrib-number").innerText = "";
  document.querySelector("#contrib-number").innerText = x + "+";
})






// fro project section

var project = [
  // {
  //   Imag: "lyst.jpg",
  //   ProjTitle: "lyst.com (clone)",
  //   ProjDiscription: "lyst is an e-commerce website for buying various types of Faison related products. We have tried our best to clone of the website.",
  //   TeachStack: "HTML | CSS | JAVASCRIPT | ES6",
  //   WorkDiscription: "It was collaborative project built by a team of 6 executed in 5 days and I was the co-leader in this.",
  //   live: "https://glowing-panda-1c570f.netlify.app/",
  //   github: "https://github.com/rhaegar7996/CW_Web19_lyst",
  //   innerText: "LIVE ↗️"
  // },
];


let x=false;

project.forEach(function (data) {

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let box = document.createElement("div");
  box.setAttribute("class", "box");

  let img = document.createElement("img");
  img.src = "/resources/" + data.Imag;
  img.alt = data.project_title;

  let project_ditels = document.createElement("div");
  project_ditels.setAttribute("class", "project-ditels");

  let project_title = document.createElement("h3");
  project_title.setAttribute("class", "project-title");
  project_title.innerText = data.ProjTitle;

  let p = document.createElement("p");
  p.innerText = data.ProjDiscription;

  let h4 = document.createElement("h4");
  h4.innerText = "Tech-Stack";

  let h5 = document.createElement("h5");
  h5.innerText = data.TeachStack;


  let li = document.createElement("li");
  li.innerText = data.WorkDiscription;

  let btn = document.createElement("div");
  btn.setAttribute("class", "btn");


  let live = document.createElement("a");
  live.href = data.live;
  live.target = "_blank";
  live.innerText = data.innerText;

  let github = document.createElement("a");
  github.href = data.github;
  github.target = "_blank";
  github.innerText = " GITHUB ↗️";

  btn.append(live, github);
  project_ditels.append(project_title, p, h4, h5, li, btn);

  box.append(img, project_ditels);

  card.append(box);

  // console.log(card);

  document.querySelector("#carousel").append(card);
});

// For open resume in another window
// document.querySelector(".resumeOpen").addEventListener("click", open);
// function open() {
//   window.location.href="https://Hrishabh .github.io/resources/Hrishabh_Resume.pdf";
// };

// alert(window. innerWidth);



document.querySelector(".resumeDow1").addEventListener("click", function()
{
  window.open("resources/Hrishabh_Raj.pdf", "_blank");
});


document.querySelector(".resumeDow2").addEventListener("click", function()
{
  window.open("resources/Hrishabh_Raj.pdf", "_blank");
});


document.querySelector(".resumeDow3").addEventListener("click", function()
{
  window.open("resources/Hrishabh_Raj.pdf", "_blank");
});