export const openModal = (content) => {
  const dialogModal = document.querySelector(".modal");
  //   dialogModal.innerHTML = "";
  let title = content.title || content.name;
  let release_year = content.release_date || content.first_air_date;
  let imageUrl = `${
    content.backdrop_path
      ? `https://image.tmdb.org/t/p/w300${content.backdrop_path}`
      : "/images/defaultImg.png"
  }`;
  const modalContent = `
  <div class="icon-container"><i class="fa-solid fa-x closer"></i></div>
  
  <img src=${imageUrl} alt="movie poster" />
  <p><span>title:</span> ${title}</p>
  <p><span>release year:</span> ${release_year}</p>
  <p><span>imdb ranking:</span> ${content.vote_average}</p>
  <p><span>total votes:</span> ${content.vote_count}</p>`;
  dialogModal.innerHTML = modalContent;
  dialogModal.show();
  document.querySelector(".icon-container").addEventListener("click", () => {
    dialogModal.close();
  });
  console.log("clicked from modal,", content, dialogModal, "modal");
  console.log("closer");
};
