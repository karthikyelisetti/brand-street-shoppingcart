// getProductDetails();

function getSmartphoneCategory(){
  var card = "";
  fetch(`https://dummyjson.com/products/category/smartphones`)
    .then((res) => res.json())
    .then((data) => {
      

      console.log(data.products.length);


      for(var i = 0; i < data.products.length; i++){
        console.log(data.products[i].title);
        // for (var i = 0; i < data.products.length; i++) {
          card += 
            '<div class="card col-md-5">' +
            '<img src="' +
            data.products[i].thumbnail +
            '" class="card-image card-img-top" alt="restaurant-image">' +
            '<div class="card-body" >' +
            '<h5 class="card-title">' +
            data.products[i].category +
            "</h5></div></div>";
            
        // }
        
      }
      document.getElementById("mobile-card-details").innerHTML = card;
    });
}
// getSmartphoneCategory();

