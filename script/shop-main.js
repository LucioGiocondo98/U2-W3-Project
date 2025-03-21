const getYearNow = function () {
  const year = document.getElementById("year");
  year.innerText = new Date().getFullYear();
};
getYearNow();

const myAPI =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNDBjYjM4MzRiZjAwMTUwMDA3NzEiLCJpYXQiOjE3NDI1NTMyOTEsImV4cCI6MTc0Mzc2Mjg5MX0.m6ysHX2FBHgvVCPxLpoEmOff8YcfGjEIprLN_ChrF_A";

const eventsUrl = "https://striveschool-api.herokuapp.com/api/product/";
const getEvents = function () {
  fetch(eventsUrl, {
    headers: {
      Authorization: `Bearer ${myAPI}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta");
      }
    })
    .then((data) => {
      console.log("?", data);
      const article = document.getElementById("forArticle");
      data.forEach((sneakers) => {
        article.innerHTML += `
          <div class="col col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card">
  <img src="${sneakers.imageUrl}" class="card-img-top w-100" alt="img">
  <div class="card-body">
    <h3 class="card-title">${sneakers.brand}</h3>
    <h5>${sneakers.name}</h5>
    <p class="card-text">${sneakers.description}</p>
    <pclass="card-text">${sneakers.price} $</p>
    <a href="./cart.html?id=${sneakers._id}" class="btn btn-dark">GO TO CART</a>
    </div>
  </div>
 </div>`;
      });
    })
    .catch((error) => {
      console.error("C'è stato un errore:", error); // Gestione degli errori
    });
};
getEvents();
