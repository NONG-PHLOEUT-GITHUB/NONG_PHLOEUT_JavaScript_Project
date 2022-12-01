

// let dataAddCard = 200;
//=======================================fuction save in local stroage===================
function saveProduct() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
      
//=======================================fuction get value form local storage=========================

// //=======================================fuction get value form local storage=========================
// function createAddToCart(){
//     // loadProductAdded()
//     for(let index = 0; index <listProductAddToCarts.length ; index++) {
//        let addToCart = listProductAddToCarts[index];
//         console.log(addToCart);
//     }
// }
// saveProduct()
// createAddToCart()
// loadProductAdded()
