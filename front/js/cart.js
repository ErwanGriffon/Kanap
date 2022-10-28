//local storage
function getCart() {
    let items = [];
    if (localStorage.getItem("panier") != null) {
      items = JSON.parse(localStorage.getItem("panier"));
    }
    return items;
  }

// Check local storage product
