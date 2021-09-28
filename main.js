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

window.addEventListener('scroll', function() {
  if (!ticking) {
    setTimeout(function() {
      setTimeout(_=> ticking = false, 200)
      let sectionIndex = Math.round((window.pageYOffset)/window.innerHeight );
      console.log(sectionIndex);
      if (sectionIndex == lastsectionIndex) return
      let sections = document.querySelectorAll("section, header")
      sections[sectionIndex].scrollIntoView({behavior: "smooth"})
      lastsectionIndex = sectionIndex;
    }, 200);

    ticking = true;
  }
});

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
