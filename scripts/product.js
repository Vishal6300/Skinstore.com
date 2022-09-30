async function APIcall1(url)
{
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data.Products
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


function append1(data,parent){
    parent.innerText = ""
    data.map(function(e){


        let div = document.createElement("div")
        div.setAttribute("id","singleproduct")
    
        let image = document.createElement("img")
        image.src = e.productPic
        image.setAttribute("id","image")
    
        let name = document.createElement("h4")
        name.textContent = e.productName

        let div2 = document.createElement("div")
        div2.setAttribute("id","dis")

        div2.append(image)

        let heart = document.createElement("i")
        heart.setAttribute("class","fa fa-heart hearting")
        heart.addEventListener("click",function()
        {
            alert("Added To Wishlist")
        })

        heart.style.fontSize="30px"


        let star1 = document.createElement("span")
        star1.setAttribute("class","fa fa-star checked")
        

        
        let star2 = document.createElement("span")
        star2.setAttribute("class","fa fa-star checked")
       
        
        let star3 = document.createElement("span")
        star3.setAttribute("class","fa fa-star checked")
       
        
        let star4 = document.createElement("span")
        star4.setAttribute("class","fa fa-star checked")
       
        
        let star5 = document.createElement("span")
        star5.setAttribute("class","fa fa-star not_checked")
        
        let price = document.createElement("h2")
        price.textContent = `$ ${e.priceOfProduct}`

        
        let div3 = document.createElement("div")
        div3.setAttribute("id","cartbutton")

        let cart = document.createElement("button")
        cart.textContent = `Quick Buy`
        cart.addEventListener("click",function()
        {
            
            addtocart(e)
           
            alert(`Add To Cart Successfull`)
        })
        
        cart.setAttribute("id","cart")
        div.append(heart,div2,name,star1,star2,star3,star4,star5,price,cart)

        parent.append(div)
    })
}
const addtocart=async(e)=>{
    try {
        let d_data={
            product:e.productName,
            brand:e.productBrand,
            productPrice:e.priceOfProduct,
            productImage:e.productPic
        }

        d_data=JSON.stringify(d_data);

        let res=await fetch("https://projectskinstore.herokuapp.com/cartproduct",{
            method:"POST",
            body:d_data,
            headers:{
                "content-Type":"application/json",
            }
        });

        let data=await res.json();
        console.log({data:data});
    } catch (error) {
        console.log({err:error.message})
    }
}





export {APIcall1,append1}