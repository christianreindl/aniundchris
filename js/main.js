const rotateOnScroll = document.querySelector(".circle__text-wrapper");
const circleButton = document.querySelector(".circle");
const introButton = document.querySelector(".intro__button");
const scribblePath = document.querySelector(".scribble-path");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", function () {
  requestAnimationFrame(function () {
    var value = window.scrollY * 0.25;
    rotateOnScroll.style.transform = `rotate(${value}deg)`;
  });
});

window.addEventListener("scroll", function () {
  if (isInViewport(introButton)) {
    circleButton.classList.add("circle--hidden");
    console.log("isVisible");
  } else {
    circleButton.classList.remove("circle--hidden");
    console.log("is not viisible");
  }
});

window.addEventListener("scroll", function () {
  requestAnimationFrame(function () {
    const scrollY = window.scrollY;
    const windowCenter = window.innerHeight * 0.5;
    const totalHeight = document.body.scrollHeight;
    const scribblePathLength = 8134;

    const scrollPercent = (scrollY + windowCenter) / totalHeight;
    // 0 = 0
    // 5000 = 8134
    const strokeDashoffset = scrollPercent * -scribblePathLength;

    scribblePath.style.strokeDashoffset = strokeDashoffset;

    console.log("Percent: " + scrollPercent);
    console.log("Dashoffset: " + strokeDashoffset);
  });
});

/*
// Keep themes in sync with CSS
const themes = [
  { name: 'purple', color: '#7e7a94' },
  { name: 'orange', color: '#e6a49c' },
  { name: 'green', color: '#809a8d' }
]

function getRandomTheme() {
  const randomNumber = Math.ceil(Math.random() * themes.length) - 1
  return themes[randomNumber]
}

function setFavicons(theme) {
  const headTitle = document.querySelector('head')
  const folder = `/img/theme-${theme.name}/`

  const favIcons = [
    { rel: 'shortcut icon', file: 'favicon.png'},
  ]

  // Add Favicon Link tags
  favIcons.forEach(function(favIcon) {
    const setFavicon = document.createElement('link')
    setFavicon.setAttribute('rel', favIcon.rel)
    setFavicon.setAttribute('href', folder + favIcon.file)
    headTitle.appendChild(setFavicon)
  })

  // Add meta tags
  const metaTheme = document.createElement('meta')
  metaTheme.setAttribute('name', 'theme-color')
  metaTheme.setAttribute('content', theme.color)
  headTitle.appendChild(metaTheme)
}

function handleLoad() {
  const body = document.querySelector('BODY')
  const theme = getRandomTheme()
  setFavicons(theme)
  body.classList.add('loaded')
  body.classList.add(`theme--${theme.name}`)
}

function handleBeforeUnload() {
  window.scrollTo(0,0);
}

window.addEventListener('load', handleLoad)
window.addEventListener('beforeunload', handleBeforeUnload);
*/

function handleLoad() {
  const body = document.querySelector("BODY");
  body.classList.add("loaded");
}

function handleBeforeUnload() {
  window.scrollTo(0, 0);
}

window.addEventListener("load", handleLoad);
window.addEventListener("beforeunload", handleBeforeUnload);
