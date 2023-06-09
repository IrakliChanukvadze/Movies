const open = (dialogModal, blurCont) => {
  dialogModal.show();
  blurCont.classList.remove("fade-out");
  blurCont.classList.add("fade-in");
  blurCont.style.display = "block";
};
const close = (dialogModal, blurCont) => {
  dialogModal.classList.remove("show");
  dialogModal.classList.add("hide");
  blurCont.classList.remove("fade-in");
  blurCont.classList.add("fade-out");
  setTimeout(() => {
    blurCont.style.display = "none";
    dialogModal.close();
    dialogModal.classList.remove("hide");
  }, 500);
};

export const openModal = (content) => {
  const dialogModal = document.querySelector(".modal");
  const blurCont = document.querySelector(".modal-blur");
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
  open(dialogModal, blurCont);

  document.querySelector(".icon-container").addEventListener("click", () => {
    close(dialogModal, blurCont);
  });
  blurCont.addEventListener("click", () => {
    close(dialogModal, blurCont);
  });
};
