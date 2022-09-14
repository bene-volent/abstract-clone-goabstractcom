const topbar = document.querySelector('.topbar')
const menuButton = document.querySelector(".topbar-inner__small-bars");
const menuButtonContent = document.querySelector(
    ".topbar-inner__small-bars > .fa-bars"
);
// console.log(menuButton);
const menuContainer = document.querySelector(".topbar-control-container");

function matchMenuIcon() {
    if (menuContainer.classList.contains("opened")) {
        menuButtonContent.classList.add("fa-close");
        menuButtonContent.classList.remove("fa-bars");
    } else {
        menuButtonContent.classList.add("fa-bars");
        menuButtonContent.classList.remove("fa-close");
    }
}

function changeMenuStateSM() {
    if (menuContainer.classList.contains("closed")) {
        menuContainer.classList.add("opened");
        menuContainer.classList.remove("closed");
    } else {
        menuContainer.classList.add("closed");
        menuContainer.classList.remove("opened");
    }

    matchTopBarColor();
    matchMenuIcon();
}
function matchTopBarColor(){
    if (menuContainer.classList.contains("opened")){
        topbar.style.backgroundColor="#191a1b"
    }
    else{
        topbar.style.backgroundColor=""

    }
}
function menuClickHandler() {
    changeMenuStateSM();
}
menuButton.onclick = menuClickHandler
matchMenuIcon();
matchTopBarColor();


const searchButton = document.querySelector(".topbar-inner__small-search")
const searchBar = document.querySelector(".topbar__search-bar")
const searchClose = document.querySelector(".topbar__search-close")

searchButton.addEventListener('click',function(){searchBar.classList.remove('closed')})
searchClose.addEventListener('click',function(){searchBar.classList.add('closed')})