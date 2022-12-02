
const shopStorages = document.querySelector(".shop-storage");
//=======================================fuction save in local stroage===================
function saveProduct() {
    localStorage.setItem("carts", JSON.stringify(carts)); //save value in local
}

let carts = JSON.parse(localStorage.getItem("carts")); // get value form local stroage
// console.log(carts)
      
let totalPriceRiel = 0 ;
let totalPriceUSD = 0 ;
// //=======================================fuction get value form local storage=========================
function displayCart(){
    // totalPrice = 0
    for(let index = 0; index <carts.length ; index++) {
        let addToCart = carts[index];

        let cartProduct =  document.createElement("div");
        cartProduct.classList.add("card-product");
        cartProduct.dataset.index = index;
        // console.log(cartProduct);
        

        let imgProduct = document.createElement("div");
        imgProduct.classList.add("img-product");

        let img = document.createElement("img");
        img.src = addToCart.img

        imgProduct.appendChild(img);

        // describe
        let describe = document.createElement("h4");
        describe.textContent = addToCart.describe;
        console.log(describe)
    

        let productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        
        let h1 = document.createElement("h3");
        let h2 = document.createElement("h3");
        h1.textContent = addToCart.name;
        h2.textContent = addToCart.price;
  
        let currency = addToCart.currency;
        // console.log(addToCart)
        if(currency !== "៛"){
            h2.textContent = currency + addToCart.usd;
            // console.log(h2)
        }
        else{
            h2.textContent = addToCart.riel + currency;
            // console.log(h2)
        }
     

        productPrice.appendChild(h1);
        productPrice.appendChild(h2);
        productPrice.appendChild(describe);

        let checkButton = document.createElement("div");
        checkButton.classList.add("check-cancel");

        let buttonCancle = document.createElement("button");
        buttonCancle.id = "remove";
        buttonCancle.textContent = "Remove";

        buttonCancle.addEventListener("click", removeProduct);
        checkButton.appendChild(buttonCancle);


        cartProduct.appendChild(imgProduct);
        cartProduct.appendChild(productPrice);
        cartProduct.appendChild(checkButton);
        
        shopStorages.appendChild(cartProduct);
        
        hr = document.createElement("hr")

        shopStorages.appendChild(hr);

        // console.log(shopStorages);
     

        // console.log(total);

        // get key value for currency riel
        totalPriceRiel = parseInt(addToCart.riel);// form riel currency
        totalPriceUSD += parseInt( addToCart.usd);// form riel currency
    }  
     let total = document.getElementById("total-usd");
    total.textContent = "$"+totalPriceUSD ;
    let totalRiel = document.getElementById("total-riel");
    totalRiel.textContent =  totalPriceRiel + "៛" ;

    console.log(totalPriceRiel);
    console.log(totalPriceUSD);
}

//=======================================fuction remove=========================
// function calculatePrice(value){
//     let money_exchange = JSON.parse(localStorage.getItem("money-exchange"));
//     // console.log(money_exchange);
//     let priceInRiel = document.querySelector("#price-value-riel").value
//     let priceInUSD = document.querySelector("#price-value-usd").value
//     if (value ==='៛'){
//       document.querySelector("#price-value-usd").value = priceInRiel/money_exchange;
//     }
//     else{
//       document.querySelector("#price-value-riel").value = priceInUSD*money_exchange   ;
//     }
//   }
//=======================================fuction remove=========================

function removeProduct(event){

    //  Get index
    let index = event.target.parentElement.parentElement.dataset.index;
    // console.log(index)

    // Remove product
    carts.splice(index, 1);
  
    // Save to local storage
    saveProduct() //old fuction

    // Update the view
    displayCart()

}
   


// function totalCurrency(carts){
//     // let cartss = JSON.parse(localStorage.getItem("carts"));
//     console.log(carts);
//     // console.log(cartss)
// }
//=======================================fuction get value form local storage=========================

displayCart()
// console.log("🚀 ~ file: cart.js:97 ~ displayCart()", displayCart())
// saveProduct()

// console.log sort cut crt+alt +"l"

array = [2,3,4,6]
let sum = 0
// for(let i=0; i<array.length; i++){
//     sum = sum + array[i]
//     console.log(array[i])
// }

for(let value of array){
    sum  += value
}
console.log(sum)