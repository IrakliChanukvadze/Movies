import { openModal } from "./modalOpener.js";

export const createComponent = (value) => {
  let title = value.title || value.name;
  let imageUrl = `${
    value.backdrop_path
      ? `https://image.tmdb.org/t/p/w300${value.backdrop_path}`
      : "/images/defaultImg.png"
  }`;
  if (title.length > 20) {
    title = `${title.slice(0, 31)}...`;
  }
  const component = document.createElement("div");
  component.classList.add("movie");
  component.innerHTML = `
        <img src=${imageUrl} alt="movie-cover"/>
        <div class="ranking"><h3>${value.vote_average.toFixed(2)}</h3></div>
        
        <h2>${title}</h2>`;
  component.addEventListener("click", () => {
    openModal(value);
  });
  return component;
};
