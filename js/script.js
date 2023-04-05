// Function to fetch the electronics category card details
function fetchAPICardDetails(apiUrl, category, elementID) {
  var card = "";
  fetch(`${apiUrl}/${category}`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object, key) => {
        card += `<div class="col-md-3">
                    <div class="card mb-3" style="height: 360px;">                      
                      <img src="${object.thumbnail}" class="card-img-top" style="width: 100%; height: 150px" alt="${object.title}">               
                      <div class="card-body">
                        <h6 class="card-title discount">
                          Upto ${object.discountPercentage}% off
                        </h6>
                        <h6 class="card-title">${object.title}</h6>
                        <p class="card-text description">${object.description}</p>
                        <span class="card-text"><small class="text-body-secondary fw-bold">
                          Price: <image src="./images/currency-rupee.svg" class="currency-rupee" />${object.price} *
                        </small></span><br />
                        <span class="card-text">`;
        if (object.rating > 4) {
          card += `<small class="text-body-secondary">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </small></span>
                    <div>
                      <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                      <span>
                        <button type="button" 
                          class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                          style="
                              --bs-btn-padding-y: 0.5rem;
                              --bs-btn-padding-x: 0.75rem;
                              --bs-btn-font-size: 0.90rem;
                            ">
                          Add to cart
                        </button></span>
                    </div>                                   
                </div>
                </div>
                </div>`;
        } else if (object.rating > 3 && object.rating < 4) {
          card += `<small class="text-body-secondary">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </small></span>
                    <span><button type="button" class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart">
                        Add to cart
                    </button></span>
                </div>
                </div>
                </div>`;
        } else {
          card += `<small class="text-body-secondary">
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </small></span>
                    <span><button type="button" class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart">
                        Add to cart
                    </button></span>
                </div>
                </div>
                </div>`;
        }
      });

      document.getElementById(`${elementID}`).innerHTML = card;
    });
}

// function to populate the sidepar menu
function fetchSideBarDetails(
  apiURL,
  categoryArr,
  elementID = "products-collapse"
) {
  var sideBar = `<a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                  <span class="fs-5 fw-semibold">Category</span>
                 </a>`;
  fetch(`${apiURL}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((object) => {
        if (categoryArr.includes(object)) {
          sideBar +=
            '<ul class="list-unstyled ps-0"><li class="category-list mb-1 fw-semi-bold">' +
            "<button" +
            'class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"' +
            'data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true"' +
            'onclick="fetchCategoryDetails(this.id)" id= "' +
            object +
            '" >' +
            object +
            "</button></li></ul>";
        }
      });

      document.getElementById(`${elementID}`).innerHTML = sideBar;
    });
}

// Function to populate based on the selected category
function fetchCategoryDetails(id, elementID = "product-details") {
  var indvCard = `<div class="row row-cols-1 row-cols-md-2 g-4 mt-3">`;
  fetch(`https://dummyjson.com/products/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object) => {
        indvCard += `<div class="col-md-3">
                      <div class="card mb-3" style="height: 360px;">                      
                        <img src="${object.thumbnail}" class="card-img-top" style="width: 100%; height: 150px" alt="${object.title}">               
                        <div class="card-body">
                          <h6 class="card-title discount">
                            Upto ${object.discountPercentage}% off
                          </h6>
                          <h6 class="card-title">${object.title}</h6>
                          <p class="card-text description">${object.description}</p>
                          <span class="card-text"><small class="text-body-secondary fw-bold">
                            Price: <image src="./images/currency-rupee.svg" class="currency-rupee" />${object.price} *
                          </small></span><br />
                          <span class="card-text">`;

        if (object.rating > 4) {
          indvCard += `<small class="text-body-secondary">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </small></span>
                    <div>
                      <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                      <span>
                        <button type="button" 
                          class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                          style="
                              --bs-btn-padding-y: 0.5rem;
                              --bs-btn-padding-x: 0.75rem;
                              --bs-btn-font-size: 0.90rem;
                            ">
                          Add to cart
                        </button></span>
                    </div>                                   
                </div>
                </div>
                </div>`;
        } else if (object.rating > 3 && object.rating < 4) {
          indvCard += `<small class="text-body-secondary">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </small></span>
                  <div>
                    <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                    <span>
                      <button type="button" 
                        class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                        style="
                            --bs-btn-padding-y: 0.5rem;
                            --bs-btn-padding-x: 0.75rem;
                            --bs-btn-font-size: 0.90rem;
                          ">
                        Add to cart
                      </button></span>
                  </div>                                   
              </div>
              </div>
              </div>`;
        } else {
          indvCard += `<small class="text-body-secondary">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </small></span>
                  <div>
                    <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                    <span>
                      <button type="button" 
                        class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                        style="
                            --bs-btn-padding-y: 0.5rem;
                            --bs-btn-padding-x: 0.75rem;
                            --bs-btn-font-size: 0.90rem;
                          ">
                        Add to cart
                      </button></span>
                  </div>                                   
              </div>
              </div>
              </div>`;
        }
      });

      document.getElementById(`${elementID}`).innerHTML = indvCard;
    });
}

