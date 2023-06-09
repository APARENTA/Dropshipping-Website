// Function to remove an item from the cart
function removeItem(event) {
    var buttonClicked = event.target;
    var rowToRemove = buttonClicked.closest("tr");
    rowToRemove.remove();
    updateTotalPrice();
  }
  
  // Function to update the total price
  function updateTotalPrice() {
    var cartTable = document.getElementById("cartTable");
    var rows = cartTable.getElementsByTagName("tr");
    var totalPrice = 0;
  
    // Iterate through each row and calculate the total price
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var priceElement = row.getElementsByClassName("price")[0];
      var quantityElement = row.getElementsByTagName("input")[0];
  
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = parseInt(quantityElement.value);
      var subtotal = price * quantity;
      row.getElementsByClassName("subtotal")[0].innerText = "$" + subtotal.toFixed(2);
      totalPrice += subtotal;
    }
  
    // Update the total price in the HTML
    var totalElement = document.getElementById("totalPrice");
    totalElement.innerText = "$" + totalPrice.toFixed(2);
  }
  
  // Attach the removeItem function to all remove buttons
  var removeButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeButtons.length; i++) {
    var button = removeButtons[i];
    button.addEventListener("click", removeItem);
  }
  
  // Attach the updateTotalPrice function to all quantity inputs
  var quantityInputs = document.querySelectorAll("#cartTable input[type='number']");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", updateTotalPrice);
  }
  