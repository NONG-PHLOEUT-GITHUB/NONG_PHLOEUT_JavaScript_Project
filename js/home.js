// let cardOfProduct = document.querySelector(".card-product");
let cardOfProduct = document.querySelectorAll("p");
let paraName = cardOfProduct[0];
let paraPrice = cardOfProduct[1];
// console.log(paraName.textContent)

const productContainer = document.querySelector(".card-container");

//=======================================get element===================
let products = []; /// for stro value for localStorage
// let listOfProducts = [
//   {
//     img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1634145627000", name: "laptop", price: "$100" ,describe : "black"
//   },
//   {
//     img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450854_sd.jpg", name: "laptop", price: "$300" ,describe : "black"
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/31zUXtO55tL._AC_SY1000_.jpg", name: "laptop", price: "$200" ,describe : "black"
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/31zUXtO55tL._AC_SY1000_.jpg", name: "laptop", price: "$200" ,describe : "black"
//   },
//     {
//     img: "https://m.media-amazon.com/images/I/31zUXtO55tL._AC_SY1000_.jpg", name: "laptop", price: "$200" ,describe : "black"
//   }
// ]

//=======================================fuction save in local stroage===================
function saveProduct() {
  localStorage.setItem("products", JSON.stringify(listOfProducts));
}

//=======================================fuction get value form local storage=========================
function loadProduct() {
  let productStorage = JSON.parse(localStorage.getItem("products"));
  if (productStorage !== null) {
    listOfProducts = productStorage;

    // console.log(listOfProducts)
  }
}
  //=======================================get value of Product========================
  function createProduct() {
    loadProduct() // for despaly on sceen costomer
    saveProduct() /// for save value form local storage
    for(index = 0 ; index < listOfProducts.length ; index++){
      let listOfProduct = listOfProducts[index]; // get value form list of products

      cardOfProduct = document.createElement("div");
      cardOfProduct.classList.add("card-product");

      card_img = document.createElement("div");
      card_img.classList.add("card-img");

      let proImg = document.createElement("img");
      proImg.src = listOfProduct.img;

      card_img.appendChild(proImg);

      // console.log(card_img)

      productName =  document.createElement("div");
      productName.classList.add("product-name");

      paragraphName = document.createElement("p");
      productName.appendChild(paragraphName);
      paragraphName.textContent = listOfProduct.name;
      
      productPrice =  document.createElement("div");
      productPrice.classList.add("product-price");
      
      paragraphPrice = document.createElement("p");
      productPrice.appendChild(paragraphPrice);
      paragraphPrice.textContent = listOfProduct.price;
      
      productRating =  document.createElement("div");
      productRating.classList.add("rating");
      // productName.textContent = listOfProduct.describe;

      containsButton =  document.createElement("div");
      containsButton.classList.add("buyBtn");

      button  = document.createElement("button");
      button.id = ("buyBtn");
      button.textContent = "Buy now!";
      containsButton.appendChild(button);

      cardOfProduct.appendChild(card_img);
      cardOfProduct.appendChild(productName);
      cardOfProduct.appendChild(productPrice);
      cardOfProduct.appendChild(productRating);
      cardOfProduct.appendChild(containsButton);
      console.log(cardOfProduct);

      productContainer.appendChild(cardOfProduct);

    }
   
  }
  //=======================================dropdown function========================

function dropdowns() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
     let dropdowns = document.getElementsByClassName("dropdown-content");
     let i;
      for (i = 0; i < dropdowns.length; i++) {
       let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




  //=======================================search products========================

function searchProduct(){
  const textInput = searchProductInput.value.toUpperCase();
  const baner = document.querySelector(".baner");
  const productList = document.querySelectorAll(".card-product");
  const productName = document.getElementsByTagName("p");
  for(let i = 0 ;i< productName.length ; i++){
    let matches = productList[i].getElementsByTagName("p")[0]; //p index 0
    let matchesPrice = productList[i].getElementsByTagName("p")[1]; //p index 1
    // console.log(matchesPrice)
    if(matches || matchesPrice){
      let textValue = matches.textContent || matches.innerHTML;
      let numberValue = matchesPrice.textContent || matchesPrice.innerHTML
      if(textValue.toUpperCase().indexOf(textInput)> -1 || numberValue.toLowerCase(). indexOf(textInput)> -1){
        productList[i].style.display = "";
      }
      else{
        baner.style.display = "none";
        productList[i].style.display = "none";
      }
    }
  }


}
//=======================================MAIN===================================

let searchProductInput = document.querySelector("#searcProduct");
// console.log(searchProductInput.value);
searchProductInput.addEventListener("keyup" ,searchProduct);


createProduct();

loadProduct()
