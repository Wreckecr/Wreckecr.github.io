var productApi = 'http://localhost:3000/products';

function start() {
    getProducts(renderProducts);
}

start();

// Functions
function getProducts(callback) {
    fetch(productApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}


function renderProducts(products) {
    var listProductsBlock = 
        document.querySelector('.home-product--sneaker');
    var htmls = products.map(function(product) {
        return `
            <div class="col p-2-4 t-4 m-6">
                <a class="home-product-item" href="#">
                    <div class="home-product-item__img" style="background-image: url(${product.url});"></div>
                    <h4 class="home-product-item__name">${product.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${product.priceOld}</span>
                        <span class="home-product-item__price-current">${product.priceCurrent}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fa-solid fa-star"></i>
                            <i class="home-product-item__star--gold fa-solid fa-star"></i>
                            <i class="home-product-item__star--gold fa-solid fa-star"></i>
                            <i class="home-product-item__star--gold fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">88 đã bán</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${product.brand}</span>
                        <span class="home-product-item__origin-name">Nhật Bản</span>
                    </div>
                    <div class="home-product-item__favourite">
                        <i class="fa-solid fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${product.saleOffPercent}</span>
                        <span class="home-product-item__sale-off-label">GIẢM</span>
                    </div>
                </a>
            </div>
        `
    });
    listProductsBlock.innerHTML = htmls.join('');
}