
const shopStorages = document.querySelector(".shop-storage");
//=======================================fuction save in local stroage===================
function saveProduct() {
    localStorage.setItem("carts", JSON.stringify(carts)); //save value in local
}

let carts = JSON.parse(localStorage.getItem("carts")); // get value form local stroage
// console.log(carts);
      

// //=======================================fuction get value form local storage=========================
function displayCart(){
    for(let index = 0; index <carts.length ; index++) {
        let addToCart = carts[index];

        let cartProduct =  document.createElement("div");
        cartProduct.classList.add("card-product");
        cartProduct.dataset.index = index;
        console.log(cartProduct);
        

        let imgProduct = document.createElement("div");
        imgProduct.classList.add("img-product");

        let img = document.createElement("img");
        img.src = addToCart.img

        imgProduct.appendChild(img);


        let productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        
        let h1 = document.createElement("h3");
        let h2 = document.createElement("h3");
        h1.textContent = addToCart.name;
        h2.textContent = addToCart.price;
  
        let currency = addToCart.currency;
        // console.log(addToCart)
        if(currency !== "៛"){
            h2.textContent = currency + addToCart.price;
        }
        else{
            h2.textContent = addToCart.price + currency;
        }

        productPrice.appendChild(h1);
        productPrice.appendChild(h2);

        let checkButton = document.createElement("div");
        checkButton.classList.add("check-cancel");

        let buttonCancle = document.createElement("button");
        buttonCancle.id = "cancel";
        buttonCancle.textContent = "Cancel";

        buttonCancle.addEventListener("click", removeProduct);
        checkButton.appendChild(buttonCancle);


        cartProduct.appendChild(imgProduct);
        cartProduct.appendChild(productPrice);
        cartProduct.appendChild(checkButton);
        
        shopStorages.appendChild(cartProduct);
        
        hr = document.createElement("hr")

        shopStorages.appendChild(hr);
        // console.log(shopStorages);
    }
}

//=======================================fuction remove=========================

function removeProduct(event){

    //  Get index
    let index = event.target.parentElement.parentElement.dataset.index;
    console.log(index)

    // Remove product
    carts.splice(index, 1);
  
    // Save to local storage
    saveProduct() //old fuction

    // Update the view
    displayCart()

}
    // console.log("🚀 ~ file: cart.js:91 ~ removeProduct ~  displayCart()",  displayCart())


//=======================================fuction get value form local storage=========================

displayCart()
// console.log("🚀 ~ file: cart.js:97 ~ displayCart()", displayCart())
// saveProduct()

// console.log sort cut crt+alt +"l"