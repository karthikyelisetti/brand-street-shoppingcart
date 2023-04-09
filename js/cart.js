fetchCartDetails(cartArr);

function processCart() {
  alert(
    `Items processed successfully. Order details will be sent through an email. You will be rediredted to the home page in 5 seconds...`,
    "success"
  );
  localStorage.clear();
  document.getElementById("quantity").innerHTML = 0;
  setTimeout(navigateToHome, 5000);
}

function navigateToHome() {
  const link = document.createElement("a");
  link.href = "./index.html";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#product-details'
});

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
});

var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance

