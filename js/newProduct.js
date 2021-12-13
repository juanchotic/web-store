const productName = document.getElementById('name');
const productPrice = document.getElementById('price');
const productInventory = document.getElementById('inventory');
const btnCreate = document.getElementById('btnCreate');
const errorPrice1 = document.getElementById('errorPrice1');
const errorPrice2 = document.getElementById('errorPrice2');
const errorPrice3 = document.getElementById('errorPrice3');
const data = "Campo Requerido";

btnCreate.addEventListener('click', (e) => {
    e.preventDefault(); //PARA QUE LA PAGINA NO SE RECARGUE AL PRESIONAR EL BOTON


    if (productName.value == '') {
        errorPrice1.innerHTML = data;
    }else{
        errorPrice1 == '';
    }
    
    if (productPrice.value == '') {
        errorPrice2.innerHTML = data;
    }else{
        errorPrice2 == '';
    }
    
    if (productInventory.value == '') {
        errorPrice3.innerHTML = data;
    }else{
        errorPrice3 == '';
        alert("Producto agregado")
    }

    


 
})