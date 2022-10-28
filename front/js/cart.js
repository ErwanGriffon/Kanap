//local storage
function getCart() {
    let items = [];
    if (localStorage.getItem("panier") != null) {
      items = JSON.parse(localStorage.getItem("panier"));
    }
    return items;
  }

// Check local storage product
function add2Cart(productId, color, qty) {
    if (qty <= 0 || color == "") {
      return;
    }
    let items = getCart();
    if (items.length == 0) {
      items = [[productId, color, qty]];
    } else {
      let found = false;
      for (let i = 0; i < items.length; i++) {
        if (productId === items[i][0] && color === items[i][1]) {
          found = true;
          items[i][2] += qty;
        }
      }
      if (found == false) {
        let item = [productId, color, qty];
        items.push(item);
      }
    }
    localStorage.setItem("panier", JSON.stringify(items));
  }