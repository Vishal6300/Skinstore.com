import navbar from "./componet/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();
import offers from "./componet/offer.js";
let offer = document.getElementById("offer");
offer.innerHTML=offers();
import search from "./componet/search.js";
let searchs = document.getElementById("search");
searchs.innerHTML=search();
import footer from "./componet/footer.js";
let sfooter = document.getElementById("footer");
sfooter.innerHTML=footer();


const getData = async () => {
  try {
    let res = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=eyeliner`
    );
    let data = await res.json();
        console.log(data);
    appendData(data);
    appendData(data);
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
    btn.addEventListener("click",()=>{
      let dataS= JSON.parse(localStorage.getItem("cartthings")) ||[];
      dataS.push(el);
      localStorage.setItem("cartthings",JSON.stringify(dataS));

      let jk = document.getElementById("cartcontent");
      jk.innerHTML = null;
      dataS.forEach((el) => {
        let div = document.createElement("div");
    
        let img = document.createElement("img");
        img.src = el.image_link;
    
        let name = document.createElement("h3");
        name.innerText = el.name;
    
        let price = document.createElement("h3");
        price.innerHTML = `"$" ${el.price}`;
        div.append(img,name,price,btn);
    jk.append(div);
  });
    })

    div.append(img,name,price,btn);
    products.append(div);
  });
};
