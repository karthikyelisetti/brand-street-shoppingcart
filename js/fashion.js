var card = "";
var categoryArr = [
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];
var apiURL = "https://dummyjson.com/products/category";

//Adding the product div tags
addProductsDiv(categoryArr);

// Populating the sidebar details
fetchSideBarDetails("https://dummyjson.com/products/categories", categoryArr);

// Populating the electronics card details
for (var i = 0; i < categoryArr.length; i++) {
  fetchAPICardDetails(apiURL, categoryArr[i], categoryArr[i] + "-card");
}
