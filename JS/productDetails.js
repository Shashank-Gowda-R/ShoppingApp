var product = JSON.parse(localStorage.getItem('selectedProduct'));
console.log(product);
document.getElementById('mainSection').innerHTML = product.name;