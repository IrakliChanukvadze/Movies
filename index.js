import { myNavList } from "./navLinks.js";
import { createComponent } from "./createMovieComponent.js";

let myVar;
let myListElements = "";
let type = "";

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

fetcher(
  "https://api.themoviedb.org/3/trending/all/day?api_key=dbfdeb12dc114137c3eeb9635154dd89&append_to_response=videos"
);

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
  document.querySelector(`.${value.name}`).addEventListener("click", () => {
    fetcher(value.url);
    type = value.name;
  });
});
