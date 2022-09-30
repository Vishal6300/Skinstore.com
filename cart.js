var cartThings = JSON.parse(localStorage.getItem("cartthings")) || [];

reLoadM(cartThings);
function reLoadM(cartThings){
     
    creatcart(cartThings);

    function creatcart(cartThings) {
        document.querySelector("#container").textContent = "";
        cartThings.map(function (data, index) {
    
    
            var div = document.createElement("div")
            document.querySelector("#container").append(div)
    
            // inside div creating image and  image_url
            var image = document.createElement("img");
            image.setAttribute("src", data.image_url);
            div.append(image);
    
            var btn1 = document.createElement("button")
            btn1.setAttribute("id", "btnwish")
            btn1.textContent = "Wish"
            btn1.style.display = "block"
            div.append(btn1)
    
            var name = document.createElement("p");
            name.style.height = "35px"
            name.textContent = data.name;
            name.style.marginTop = "3%"
            div.append(name);
    
            var box = document.createElement("div")
            box.textContent = data.box
            box.setAttribute("id", "boxer")
            div.append(box)
    
    
    
            var p1 = document.createElement("p");
            check0(data.MSRP);
    
            function check0(val){
           if(val!=undefined){
                p1.innerHTML = `MSRP: <s>$${data.MSRP}</s>`;
           }
            }
    
            p1.style.marginTop = "5%"
            p1.style.color = "gray"
    
    
            var p2 = document.createElement("p")
            p2.textContent = `$${data.price}`;
            p2.style.marginTop = "1%"
            p2.style.fontSize = "24px"
            p2.style.fontWeight = "bold"
            div.append(p1, p2)
    
    
            var btn2 = document.createElement("button")
            btn2.setAttribute("id", "btnbuy");
            btn2.textContent = "Delete Item"
            div.append(btn2);
    
    
            btn2.addEventListener("click", function () {
                deletItems(index)
    
            });
        });
    }
    
    
    function deletItems(index) {
        cartThings.splice(index, 1)
        localStorage.setItem("cartthings", JSON.stringify(cartThings));
        alert("Item Deleted");
        reLoadM(cartThings);
    }
    
    
    
    
    
    
    
    // ==============================================================================================================================================
    
    var cartLength =JSON.parse(localStorage.getItem("cartthings"))
    document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
    document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;
    
   var total = cartLength.reduce(function (a,b) {
       return a+Number(b.price)
   },0)
    document.querySelector("#totalPrice").innerHTML=` $${total.toFixed(2)}`;


}






function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}





function Tsort(){
    var valT=document.querySelector("#sortT").value
    console.log(valT)
    if(valT==""){
        reLoadM(cartThings);
    }else if(valT=="high"){
        cartThings.sort(function(a,b){
         return (Number(b.price)-Number(a.price))
     })
     reLoadM(cartThings);
    }else{
        cartThings.sort(function(a,b){
            return (Number(a.price)-Number(b.price))
     })
     reLoadM(cartThings);
    }
 }  