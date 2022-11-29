
const dom_bodyTable = document.getElementById("table-container");
// console.log(dom_bodyTable)
//=======================================search products========================
let listOfProducts = [
    {img :"img",name :"laptop",price :"$100",edit:"hello world"},
    {img :"img",name :"laptop",price :"$300",edit:"hello world"},
    {img :"img",name :"laptop",price :"$200",edit:"hello world"}
]

function createProduct(){
    //remove table products
    let dom_products_container = document.getElementById("body-table");
    dom_products_container.remove();
    //create new once
    dom_products_container = document.createElement("tbody");
    dom_products_container.id = "body-container";
    // console.log(dom_products_container)
    //append 
    dom_bodyTable.appendChild(dom_products_container);

    for(let index = 0; index<listOfProducts.length; index++ ){
        // let listOfProducts = listOfProducts[index];
         
        //create  tr
        let tr = document.createElement("tr");
        tr.setAttribute("id","tr-container");

        //create td
        let td = document.createElement("td");
        td.setAttribute("id" ,"img");

        let td1 = document.createElement("td");
        td1.setAttribute("id" ,"name");

        let td2 = document.createElement("td");
        td2.setAttribute("id" ,"price");

        let td3 = document.createElement("td");
        td3.setAttribute("id" ,"edit");

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        dom_products_container.appendChild(tr);
    } 
}

createProduct()