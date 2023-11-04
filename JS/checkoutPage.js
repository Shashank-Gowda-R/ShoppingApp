var cartItems = JSON.parse(localStorage.getItem('cart'));
var uniqueItems = [];

cartItems.map((y) => {
    var productID = y.id;
    if (uniqueItems[productID]) {
        uniqueItems[productID].count += 1;
    }
    else {
        uniqueItems[productID] = {
            product: y,
            count: 1
        }
    }
});

var mainSection = document.getElementById('mainSection');
var a = uniqueItems.filter((item)=>{ return item!=null})
var headTag = Object.assign(document.createElement('h1'), { className: 'mainHeading', innerHTML: 'Checkout' });
var contentDiv = Object.assign(document.createElement('div'), { className: 'mainContent' });
var itemsDiv = Object.assign(document.createElement('div'), { className: 'rightDiv' });
var subHead1 = Object.assign(document.createElement('h3'), { className: 'subHeading', innerHTML: 'Total Items: ' })
var itemsCount = Object.assign(document.createElement('span'), { className: 'itemsCount', id: 'itemsCount', innerHTML: a.length });
subHead1.appendChild(itemsCount);
var grandTotal = 0;

itemsDiv.appendChild(subHead1)

uniqueItems.map((x) => {
    // console.log(x);
    var mainItemDiv = Object.assign(document.createElement('div'), { className: 'itemDiv' });
    var detailsDiv = Object.assign(document.createElement('div'), { className: 'detailsDiv' });
    var imgDiv = Object.assign(document.createElement('div'), { className: 'imgDiv' });
    var imgTag = Object.assign(document.createElement('img'), { className: 'checkoutProdImg', src: x.product.preview, alt: 'Product Preview Image' });
    imgDiv.appendChild(imgTag);

    var itemName = Object.assign(document.createElement('h4'), { className: 'itemName', innerHTML: x.product.name, });
    var itemCount = Object.assign(document.createElement('p'), { className: 'itemCount', innerHTML:'x'+ x.count });
    var itemPrice = Object.assign(document.createElement('p'), { className: 'itemCount' });
    var rsTag = Object.assign(document.createElement('span'), { className: 'rsTag', innerHTML: 'Amount: Rs ' });
    var rupee = Object.assign(document.createElement('span'), { className: 'rupee', innerHTML: x.product.price * x.count });
    grandTotal += x.product.price * x.count;
    itemPrice.append(rsTag, rupee);
    detailsDiv.append(itemName, itemCount, itemPrice);

    mainItemDiv.append(imgDiv, detailsDiv);
    itemsDiv.appendChild(mainItemDiv);
});


var priceDiv = Object.assign(document.createElement('div'), { className: 'leftDiv' });
var subHead2 = Object.assign(document.createElement('h3'),{className:'subHeading',innerHTML:'Total Amount'});
var totalPTag = Object.assign(document.createElement('p'),{innerHTML:'Amount: Rs'});
var grandTotalTag = Object.assign(document.createElement('span'),{className:'totalAmount',innerHTML:grandTotal});
totalPTag.appendChild(grandTotalTag);
var orderBtn = Object.assign(document.createElement('button'),{className:'orderBtn',innerHTML:'Place Order'});
var orderAnchor = Object.assign(document.createElement('a'),{href:'../HTML/orderPage.html'})
orderAnchor.appendChild(orderBtn);

priceDiv.append(subHead2,totalPTag,orderAnchor);

contentDiv.append(itemsDiv,priceDiv);

mainSection.append(headTag,contentDiv);

orderBtn.addEventListener('click',function(){
    localStorage.clear();
});