// Creating an custom alert message using bootstrap
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

var apiSearchUrl;
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
                            "
                            id="${object.id}"
                            onclick="addToCart(${object.id})"
                          >
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
                    <span>
                      <button type="button" 
                        class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                        style="
                            --bs-btn-padding-y: 0.5rem;
                            --bs-btn-padding-x: 0.75rem;
                            --bs-btn-font-size: 0.90rem;
                          "
                          onclick="addToCart()">
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
                    <span>
                      <button type="button" 
                        class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart"
                        style="
                            --bs-btn-padding-y: 0.5rem;
                            --bs-btn-padding-x: 0.75rem;
                            --bs-btn-font-size: 0.90rem;
                          "
                          onclick="addToCart()">
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
                            "
                            onclick="addToCart()">
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
                          "
                          onclick="addToCart()">
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
                          "
                          onclick="addToCart()">
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

// Adding the product div based on the Array
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

// populating the products based on the search criteria
function searchProducts(apiUrl, elementID = "product-details") {
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
                            "
                            onclick="addToCart()">
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
                          "
                          onclick="addToCart()">
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
                          "
                          onclick="addToCart(this.id)"
                          id="${object.id}">
                        Add to cart
                      </button></span>
                  </div>                                   
              </div>
              </div>
              </div>`;
        }
      });

      document.getElementById(`${elementID}`).innerHTML = searchCard;
    });
}

// Function to navigate to the search page
function navigateToSearch() {
  var value = document.getElementById("search-input").value;
  const link = document.createElement("a");
  apiSearchUrl = `https://dummyjson.com/products/search?q=${value}`;
  localStorage.setItem("searchUrl", apiSearchUrl);
  link.href = "./search.html";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function pplteSideBarList(apiURL, elementID = "products-collapse") {
  var sideBar = `<a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                  <span class="fs-5 fw-semibold">Category</span>
                 </a>`;
  fetch(`${apiURL}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((object) => {
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
      });

      document.getElementById(`${elementID}`).innerHTML = sideBar;
    });
}

// Code to update the counter and push the respective product IDs to an Array
var counter = parseInt(localStorage.getItem("cartCounter"));
if (isNaN(counter)) {
  counter = 0;
  var cartArr = [];
} else {
  var cartArr = localStorage.getItem("cartArray").split(",");
}
document.getElementById("quantity").innerHTML = counter;
function addToCart(id) {
  if (cartArr.length != 0 && cartArr.includes(id.toString())) {
    alert("Item is already added to the cart", "warning");
    return false;
  } else {
    cartArr.push(id.toString());
    counter += 1;
    document.getElementById("quantity").innerHTML = counter;
    localStorage.setItem("cartCounter", counter);
    localStorage.setItem("cartArray", cartArr);
  }
}

// Fetching the cart details and displaying the selected products for checkout
function fetchCartDetails(cartArr) {
  var cartCard = "";
  var summaryCard = "";
  var price = 0;
  var tax = 0;
  var total = 0;
  var package = 150;
  var counter = 0;
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object) => {
        for (i in cartArr) {
          if (object.id == cartArr[i]) {
            counter += 1;
            cartCard += `<div class="row">
            <div class="col-lg-3 col-md-12">
              <div class="bg-image hover-overlay hover-zoom ripple rounded">
                <img
                  src="${object.thumbnail}"
                  alt="${object.title}"
                  style="width: 150px; height: 100px;"
                />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)">
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <span><strong>${object.title}</strong></span> <br />
              <p>Discount applied: ${object.discountPercentage}%</p>
              <button
                type="button"
                class="btn btn-primary btn-sm me-1"
                data-bs-toggle="tooltip"
                title="Remove item"
                id="${object.id}"
                onclick="removeItem(this.id)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="d-flex mb-3" style="max-width: 300px">
                <button
                  class="btn px-3 me-2 btn-dash"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                >
                  <img src="./images/dash-circle.svg" style="width: 24px;" alt="plus-icon">
                </button>
                <div class="form-outline">
                  <input
                    id="form1"
                    min="1"
                    max="2"
                    name="quantity"
                    value="1"
                    type="number"
                    class="form-control text-center"
                  />
                </div>
                <button
                  class="btn px-3 ms-2 btn-plus"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                >
                <img src="./images/plus-circle.svg" style="width: 24px;" alt="plus-icon">
                </button>
              </div>
              <p class="text-start text-md-center">
                <strong>Price: <img src="../images/currency-rupee.svg">${object.price}</strong>
              </p>
            </div>
          </div>
          <hr class="my-4" />`;

            price += Number(object.price);
          }
        }
      });
      tax = Math.floor(price * (18 / 100));
      total = Math.floor(price + package + tax, 2);
      summaryCard += `<div class="card-header py-3">
                          <h5 class="mb-0">Summary</h5>
                        </div>
                        <div class="card-body">
                          <ul class="list-group-item list-group-flush">
                            <li
                              class=
                              "list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Products
                              <span><img src="../images/currency-rupee.svg">${price}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                              Shipping
                              <span><img src="../images/currency-rupee.svg">150</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                              Tax
                              <span><img src="../images/currency-rupee.svg">${tax}</span>
                            </li>
                            <li class=
                                "list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                <strong>Total amount</strong>
                                <strong>
                                  <p class="mb-0">(including SGST/CGST)</p>
                                </strong>
                              </div>
                              <span><strong><img src="../images/currency-rupee.svg">${total}</strong></span>
                            </li>
                          </ul>
                          <button type="button" class="btn btn-primary btn-lg btn-block" onclick="processCart()">
                            Go to checkout
                          </button>
                        </div>`;

      cartCard += `</div></div>`;
      document.getElementById(
        "cart-card-hdr"
      ).innerHTML = `<h5 class="mb-0">Cart - ${counter} items</h5>`;
      document.getElementById("product-details").innerHTML = cartCard;
      document.getElementById("cart-summary").innerHTML = summaryCard;
    });
}
