/* 클릭할때마다 글자색 변함---------------------------
const title = document.querySelector("#title");


const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#a29bfe";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
클릭할때마다 글자색 변함--------------------------- */

/* 와이파이 키면, 끄면 나오는 메세지---------------------------

const title = document.querySelector("#title");

window.addEventListener("offline", event => {
  console.log("The network connection has been lost.");
});

function handleOffline() {
  console.log("Bye");
}
function handleOnline() {
  console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

와이파이 키면, 끄면 나오는 메세지--------------------------- */

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
