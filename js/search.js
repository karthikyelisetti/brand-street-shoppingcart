function searchBrandStreet() {
    var value = document.getElementById("search-input").value;
    // const link = document.createElement('a');
    var apiUrl = `https://dummyjson.com/products/search?q=${value}`;
    // link.href = "./search.html";
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
    searchProducts(apiUrl);
    // fetchAPICardDetails(apiUrl, value, "product-details");
}