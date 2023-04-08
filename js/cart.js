fetchCartDetails(cartArr);

function processCart() {
  alert(
    `Items processed successfully. Order details will be sent through an email`,
    "success"
  );
  localStorage.clear();
  document.getElementById("quantity").innerHTML = 0;
  setTimeout(navigateToHome(), 20000);
}

function navigateToHome() {
  const link = document.createElement("a");
  link.href = "./index.html";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
