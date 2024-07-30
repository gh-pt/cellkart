// Fetch Products
function fetchProducts(){
    fetch('./products.json')
        .then(response => response.json())
        .then(data => renderProducts(data));
};

//Render Products in html
function renderProducts(products) {
    const productBox = document.querySelector('.product-box');
    productBox.innerHTML = '';

    products.forEach((product,index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="img">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="detail">
                <div class="brand">
                    <div class="dot"></div>${product.brand}
                </div>
                <div class="name">${product.name}</div>
                <div class="price">
                    <div class="selling">${product.selling}</div>
                    <div class="cutting">${product.cutting}</div>
                </div>
            </div>
        `;

        productCard.onclick = () => {
            window.location.href = `Desc.html?productId=${index}`;
        };

        productBox.appendChild(productCard);
    });
}

// Render Nav
function renderNav(){
    const navContainer = document.querySelector('.navList');
    navContainer.innerHTML = `<li class="btns" id="mnav">
                                <span class="active"><a href="./">Home</a></span>
                                <span><a href="./#product">Product</a></span>
                                <span><a href="./#about">About</a></span>
                                <span><a href="./#contact">Contact</a></span>
                                <span onclick="mnav('close')"class="mnavclose">close</span>
                                <li>`
}

// Call the FetchProducts
fetchProducts();

// Call the Render Nav
renderNav();


const loginBtn = document.querySelector('.login-btn');

// Login Logic
if(localStorage.getItem('auth')!=='true'){
    loginBtn.innerHTML = '<a href = "./login.html">Login</a>';
}else{
    loginBtn.innerHTML = "<a href='/' onclick='Logout()'>Logout</a>"
    loginBtn.style.backgroundColor = 'red'
}

// Logout Function
function Logout(){
    localStorage.clear();
    window.history.back();
}

// Menubar 
function mnav(open) {
    console.log("open");
    if (open == 'open') {
        document.getElementById('mnav').classList.add('open');
    } else {
        document.getElementById('mnav').classList.remove('open')
    }
}


