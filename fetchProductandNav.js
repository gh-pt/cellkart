function fetchProducts(){
    fetch('./products.json')
        .then(response => response.json())
        .then(data => renderProducts(data));
    navfetch()
};

function navfetch(){
    fetch('./NavBar.html')
    .then(response => response.text())
    .then(data => renderNav(data));
}


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


function renderNav(nav){
    const navContainer = document.querySelector('.navList');
    navContainer.innerHTML = nav
}

const loginBtn = document.querySelector('.login-btn');

if(localStorage.getItem('auth')!=='true'){
    loginBtn.innerHTML = '<a href = "./login.html">Login</a>';
}else{
    loginBtn.innerHTML = "<a href='/' onclick='Logout()'>Logout</a>"
    loginBtn.style.backgroundColor = 'red'
}

function Logout(){
    localStorage.clear();
    window.location.reload();
}