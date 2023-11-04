$(document).ready(function () {
    $('.center').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    var APICall = () => {
        var a = new XMLHttpRequest();
        a.open('get', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
        a.send();
        a.onreadystatechange = () => {
            if (a.readyState == 4 && a.status == 200) {
                var data = a.responseText;
                var productList = JSON.parse(data);
                productList.map((x) => {
                    var divTag = document.createElement('div');
                    divTag.className = "boxStyle";
                    var detailsTag = document.createElement('div');
                    detailsTag.className = 'details';
                    for (var j in x) {
                        if (j == 'preview') {
                            var imgTag = document.createElement('img');
                            var loc = document.createElement('a');
                            loc.href = '../HTML/productDetails.html';
                            imgTag.src = x.preview;
                            imgTag.addEventListener('click', () => {
                                localStorage.setItem('selectedProduct', JSON.stringify(x));
                            });
                        }
                    }
                    loc.appendChild(imgTag)
                    divTag.appendChild(loc);
                    for (var j in x) {
                        if (j == 'name') {
                            var pName = document.createElement('h3');
                            pName.innerHTML = x.name;
                            detailsTag.appendChild(pName);
                        }
                        if (j == 'brand') {
                            var pBrand = document.createElement('h4');
                            pBrand.innerHTML = x.brand;
                            detailsTag.appendChild(pBrand);
                        }
                        if (j == 'price') {
                            var pPrice = document.createElement('h5');
                            pPrice.innerHTML = "Rs " + x.price;
                            detailsTag.appendChild(pPrice);
                        }
                    }
                    divTag.appendChild(detailsTag);
                    for (var j in x) {
                        if (j == 'isAccessory') {
                            if (!(x.isAccessory)) {
                                document.getElementById('clothingCards').appendChild(divTag)
                            }
                            if (x.isAccessory) {
                                document.getElementById('accessoryCards').appendChild(divTag)
                            }
                        }
                    }
                });
            }
        }
    }
    APICall();
});

