
const dom_bodyTable = document.getElementById("table-container"); // get from table

const dom_product_view = document.querySelector("#Products-view"); // get from form

const dom_product_dialog = document.querySelector("#product-dialog");  // get from form
//=======================================fuction hide=========================

let listOfProducts = [
  {
    img: "https://m.media-amazon.com/images/I/31zUXtO55tL._AC_SY1000_.jpg", name: "laptop", price: "$100" ,describe : "black"
  },
  {
    img: "https://m.media-amazon.com/images/I/31zUXtO55tL._AC_SY1000_.jpg", name: "laptop", price: "$300" ,describe : "black"
  },
  {
    img: "https://m.media-amazon.com/images/I/31zUXtO55tL._AC_SY1000_.jpg", name: "laptop", price: "$200" ,describe : "black"
  }
]

//=======================================fuction save in local stroage===================
function saveProduct() {
  localStorage.setItem("product", JSON.stringify(listOfProducts));
}

//=======================================fuction get value form local storage=========================
function loadProduct() {
  let productStorage = JSON.parse(localStorage.getItem("product"));
  if (productStorage !== null) {
    listOfProducts = productStorage;
    console.log(listOfProducts)
  }
}
//=======================================fuction hide=========================
function hide(element) {
  element.style.display = "none";
}

//=======================================duction show=======================
function show(element) {
  element.style.display = "block";
}
//======================================= form hide===========================
function onCancel(e) {
  hide(dom_product_dialog);
}
//======================================form show ==========================

function onEdit() {
  hide(dom_product_dialog); // hide 
 // for get display new create product
}
//=======================================create products======================

function createProduct() {
  loadProduct()
  //remove table products
  let dom_products_container = document.querySelector("#body-table");
  dom_products_container.remove();
  //create new once
  dom_products_container = document.createElement("tbody");
  dom_products_container.id = "body-table";
  // console.log(dom_products_container)
  //append 
  dom_bodyTable.appendChild(dom_products_container);

  for (let index = 0; index < listOfProducts.length; index++) {
    let listOfProduct = listOfProducts[index];

    //create  tr
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr-container");
    tr.dataset.index = index;

    //create td img
    let td = document.createElement("td");
    td.setAttribute("id", "img");
    let Proimg = document.createElement("img");
    Proimg.src = listOfProduct.img
    console.log(listOfProduct)
    td.appendChild(Proimg)
    console.log(td)
 //create td name
    let tdName = document.createElement("td");
    tdName.setAttribute("id", "name");
    tdName.textContent = listOfProduct.name;
 //create td price

    let td2 = document.createElement("td");
    td2.setAttribute("id", "price");
    td2.textContent = listOfProduct.price;
 //create td describe
    let tdDescribe = document.createElement("td");
    tdDescribe.setAttribute("id", "describe");
    tdDescribe.textContent = listOfProduct.describe;
 //create td edit button
    let td3 = document.createElement("td");
    td3.setAttribute("id", "edit");

    tr.appendChild(td);
    tr.appendChild(tdName);
    tr.appendChild(td2);
    tr.appendChild(tdDescribe);
    tr.appendChild(td3);

    dom_products_container.appendChild(tr);

    //create button remove and edit

    let buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("id", "button-remove");
    buttonRemove.textContent = "Remove"
    //addEventListener
    buttonRemove.addEventListener("click", removeProduct);
    console.log(buttonRemove);

    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("id", "button-edit");
    buttonEdit.textContent = "Edit"
    //addEventListener
    buttonEdit.addEventListener("click", editProduct)
    //appendChild to td3
    td3.appendChild(buttonEdit);
    td3.appendChild(buttonRemove);
  }
}
//=======================================Add new product======================
function onAddNewProduct() {

  // buttonCreate.textContent="Create"; // when click add new product forwards to fuction create product
  show(dom_product_dialog);
  hide(buttonSave);

}
let addButton = document.getElementById("add-product");
addButton.addEventListener("click", onAddNewProduct);
//=======================================Edit pop up=====================
function editProduct(event) {
  // buttonCreate.textContent = "Save";
  let index = event.target.parentElement.parentElement.dataset.index; // index of the question
  console.log(index);
  document.getElementById("img-value").value = listOfProducts[index].img;
  document.getElementById("name-value").value = listOfProducts[index].name;
  document.getElementById("price-value").value = listOfProducts[index].price;
  document.getElementById("describe-value").value = listOfProducts[index].price;


  show(dom_product_dialog);
  hide(buttonCreate);


}
//=======================================Edit value=====================
function editPr(index,valueOfimg,valueOfname,valueOfPrice){
  console.log("hello world")
  listOfProducts[index].img = valueOfimg;
  listOfProducts[index].name = valueOfname;
  listOfProducts[index].price = valueOfPrice;
  hide(dom_product_dialog);
}

//=======================================Remove============================
function removeProduct(event){

  // alert("hello")

    //  Get index
    // let index = event.target.parentElement.parentElement.dataset.index;
    // console.log(index)

    // Remove question
    // listOfProducts.splice(index, 1);
  
    // Save to local storage
    // saveQuestions();
  
    // Update the view
    // createProduct()
    let tbody = document.querySelector("#tr-container");
    console.log(tbody);
    tbody.remove()
}
//=======================================Creat product======================

function onCreate() {

  // 1- Hide the dialog
  hide(dom_product_dialog);
  // 2- Create a new Product with the dialog form values
  createNew  = {};
  createNew.img = document.getElementById("img-value").value;
  createNew.name = document.getElementById("name-value").value;
  createNew.price = document.getElementById("price-value").value;
  createNew.describe = document.getElementById("describe-value").value;
  console.log(createNew)
  listOfProducts.push(createNew);
  saveProduct(); //save Products on localStorage
  createProduct() // for get display newCreateProduct
  // 3- Update the list of Product, save Product on local sotrage, update the view
}


//=======================================MAIN=======================

let button = dom_product_dialog.querySelectorAll('button');
// console.log(button);

let buttonCancle = button[0];
buttonCancle.addEventListener("click", onCancel);  // click cancel button on form add products

let buttonSave = button[1];
buttonSave.addEventListener("click", editPr); // click add button on form add products

let buttonCreate = button[2];
buttonCreate.addEventListener("click", onCreate); // click add button on form add products

//=======================================CALL FUCTION=======================

createProduct()