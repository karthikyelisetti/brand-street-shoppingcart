// Function to fetch the electronics category card details
function fetchEletronicDetails() {
  var card = "";
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object) => {
        card += `<div class="col-md-6">
                    <div class="card mb-3" style="width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${object.thumbnail}" class="card-img-top" style="width: 100%; height: 200px" alt="${object.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="card-title discount">
                                    Upto ${object.discountPercentage}% off
                                </h6>
                                <h5 class="card-title">${object.title}</h5>
                                <p class="card-text description">${object.description}</p>
                                <span class="card-text"><small class="text-body-secondary fw-bold">
                                    Price: <image src="./images/currency-rupee.svg" class="currency-rupee" />${object.price} * &nbsp&nbsp
                                    <span class="offer">*Including discount offer </span>
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
                    <span><button type="button" class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart">
                        Add to cart
                    </button></span>
                </div> 
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
            </div>
            </div>
            </div>`;
        }
      });

      document.getElementById("electronics-card").innerHTML = card;
    });

  fetch("https://dummyjson.com/products/category/laptops")
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((object) => {
        card += `<div class="col-md-6">
                    <div class="card mb-3" style="width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${object.thumbnail}" class="card-img-top" style="width: 100%; height: 200px" alt="${object.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="card-title discount">
                                    Upto ${object.discountPercentage}% off
                                </h6>
                                <h5 class="card-title">${object.title}</h5>
                                <p class="card-text description">${object.description}</p>
                                <span class="card-text"><small class="text-body-secondary fw-bold">
                                    Price: <image src="./images/currency-rupee.svg" class="currency-rupee" />${object.price} * &nbsp&nbsp
                                    <span class="offer">*Including discount offer </span>
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
                    <span><button type="button" class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart">
                        Add to cart
                    </button></span>
                </div>
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
            </div>
            </div>
            </div>`;
        }
      });

      document.getElementById("electronics-card").innerHTML = card;
    });
}

// function to populate the sidepar menu
function fetchSideBarDetails() {
    var sideBar = `<a href="/"
                class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                <span class="fs-5 fw-semibold">Category</span>
            </a>`;
    counter = 0;
    fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((object) => {
        
        counter += 1;
        if(counter == 1) {
            sideBar += `<ul class="list-unstyled ps-0">
                        <li class="mb-1 fw-semi-bold">
                        <button
                            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse"
                            aria-expanded="true"
                            onclick="fetchCategoryDetails(this.id)"
                            id="smartphones"
                        >
                            Smartphones
                        </button>
                        <div class="collapse show" id="home-collapse"></div>
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                ${object.title}
                            </a>
                        </li>`
        }else {
            sideBar += `<li>
                        <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            ${object.title}
                        </a>
                     </li>`
        }
      });
      counter = 0;
      sideBar += `</ul></div></li></ul>`
      document.getElementById("ele-collapse").innerHTML = sideBar;
    });
    
    fetch("https://dummyjson.com/products/category/laptops")
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((object) => {
        
        counter += 1;
        if(counter == 1) {
            sideBar += `<ul class="list-unstyled ps-0">
                        <li class="mb-1 fw-semi-bold">
                        <button
                            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse"
                            aria-expanded="true"
                            onclick="fetchCategoryDetails(this.id)"
                            id="laptops"
                        >
                            Laptops
                        </button>
                        <div class="collapse show" id="home-collapse"></div>
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                ${object.title}
                            </a>
                        </li>`
        }else {
            sideBar += `<li>
                        <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            ${object.title}
                        </a>
                     </li>`
        }
      });
      counter = 0;
      sideBar += `</ul></div></li></ul>`
      document.getElementById("ele-collapse").innerHTML = sideBar;
    });
}

// Function to populate based on the selected category
function fetchCategoryDetails(id) {
  var indvCard = "";
  fetch(`https://dummyjson.com/products/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
    data.products.forEach((object) => {

        indvCard += `<div class="col-md-6">
                    <div class="card mb-3" style="width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${object.thumbnail}" class="card-img-top" style="width: 100%; height: 200px" alt="${object.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="card-title discount">
                                    Upto ${object.discountPercentage}% off
                                </h6>
                                <h5 class="card-title">${object.title}</h5>
                                <p class="card-text description">${object.description}</p>
                                <span class="card-text"><small class="text-body-secondary fw-bold">
                                    Price: <image src="./images/currency-rupee.svg" class="currency-rupee" />${object.price} * &nbsp&nbsp
                                    <span class="offer">*Including discount offer </span>
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
                    <span><button type="button" class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart">
                        Add to cart
                    </button></span>
                </div> 
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
                    <span><button type="button" class="btn btn-primary position-absolute bottom-0 end-0 add-to-cart">
                        Add to cart
                    </button></span>
                </div>
            </div>
            </div>
            </div>
            </div>`;
        } else {
            indvCard += `<small class="text-body-secondary">
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
            </div>
            </div>
            </div>`;
        }
      });
      
      document.getElementById("electronics-card").innerHTML = indvCard;
    });
}

// Calling function to populate the cards
fetchSideBarDetails();
fetchEletronicDetails();
