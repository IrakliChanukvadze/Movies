import { myNavList } from "./navLinks.js";
import { createComponent } from "./createMovieComponent.js";

let myVar;

const setMyVar = (value) => {
  myVar = value;
  return (item) => render(item);
};

let fetcher = (apiUrl) => {
  fetch(apiUrl)
    .then((data) => data.json())
    .then((resp) => {
      const setState = setMyVar(resp.results);
      setState("main");
    });
};

const render = (className) => {
  document.querySelector(`.${className}`).innerHTML = "";
  myVar.forEach((value) => {
    const component = createComponent(value);
    document.querySelector(`.${className}`).appendChild(component);
  });
};

// fetcher(
//   "https://api.themoviedb.org/3/trending/all/day?api_key=dbfdeb12dc114137c3eeb9635154dd89&append_to_response=videos"
// );

myNavList.forEach((value) => {
  const navList = document.querySelector(".nav-items");
  const navP = document.createElement("p");
  navP.classList.add(value.name);
  navP.innerText = value.name;

  navList.appendChild(navP);
  // const before = getComputedStyle(
  //   document.querySelector(`.${value.name}`),
  //   "::before"
  // );
});

myNavList.forEach((value) => {
  const listItem = document.querySelector(`.${value.name}`);
  listItem.addEventListener("click", () => {
    window.location.href = `/?query=${value.name}`;
  });
});
// debugger;
console.log(window.location);
window.addEventListener("DOMContentLoaded", (event) => {
  const URL = event.target.URL;

  if (!event.target.location.search) {
    window.location.href = "http://127.0.0.1:5500/?" + `query=Trending`;
  }
  myNavList.forEach((item) => {
    const listItem = document.querySelector(`.${item.name}`);
    if (URL.endsWith(item.name)) {
      listItem.classList.add("active");
      fetcher(item.url);
    } else {
      listItem.classList.remove("active");
    }
  });
});
