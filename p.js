function updateQuantity(eggs,bread){
    let qtyInput=document.getElementById(eggs);

    let currentQty= parseInt(qtyInput.value, 10);

let newQty= Math.max(1,currentQty+bread);    

// newQty=qtyInput.value;

qtyInput.value=newQty;

// console.log(newQty);
}

function addToCart(siren){
    let qtyInput=document.getElementById('qty'+siren);

    let qty= parseInt(qtyInput.value,10);
    let pdtname=


   console.log(qty);
}
