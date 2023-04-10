fetchCartDetails(cartArr);

function processCart() {
  alert(
    `Items processed successfully. Order details will be sent through an email. You will be redirected to the home page in 5 seconds...`,
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

function removeItem(checkedItem) {
  const index = cartArr.indexOf(checkedItem);
  if (index > -1) {
    cartArr.splice(index, 1)
  }
  var counter = cartArr.length;
  localStorage.setItem("cartCounter", counter);
  document.getElementById("quantity").innerHTML = counter;
  localStorage.setItem("cartArray", cartArr);
  fetchCartDetails(cartArr);
}
