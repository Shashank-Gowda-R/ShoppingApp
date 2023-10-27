var loadData = () => {
    var productData = JSON.parse(localStorage.getItem('selectedProduct'));
    var productImage = document.createElement('div');
    productImage.className = 'previewImg';
    var displayImg = document.createElement('img');
    displayImg.src = productData.preview;
    productImage.appendChild(displayImg);
    console.log(productImage);

    var productDetails = document.createElement('div');
    productDetails.className = 'productDetails';
    var pheading = document.createElement('h1');
    pheading.innerHTML = productData.name;
    productDetails.appendChild(pheading);

    var brandTag = document.createElement('h4');
    brandTag.innerHTML = productData.brand;
    brandTag.className = 'brand';
    productDetails.appendChild(brandTag)

    var price = document.createElement('h3');
    price.innerHTML = "Price: Rs "

    var priceTag = document.createElement('span');
    priceTag.innerHTML = productData.price;
    price.appendChild(priceTag);

    productDetails.appendChild(price);

    var desc = document.createElement('h3');
    desc.innerHTML = 'Description';

    var descData = document.createElement('p');
    descData.innerHTML = productData.description;
    desc.appendChild(descData);

    productDetails.appendChild(desc);

    var imgHead = document.createElement('h3');
    imgHead.innerHTML = 'Product Preview';
    productDetails.appendChild(imgHead);

    var smallPreviewImg = document.createElement('div');
    smallPreviewImg.className = 'smallPreviewImg';
    var activeImage = null; // Keep track of the active image
    productData.photos.map((photoUrl, index) => {
        var imgTag = document.createElement('img');
        imgTag.src = photoUrl;
        imgTag.addEventListener('click', function () {
            if (activeImage) {
                activeImage.classList.remove('active');
            }
            imgTag.classList.add('active');
            activeImage = imgTag;
            displayImg.src = activeImage.src;
        });
        smallPreviewImg.appendChild(imgTag);
        if (index === 0) {
            imgTag.classList.add('active');
            activeImage = imgTag;
        }
    });
    productDetails.appendChild(smallPreviewImg);

    var addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add to Cart';
    addBtn.className = 'button';
    addBtn.onclick = addItems;

    productDetails.appendChild(addBtn);


    var mainDiv = document.getElementById('productOverview');
    mainDiv.appendChild(productImage);
    mainDiv.appendChild(productDetails);
};

var addItems = () => {
    if (typeof (Storage) !== 'undefined') {
        if (localStorage.itemsCount) {
            localStorage.itemsCount = Number(localStorage.itemsCount) + 1;
        }
        else {
            localStorage.itemsCount = 1;
        }
        document.getElementById('cart-count').innerHTML = localStorage.itemsCount;
    }
    else {
        document.getElementById('cart-count').innerHTML = localStorage.itemsCount;
    }
}

loadData();