const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
const host = "https://kanapjmax.herokuapp.com/";
const objectURL = host + "api/products/" + id;


fetch(objectURL)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  // image
  let img = document.querySelector(".item__img");
  img.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
  // nom et titre
  let name = document.getElementById("title");
  name.innerHTML = data.name;
  let title = document.querySelector("title");
  title.innerHTML = data.name;
  // prix
  let price = document.getElementById("price");
  price.innerHTML = `${data.price}`;
  // description
  let description = document.getElementById("description");
  description.innerHTML = data.description;
  // couleurs
  let color = document.getElementById("colors");
  for (i = 0; i < data.colors.length; i++) {
    color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
  }
});

function qtyValue() {
  let qty = document.getElementById("quantity");
  return qty.value;
}

function colorValue() {
  let color = document.getElementById("colors");
  return color.value;
}

const toCartBtn = document.getElementById("addToCart");
toCartBtn.addEventListener("click", () => {
  let qty = parseInt(qtyValue());
  let color = colorValue();
  add2Cart(id, color, qty);
  toCartBtn.style.display = "block";
});
toCartBtn.addEventListener("click", () => {
  window.location.href = "./cart.html";
});