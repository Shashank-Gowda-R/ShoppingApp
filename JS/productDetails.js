var loadData = () => {
    var productData = JSON.parse(localStorage.getItem('selectedProduct'));

    var productImage = document.createElement('div');
    productImage.className = 'productImage';
    var imgContainer = document.createElement('div');
    imgContainer.className = 'imgContainer';
    var displayImg = document.createElement('img');
    displayImg.src = productData.preview;
    imgContainer.appendChild(displayImg);
    productImage.appendChild(imgContainer);

    var productDetails = document.createElement('div');
    productDetails.className = 'productDetails';

    var pheading = document.createElement('h1');
    pheading.innerHTML = productData.name;
    productDetails.appendChild(pheading);

    var brandTag = document.createElement('h1');
    brandTag.innerHTML = productData.brand;
    brandTag.className = 'brand';
    productDetails.appendChild(brandTag)

    var price = document.createElement('h4');
    price.innerHTML = "Price: Rs ";
    price.className = 'price';

    var priceTag = document.createElement('p');
    priceTag.innerHTML = productData.price;
    priceTag.className = 'priceTag'
    price.appendChild(priceTag);

    productDetails.appendChild(price);

    var desc = document.createElement('h4');
    desc.innerHTML = 'Description';
    desc.className = 'descHeading';
    productDetails.appendChild(desc);

    var descData = document.createElement('p');
    descData.innerHTML = productData.description;
    descData.className = 'description';
    productDetails.appendChild(descData);



    var imgHead = document.createElement('h4');
    imgHead.innerHTML = 'Product Preview';
    imgHead.className = 'descHeading';
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

    addBtn.addEventListener('click', function () {
        addBtn.classList.add('bigger');
        setTimeout(function () {
            addBtn.classList.remove('bigger');
        }, 200)
        addToCart(productData);
        var cartData = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').innerHTML = cartData.length;
    });

    productDetails.appendChild(addBtn);


    var mainDiv = document.getElementById('productOverview');
    mainDiv.appendChild(productImage);
    mainDiv.appendChild(productDetails);
};

var addToCart = (productData) => {
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData.push(productData);
    localStorage.setItem('cart', JSON.stringify(cartData));
}

loadData();