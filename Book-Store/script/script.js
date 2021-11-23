const books = document.getElementById("books");
const result = document.getElementById("search-result");
document.getElementById("search-btn").addEventListener("click", getBookList);

function getBookList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  console.log(searchInputTxt);
  fetch(`https://api.itbook.store/1.0/search/${searchInputTxt}`)
    .then((response) => response.json())
    .then((data) => {
      let response = "";
      if (data.books) {
        for (let x of data.books) {
          response += `
          <div class="col mb-3 d-flex justify-content-center">
            <div class="card">
              <img src="${x.image}" class="card-img-top" alt="Book">
              <div class="card-body">
                <h5 class="card-title">${x.title}</h5>
                <p class="card-text">${x.subtitle}<br><hr>${x.price}</p>
                <a href="${x.url}" class="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>`;
        }
      } else {
        response = "Sorry, we didn't find any book!";
      }
      result.innerHTML = response;
    });
}

fetch(`https://api.itbook.store/1.0/search/new`)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    if (data.books) {
      for (let x of data.books) {
        html += `
        <div class="col mb-3 d-flex justify-content-center">
          <div class="card">
            <img src="${x.image}" class="card-img-top" alt="Book">
            <div class="card-body">
              <h5 class="card-title">${x.title}</h5>
              <p class="card-text">${x.subtitle}<br><hr>${x.price}</p>
              <a href="${x.url}" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>`;
      }
    } else {
      html = "Sorry, we didn't find any book!";
    }
    books.innerHTML = html;
  });

