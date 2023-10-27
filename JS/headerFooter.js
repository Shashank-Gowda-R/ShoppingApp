// Header Design
var Header = document.getElementById('head');

var navBar = document.createElement('nav');
navBar.className = 'topBar';


// Header Left Section Design logo and navigation
var leftDiv = document.createElement('div');
leftDiv.className = 'leftMenu';
var Logo = document.createElement('div');
Logo.className = 'logo';
var companyName = document.createElement('a');
companyName.href = '../HTML/homePage.html';
var thickName = document.createElement('span');
thickName.innerHTML = 'shop';
companyName.appendChild(thickName);
companyName.innerHTML += 'lane';
Logo.appendChild(companyName);
var clothingAnker = document.createElement('a');
clothingAnker.innerHTML = 'Clothing';
clothingAnker.href = '#clothing';
var accessoriesAnker = document.createElement('a');
accessoriesAnker.innerHTML = 'Accessories';
accessoriesAnker.href = '#accessory';
leftDiv.appendChild(Logo);
leftDiv.appendChild(clothingAnker);
leftDiv.appendChild(accessoriesAnker);
navBar.appendChild(leftDiv);


// Search Bar design
var searchBar = document.createElement('div');
searchBar.className = 'searchBar';
var iconTag = document.createElement('i');
iconTag.className = 'fa-solid fa-magnifying-glass';
var inputTag = document.createElement('input');
inputTag.type = 'text';
inputTag.id = 'search-box';
inputTag.name = 'search';
inputTag.placeholder = 'Search for Clothing and Accessories';
searchBar.appendChild(iconTag);
searchBar.appendChild(inputTag);
navBar.appendChild(searchBar);


// Header Right Section Cart and user Image
var rightDiv = document.createElement('div');
rightDiv.className = 'rightMenu';
var cartDiv = document.createElement('div');
cartDiv.id = 'cart-wrapper';
var productCount = document.createElement('p');
productCount.id = 'cart-count';
productCount.innerHTML = 0;
var cartNav = document.createElement('a');
cartNav.href = '../HTML/checkout.html';
var cratIcon = document.createElement('i');
cratIcon.className = 'fa-solid fa-cart-shopping';
cartNav.appendChild(cratIcon);
cartDiv.appendChild(productCount);
cartDiv.appendChild(cartNav);
var userImg = document.createElement('img');
userImg.src = '/images/profile.png';
userImg.alt = 'userImage';
rightDiv.appendChild(cartDiv);
rightDiv.appendChild(userImg);
navBar.appendChild(rightDiv);

Header.appendChild(navBar);

// Footer Design
var footer = document.getElementById('footer');

var onlineStore = document.createElement('div');
onlineStore.className = 'pdl0';
var onlineStoreHead = Object.assign(document.createElement('p'), { className: 'footerHeading', innerHTML: 'Online Store' });
var onlineAnchor1 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Men Clothing', href: '#clothing' });
var onlineAnchor2 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Women Clothing', href: '#clothing' });
var onlineAnchor3 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Men Accessories', href: 'accessory' });
var onlineAnchor4 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Women Accessories', href: 'accessory' });
onlineStore.append(onlineStoreHead, onlineAnchor1, onlineAnchor2, onlineAnchor3, onlineAnchor4);
footer.appendChild(onlineStore);

var helpfulLinks = document.createElement('div');
var helpfulLinksHead = Object.assign(document.createElement('p'), { className: 'footerHeading', innerHTML: 'Helpful Links' });
var helpfulAnchor1 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Home', href: '../HTML/homePage.html' });
var helpfulAnchor2 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'About', href: '/' });
var helpfulAnchor3 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Contact', href: '/' });
helpfulLinks.append(helpfulLinksHead, helpfulAnchor1, helpfulAnchor2, helpfulAnchor3);
footer.appendChild(helpfulLinks);

var partners = document.createElement('div');
var partnersHead = Object.assign(document.createElement('p'), { className: 'footerHeading', innerHTML: 'Partners' });
var partnersAnchor1 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Zara', href: '/' });
var partnersAnchor2 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Pantaloons', href: '/' });
var partnersAnchor3 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'Levis', href: '/' });
var partnersAnchor4 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: 'UCB', href: '/' });
var partnersAnchor5 = Object.assign(document.createElement('a'), { className: 'link', innerHTML: '+ Many More', href: '/' });
partners.append(partnersHead, partnersAnchor1, partnersAnchor2, partnersAnchor3, partnersAnchor4, partnersAnchor5);
footer.appendChild(partners);

var address = document.createElement('div');
var addressHead = Object.assign(document.createElement('p'), { className: 'footerHeading', innerHTML: 'Address' });
var addressTag1 = Object.assign(document.createElement('p'), { className: 'link', innerHTML: 'Building 101' });
var addressTag2 = Object.assign(document.createElement('p'), { className: 'link', innerHTML: 'Central Avenue' });
var addressTag3 = Object.assign(document.createElement('p'), { className: 'link', innerHTML: 'LA - 902722' });
var addressTag4 = Object.assign(document.createElement('p'), { className: 'link', innerHTML: 'United States' });
address.append(addressHead, addressTag1, addressTag2, addressTag3, addressTag4);
footer.appendChild(address);