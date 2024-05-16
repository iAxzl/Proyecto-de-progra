import { Product } from "./Product.js";
import { UI } from "./UI.js";


document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    
    e.preventDefault();

    
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    
    const product = new Product(name, price, year);

    
    const ui = new UI();

   
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Porfavor agrege informacion en los campos vacios", "danger");
    }

    
    ui.addProduct(product);
    ui.showMessage("Produdcto Añadido Exitosamente", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});