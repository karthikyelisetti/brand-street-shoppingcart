function fetchProdctsSummary() {
  var card = "";
  fetch("./json/products-summary.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.products.forEach((object) => {
        card += `<div class="col-md-3">
                    <div class="card card-details">
                    <h6 class="card-title text-sm-center mt-2">
                        ${object.description}
                    </h6>
                    <img
                        src="${object.images}"
                        class="card-img-top"
                        alt="${object.category}"
                    />
                    <div class="card-footer">
                        <a
                        href="${object.href}"
                        class="btn btn-secondary btn-sm"
                        style="
                            --bs-btn-padding-y: 0.25rem;
                            --bs-btn-padding-x: 0.5rem;
                            --bs-btn-font-size: 0.75rem;
                        "
                        >See more</a
                        >
                    </div>
                    </div>
                </div>`;
      });
      document.getElementById("summary-card").innerHTML = card;
    });
}

function fetchTopReviewed() {
  var card = "";
  var cardActive = true;
  var counter = 0;
  var cardCounter = 0;
  fetch("./json/top-reviewed.json")
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object) => {
        counter += 1;
        cardCounter += 1;
        if(cardActive && counter <= 6) {
          if(cardCounter == 1) {
            card += `<div class="carousel-item active">
                      <div class="card-wrapper d-lg-flex">
                        <div class="card">
                          <img
                            src="${object.images}"
                            class="card-img-top award"
                            alt="start-award"
                          />
                     </div>`;
          }else {
            card += `<div class="card">
                      <img
                        src="${object.images}"
                        class="card-img-top award"
                        alt="start-award"
                      />
                     </div>`;
          }
          if(counter%6 == 0) {
            card += `</div></div>`;
            cardActive = false;
            cardCounter = 0;
          }
        }else {
          if(cardCounter == 1) {
            card += `<div class="carousel-item">
                      <div class="card-wrapper d-lg-flex">
                        <div class="card">
                          <img
                            src="${object.images}"
                            class="card-img-top award"
                            alt="start-award"
                          />
                     </div>`;
          }else {
            card += `<div class="card">
                      <img
                        src="${object.images}"
                        class="card-img-top award"
                        alt="start-award"
                      />
                     </div>`;
          }
          if(counter%6 == 0) {
            card += `</div></div>`;
            cardCounter = 0;
          }
        }
      });
      console.log(card);
      document.getElementById("reviewed").innerHTML = card;
    });
}

// Calling the functions to load the data onload of the webpage
fetchProdctsSummary();
fetchTopReviewed();