var robinData = [
    {
        image_url: "https://static.thcdn.com/images/xsmall/original//productimg/original/12747907-1514871998779558.jpg",
        name: "DERMAdoctor KP Duty Body Scrub (Various Sizes)",
        box: "DERMAdoctor Gift",

        price: "32",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11287210-1584882191614736.jpg",
        name: "DERMAdoctor Kakadu C Brightening Daily Cleanser 7.1 oz Tube",
        box: "DERMAdoctor Gift",
        price: "38.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11287222-1874871998236897.jpg",
        name: "DERMAdoctor Total Nonscents Ultra Gentle Brightening Antiperspirant",
        box: "DERMAdoctor Gift",
        price: "30.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11718351-1104866363990105.jpg",
        name: "DERMAdoctor Ain't Misbehavin' Medicated Acne Cleanser 7.1 oz",
        box: "DERMAdoctor Gift",
        price: "32.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11712346-3214896398286015.jpg",
        name: "DERMAdoctor Picture Porefect Pore Minimizer",
        box: "DERMAdoctor Gift",
        price: "42.00",

    },
    {
        image_url: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11287208-2084871998090722.jpg",
        name: "DERMAdoctor Kakadu C 20% Vitamin C Serum with Ferulic Acid and Vitamin E",
        box: "DERMAdoctor Gift",
        price: "95.00",

    },
    {
        image_url: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11412607-8954864280050704.jpg",
        name: "DERMAdoctor Kakadu C Vitamin C Brightening Kit (Worth $129.00)",
        box: "DERMAdoctor Gift",
        price: "89.00",

    },
    {
        image_url: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11412608-1034872055783974.jpg",
        name: "DERMAdoctor Med e Tate Antiperspirant Wipes (30 Pack)",
        box: "DERMAdoctor Gift",
        price: "48.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12187514-2304815573253458.jpg",
        name: "Elemis Pro-Collagen Rose Facial Oil 15ml",
        box: "DERMAdoctor Gift",
        price: "79.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12698709-1824880131032636.jpg",
        name: "DERMAdoctor KP Duty Dermatologist  for Dry, Rough, Bumpy Skin 8 oz",
        box: "DERMAdoctor Gift",
        price: "38.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11290613-8274866327106473.jpg",
        name: "DERMAdoctor DD Cream Dermatologically Spectrum SPF 30",
        box: "DERMAdoctor Gift",
        price: "40.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12624607-9824815576214422.jpg",
        name: "Elemis Superfood AHA Glow Cleansing  90g",
        box: "DERMAdoctor Gift",
        price: "38.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10451465-6984815568966494.jpg",
        name: "Elemis Frangipani Monoi Body Oil 100ml",
        box: "DERMAdoctor Gift",
        price: "56.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10362741-1744840455658752.jpg",
        name: "Elemis Dynamic Resurfacing Facial Wash",
        box: "DERMAdoctor Gift",
        price: "49.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12543334-1854815575687697.jpg",
        name: "Elemis Ultra Smart Enviro-Adapt Day50ml",
        box: "$32 Elemis Gift",
        price: "295.00",

    },
    {
        image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10621773-4934891242155358.jpg",
        name: "Elemis Pro-Collagen  Eye Treatment (15ml)",
        box: "$32 Elemis Gift",
        price: "68.00",

    },

];



// var cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];
// var wishArray = JSON.parse(localStorage.getItem("wishItems")) || [];
reLoadM(robinData);

function reLoadM(robinData){





// DATA

 displayDatas(robinData);
function displayDatas(robinData){
    document.querySelector("#container").textContent="";
    robinData.map(function (data) {
        var div = document.createElement("div")
        document.querySelector("#container").append(div)
    
        // inside div creating image and  image_url
        var image = document.createElement("img");
        image.setAttribute("src", data.image_url);
        div.append(image);
    
    
        var name = document.createElement("p");
        name.style.height = "35px"
        name.textContent = data.name;
        name.style.marginTop = "3%"
        div.append(name);
    
        var box = document.createElement("div")
        box.textContent = data.box
        box.setAttribute("id", "boxer")
        div.append(box)
    
    
        var p2 = document.createElement("p")
        p2.textContent = `$${data.price}`;
        p2.style.marginTop = "3%"
        p2.style.fontSize = "24px"
        p2.style.fontWeight = "bold"
        div.append(p2)
    
    
    
        var btn1 = document.createElement("button")
        btn1.setAttribute("id", "btnwish")
        btn1.textContent = "Wish"
        btn1.style.display = "block"
        btn1.addEventListener("click", function () {
            wishlistAdd(data);
        })
        div.append(btn1)
    
    
        var btn2 = document.createElement("button")
        btn2.setAttribute("id", "btnbuy");
        btn2.textContent = "QUICK BUY"
        btn2.addEventListener("click", function () {
            cartAdd(data);
        })
    
        div.append(btn2);

      
    
    })
    
}


var cartThings = JSON.parse(localStorage.getItem("cartthings")) || [];
var cartArray = JSON.parse(localStorage.getItem("quickbuy1")) || [];
function wishlistAdd(data) {
    cartArray.push(data);
    cartThings.push(data);
    localStorage.setItem("quickbuy1", JSON.stringify(cartArray));
    localStorage.setItem("cartthings", JSON.stringify(cartThings));
    alert("Item Added");
    reLoadM(robinData);

}


function cartAdd(data) {
  
    cartThings.push(data);
  
    localStorage.setItem("cartthings", JSON.stringify(cartThings));
    alert("added to cart");
    reLoadM(robinData);

}





// console.log(cartArray);
// console.log(cartArray);



// Read More Drop Down Function




// ==============================================================================================================================================


var cartLength =JSON.parse(localStorage.getItem("cartthings"))
document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;




}









function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}




function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function Tsort(){
    var valT=document.querySelector("#sortT").value
    console.log(valT)
    if(valT==""){
        reLoadM(robinData);
    }else if(valT=="high"){
        robinData.sort(function(a,b){
         return (Number(b.price)-Number(a.price))
     })
     reLoadM(robinData);
     
    }else{
        robinData.sort(function(a,b){
            return (Number(a.price)-Number(b.price))
     })
     reLoadM(robinData);
    }
 }  