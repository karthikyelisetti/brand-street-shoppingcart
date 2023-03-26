function getProductDetails() {
  fetch(`https://dummyjson.com/products`)
    .then((res) => res.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        alert(data[i].thumbnail)
        card +=
          '<div class="type-sitdown card col-md-5">' +
          '<img src="' +
          data[i].thumbnail +
          '" class="card-image card-img-top" alt="restaurant-image">' +
          '<div class="card-body" id="card-details">' +
          '<h5 class="card-title">' +
          data[i].category +
          "</h5>";
      }
    });

    document.getElementById("card-details").innerHTML = card;
}

function getSmartphoneCategory(){
  fetch(`https://dummyjson.com/products/category/smartphones`)
    .then((res) => res.json())
    .then((data) => {
      // for (var i = 0; i < data.length; i++) {
      //   alert(data[i].thumbnail)
      //   card +=
      //     '<div class="type-sitdown card col-md-5">' +
      //     '<img src="' +
      //     data[i].thumbnail +
      //     '" class="card-image card-img-top" alt="restaurant-image">' +
      //     '<div class="card-body" id="card-details">' +
      //     '<h5 class="card-title">' +
      //     data[i].category +
      //     "</h5>";
      // }

      // console.log(data);


      for(var i = 0; i < data.length; i++){
        console.log(data[i].products.title);
      }
    });
}
getSmartphoneCategory();

