
const productContainer = document.querySelector(".card-container");

const dom_product_dialog = document.querySelector("#product-dialog"); 
// =======================================array object==========================
let listOfProducts = [] // store the list of products
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
let carts=[]; /// for push value to local storage
//=======================================fuction save in local stroage===================
function saveItem(key, value) {
  console.log(value)
  localStorage.setItem(key, JSON.stringify(value));
}
//=======================================fuction get value form local storage=========================
function loadItem(storage,key) {
  let itmes = JSON.parse(localStorage.getItem(key));
  if (itmes !== null) {
    return  itmes;
  }  
  saveItem(key,storage);
  return storage;
}

//=======================================fuction hide=========================
function hide(element) {
  element.style.display = "none";
}

//=======================================duction show=======================
function show(element) {
  element.style.display = "block";
}

//=======================================get value of Product========================
function hideCancelButton(){
  hide(dom_product_dialog);
  // when click cancel button 
}
//=======================================get value of Product========================
function hideCreateButton(){
  hide(dom_product_dialog);
  // when click create button 
}

//=======================================User clik to cart========================
function getUserData(event){ /// for user click on add to cart and get value to localStorage
  let newcart={};
  let index = event.target.dataset.index;
    carts  = loadItem(carts,"carts");
    newcart = listOfProducts[index];

    carts.push(newcart); // push new cart to list of cart products
    saveItem("carts", carts);

}
//=======================================get value of Product========================
  function displayProducts() {
    // console.log()
     // for despaly on sceen costomer
    console.log(listOfProducts)
    for(let index = 0 ; index < listOfProducts.length ; index++){
      let listOfProduct = listOfProducts[index]; // get value form list of products
      // console.log(listOfProduct)

      cardOfProduct = document.createElement("div");
      cardOfProduct.classList.add("card-product");
      // get index of card product
      cardOfProduct.dataset.index = index;
      // console.log(cardOfProduct);

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

      let currency = listOfProduct.currency;
      console.log(listOfProduct)
      if(currency !== "៛"){
        paragraphPrice.textContent = currency + listOfProduct.price;
      }
      else{
        paragraphPrice.textContent = listOfProduct.price + currency;
      }
     
      
      productRating =  document.createElement("div");
      productRating.classList.add("rating");


      containsButton =  document.createElement("div");
      containsButton.classList.add("buyBtn");

      button  = document.createElement("button");
      button.id = ("buyBtn");
      button.textContent = "Add to cart";

      containsButton.appendChild(button);
      button.addEventListener("click",  getUserData);
      button.dataset.index = index;
    

      cardOfProduct.appendChild(card_img);
      cardOfProduct.appendChild(productName);
      cardOfProduct.appendChild(productPrice);
      cardOfProduct.appendChild(productRating);
      cardOfProduct.appendChild(containsButton);
      // console.log(cardOfProduct);

      productContainer.appendChild(cardOfProduct);

    }
   
  }

 
//=======================================show form login========================
function showButtonLogin(){
  show(dom_product_dialog);
  buttonCreate.textContent = "Login";
  formTitle.textContent = "LOGIN";
  // for remove input fields
  labelName1.style.display  = "none";
  labelName2.style.display  = "none";
  firstName.style.display  = "none";
  lastName.style.display  = "none";
  optionLogin.textContent = "or login with";
  passwordLabel.textContent = "Forgot password";
  passwordLabel.style.color = "blue";
}
function showButtonRegister(){
  show(dom_product_dialog);
  buttonCreate.textContent = "Create";
  formTitle.textContent = "REGISTER";
// for dispaly input fields
  labelName1.style.display  = "block";
  labelName2.style.display  = "block";
  firstName.style.display  = "block";
  lastName.style.display  = "block";
  optionLogin.textContent = "or sign up with";
  passwordLabel.textContent = "Remember your password";
  passwordLabel.style.color = "black"
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
  const productList = document.querySelectorAll(".card-product"); // get for hide
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
        productList[i].style.display = "none";
      }
    }
  }
}

//=======================================MAIN===================================

let searchProductInput = document.querySelector("#searcProduct");
// console.log(searchProductInput.value);
searchProductInput.addEventListener("keyup" ,searchProduct);

///get button  login and register

let navbarButton = document.querySelectorAll("ul");
let listButton = navbarButton[0];

buttonLogin =  listButton.firstElementChild.nextElementSibling;
buttonRegister = listButton.firstElementChild.nextElementSibling.nextElementSibling;
// console.log(buttonRegister)

//addEventListener

buttonLogin.addEventListener("click", showButtonLogin);
buttonRegister.addEventListener("click", showButtonRegister);


///
let formButton = dom_product_dialog.querySelectorAll('button');
// console.log(formButton);

let buttonCancle = formButton[0];
buttonCancle.addEventListener("click", hideCancelButton);  // click cancel button on form button and none form

let buttonCreate = formButton[1];
buttonCreate.addEventListener("click", hideCreateButton); // click create button on form add button none form

// form titile
let formTitle = document.getElementById("titleOfForm");
// console.log(formTitle);

// delete form input 
let labelName1 = document.getElementById("label-name1");
let labelName2 = document.getElementById("label-name2");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let optionLogin = document.getElementById("optionLogin");
let passwordLabel = document.getElementById("password-label");

// search products
let cardOfProduct = document.querySelectorAll("p");
let paraName = cardOfProduct[0];
let paraPrice = cardOfProduct[1];
//=======================================MAIN===================================
// saveProduct()
listOfProducts = loadItem(listOfProducts,"products");
displayProducts();

