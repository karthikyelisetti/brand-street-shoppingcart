var searchProduct=localStorage.getItem("searchUrl");

pplteSideBarList("https://dummyjson.com/products/categories");

function searchBrandStreet() {
    var value = document.getElementById("search-input").value;
    var apiUrl = `https://dummyjson.com/products/search?q=${value}`;
    localStorage.setItem("searchUrl", apiUrl);
    searchProducts(apiUrl);
}

searchProducts(searchProduct);