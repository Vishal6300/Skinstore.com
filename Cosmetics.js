import navbar from "./componet/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

const getData = async () => {
  try {
    let res = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=eyeliner`
    );
    let data = await res.json();
        console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
};

getData();

const appendData = (data) => {
  let products = document.getElementById("Products");
//   products.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image_link;

    let name = document.createElement("h3");
    name.innerText = el.name;

    let price = document.createElement("h3");
    price.innerHTML = `"$" ${el.price}`;

    let btn= document.createElement("button");
    btn.innerText="Quick Buy";

    div.append(img,name,price,btn);
    products.append(div);
  });
};
