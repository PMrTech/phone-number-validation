const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function () {
  const inputText = document.querySelector(".input-text");
  const movieCards = document.querySelector(".movie-cards");
  fetch("https://www.omdbapi.com/?apikey=913f4688&s=" + inputText.value)
    .then((response) => response.json())
    .then((response) => {
      const listMovie = response.Search;
      let cards = "";
      listMovie.forEach((r) => (cards += showCards(r)));
      movieCards.innerHTML = cards;
      const modalButton = document.querySelectorAll(".modal-button");
      modalButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = this.dataset.imdbid;
          fetch(`https://www.omdbapi.com/?apikey=913f4688&i=${id}`)
            .then((response) => response.json())
            .then((response) => {
              const modalBody = document.querySelector(".modal-body");
              const movieDetail = showDetail(response);
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(r) {
  return `
          <div class="col-md-4 my-3">
              <div class="card"">
              <img src="${r.Poster}" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${r.Title}</h5>
                  <p class="card-text">${r.Year}</p>
                  <a href="#" class="btn btn-primary modal-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${r.imdbID}">details</a>
              </div>
              </div>
          </div>`;
}

function showDetail(results) {
  return `
          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">
                      <img src="${results.Poster}" class="img-fluid">
                      </div>
                      <div class="col-md">
                      <ul class="list-group">
                          <li class="list-group-item"><h4>${results.Title}</h4></li>
                          <li class="list-group-item"><strong>${results.Year}</strong></li>
                          <li class="list-group-item"><strong>Actors</strong> : ${results.Actors}</li>
                          <li class="list-group-item"><strong>Director</strong> : ${results.Director}</li>
                          <li class="list-group-item"><strong>Sinopsis</strong> : <br> ${results.Plot} </li>
                      </ul>
                  </div>
              </div>
          </div>
          `;
}