function addProductsDiv(categoryArr, elementID = "product-details") {
  var card = "";
  for (var i = 0; i < categoryArr.length; i++) {
    card +=
      '<h3 class="product-title mt-3">' +
      categoryArr[i] +
      "</h3>" +
      '<div class="row row-cols-1 row-cols-md-2 g-4 mt-3" id="' +
      categoryArr[i] +
      '-card">' +
      "</div>";
  }

  document.getElementById(`${elementID}`).innerHTML = card;
}

function searchProducts(apiUrl, elementID="product-details") {
  var searchCard = `<div class="row row-cols-1 row-cols-md-2 g-4 mt-3">`;
  fetch(`${apiUrl}`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object) => {
        searchCard += `<div class="col-md-3">
                      <div class="card mb-3" style="height: 360px;">                      
                        <img src="${object.thumbnail}" class="card-img-top" style="width: 100%; height: 150px" alt="${object.title}">               
                        <div class="card-body">
                          <h6 class="card-title discount">
                            Upto ${object.discountPercentage}% off
                          </h6>
                          <h6 class="card-title">${object.title}</h6>
                          <p class="card-text description">${object.description}</p>
                          <span class="card-text"><small class="text-body-secondary fw-bold">
                            Price: <image src="./images/currency-rupee.svg" class="currency-rupee" />${object.price} *
                          </small></span><br />
                          <span class="card-text">`;

        if (object.rating > 4) {
          searchCard += `<small class="text-body-secondary">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </small></span>
                    <div>
                      <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                      <span>
                        <button type="button" 
                          class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                          style="
                              --bs-btn-padding-y: 0.5rem;
                              --bs-btn-padding-x: 0.75rem;
                              --bs-btn-font-size: 0.90rem;
                            ">
                          Add to cart
                        </button></span>
                    </div>                                   
                </div>
                </div>
                </div>`;
        } else if (object.rating > 3 && object.rating < 4) {
          searchCard += `<small class="text-body-secondary">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </small></span>
                  <div>
                    <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                    <span>
                      <button type="button" 
                        class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                        style="
                            --bs-btn-padding-y: 0.5rem;
                            --bs-btn-padding-x: 0.75rem;
                            --bs-btn-font-size: 0.90rem;
                          ">
                        Add to cart
                      </button></span>
                  </div>                                   
              </div>
              </div>
              </div>`;
        } else {
          searchCard += `<small class="text-body-secondary">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </small></span>
                  <div>
                    <span class="offer position-absolute bottom-0 end-0 mb-2">*Including discount offer </span>
                    <span>
                      <button type="button" 
                        class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                        style="
                            --bs-btn-padding-y: 0.5rem;
                            --bs-btn-padding-x: 0.75rem;
                            --bs-btn-font-size: 0.90rem;
                          ">
                        Add to cart
                      </button></span>
                  </div>                                   
              </div>
              </div>
              </div>`;
        }
      });
      
      document.getElementById(`${elementID}`).innerHTML = searchCard;
    })
}