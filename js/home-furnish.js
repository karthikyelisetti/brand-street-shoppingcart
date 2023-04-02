var card = "";
var categoryArr = ["home-decoration", "furniture", "lighting"];
var apiURL = "https://dummyjson.com/products/category";

//Adding the product div tags
addProductsDiv(categoryArr);

// Populating the sidebar details
fetchSideBarDetails("https://dummyjson.com/products/categories", categoryArr);

// Populating the electronics card details
for (var i = 0; i < categoryArr.length; i++) {
  fetchAPICardDetails(apiURL, categoryArr[i], categoryArr[i] + "-card");
}