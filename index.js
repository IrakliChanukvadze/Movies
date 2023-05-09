import { myNavList } from "./navLinks.js";
let myVar;
let myContent = "";
let myListElements = "";
let type = "";

const setMyVar = (value) => {
  console.log(value);
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
  myContent = "";
  myVar.forEach((value) => {
    let title = value.title || value.name;
    if (title.length > 20) {
      title = `${title.slice(0, 31)}...`;
    }
    myContent += `<div class="movie">
      <img src=${
        value.backdrop_path
          ? `https://image.tmdb.org/t/p/w300${value.backdrop_path}`
          : "/images/defaultImg.png"
      } alt="movie-cover"/>
      <div class="ranking"><h3>${value.vote_average.toFixed(2)}</h3></div>
      
      <h2>${title}</h2></div>`;
  });
  document.querySelector(`.${className}`).innerHTML = myContent;
};

fetcher(
  "https://api.themoviedb.org/3/trending/all/day?api_key=dbfdeb12dc114137c3eeb9635154dd89&append_to_response=videos"
);

myNavList.forEach((value) => {
  myListElements += `<p class=${value.name}>${value.name}</p>`;
});
document.querySelector(".nav-items").innerHTML = myListElements;
console.log(myListElements);
myNavList.forEach((value) => {
  document.querySelector(`.${value.name}`).addEventListener("click", () => {
    fetcher(value.url);
    type = value.name;
  });
});
