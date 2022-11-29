
  //=======================================dropdown function========================

function myFunction() {
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
    let matches = productList[i].getElementsByTagName("p")[0];
    if(matches){
      let textValue = matches.textContent || matches.innerHTML;
      if(textValue.toUpperCase().indexOf(textInput)> -1){
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
console.log(searchProductInput.value);
searchProductInput.addEventListener("keyup" ,searchProduct);