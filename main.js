document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let lastsectionIndex = 0;
let ticking = false;

let body = document.body,
    html = document.documentElement;
let pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

window.addEventListener('scroll', function() {
  if (!ticking) {
    setTimeout(function() {
      setTimeout(_=> ticking = false, 200)
      if (window.pageYOffset>pageHeight-window.innerHeight) return
      let sectionIndex = Math.round(window.pageYOffset/window.innerHeight);
      console.log(sectionIndex);
      if (sectionIndex == lastsectionIndex) return
      let sections = document.querySelectorAll("section, header")
      sections[sectionIndex].scrollIntoView({behavior: "smooth"})
      lastsectionIndex = sectionIndex;
      makeIconActive(sectionIndex)
    }, 200);

    ticking = true;
  }
});

function makeIconActive(activeIndex) {
  activeIndex -= 1
  let icons = document.querySelectorAll("aside.slider ul li")
  for (var i = 0; i < icons.length; i++) {
    let iconElm = icons[i]
    if (i == activeIndex) iconElm.classList.add("active")
    else iconElm.classList.remove("active")
  }
}

function scrollToBottom() {
  window.scrollTo({
    top: pageHeight,
    left: 0,
    behavior: 'smooth'
  })
  ticking = true;
  setTimeout(_=> ticking = false, 200)
}

let bodyHasLoaded = false

function bodyLoaded() {
  // bodyHasLoaded = true;
  // hideSplashScreen()
}

setTimeout(function () {
  if (bodyHasLoaded) return
  hideSplashScreen()
}, 8*1000);

function hideSplashScreen() {
  let splashScreenElm = document.querySelector(".splash")
  splashScreenElm.classList.add("hidden")
  setTimeout(function() {
    let logoElm = document.querySelector(".logo")
    logoElm.classList.remove("hidden")
  }, 100)
}

function scrollDown() {
  let vrSectionElm = document.querySelector("section#vr")
  vrSectionElm.scrollIntoView({behavior: "smooth"})
}
