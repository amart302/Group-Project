
/* ----------------- Load more products ----------------- */
document.addEventListener("DOMContentLoaded", function() {
  $(".content").slice(0, 4).show();
  $("#loadMore").on("click", function(e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No more products").addClass("noContent");
    }
  });
});

/* ---------------- Cart Quantity Js --------------- */
 // get the input element
//  const input = document.querySelector('.product-qty');

//  // get the add and minus buttons
//  const minusBtn = document.querySelector('.qty-count--minus');
//  const addBtn = document.querySelector('.qty-count--add');

//  // add event listeners to buttons
//  minusBtn.addEventListener('click', () => {
//    // decrease quantity value if it's not already at the minimum
//    if (input.value > input.min) {
//      input.value--;
//    }
//  });

//  addBtn.addEventListener('click', () => {
//    // increase quantity value if it's not already at the maximum
//    if (parseInt(input.value) < parseInt(input.max)) {
//      input.value++;
//    }
//  });

 /* ------------------- Tabs ------------------ */
 const tabLinks = document.querySelectorAll(".tab-link");
 const tabContents = document.querySelectorAll(".tab-content");
 
 tabLinks.forEach((tabLink) => {
   tabLink.addEventListener("click", () => {
     const tabId = tabLink.dataset.tab;
 
     tabLinks.forEach((link) => {
       if (link.dataset.tab !== tabId) {
         link.classList.remove("active");
       } else {
         link.classList.add("active");
       }
     });
 
     tabContents.forEach((content) => {
       if (content.dataset.tab !== tabId) {
         content.classList.remove("active");
       } else {
         content.classList.add("active");
       }
     });
   });
 });
 



 //Create product Cards//
 const products = [
  {
    typeOfProduct: "Vegetable",
    imgSrc: "./images/product-1.png",
    productName: "Broccoli",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Fruit",
    imgSrc: "./images/product-2.png",
    productName: "Fresh Banana",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Nuts",
    imgSrc: "./images/product-3.png",
    productName: "Pistachio",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Vegetable",
    imgSrc: "./images/product-4.png",
    productName: "Red Tomato",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Lentils",
    imgSrc: "./images/product-5.png",
    productName: "Mung Bean",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Nuts",
    imgSrc: "./images/product-6.png",
    productName: "Brown Hazelnut",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Dairy",
    imgSrc: "./images/product-7.png",
    productName: "Eggs",
    productPrice: "$13.00",
  },
  {
    typeOfProduct: "Bakery",
    imgSrc: "./images/product-8.png",
    productName: "Elaichi Rusk",
    productPrice: "$13.00",
  }
];

function createProductCards(){
  for(let i = 0; i < products.length; i++){
    const productCard = document.createElement("div");
    productCard.className = "product__item content";
    productCard.id = `productCard${i}`;
    productCard.innerHTML =`<span class="product__tag">${products[i].typeOfProduct}</span>
                            <div class="product__wrapper">
                            <img class="productImg" src="${products[i].imgSrc}" />
                            <p class="product__name">${products[i].productName}</p>

                            <div class="product__detail">
                              <p class="product__discount">$20.00</p>
                              <p class="product__price">${products[i].productPrice}</p>

                              <btn id="addBtn${i}" class="btn__cart xd__btn btn-secondary">add to cart</btn>
                            </div>
                          </div>`;
    document.getElementById("productList").appendChild(productCard);
  }
}
createProductCards();
let basketProducts;


const addBtns = document.querySelectorAll(".btn__cart");
addBtns.forEach(btn => {
  if(localStorage.getItem("basketProducts")){
    basketProducts = JSON.parse(localStorage.getItem("basketProducts"));
  }else{
    basketProducts = [];
  }
  btn.addEventListener("click", (event) => {
    const cardId = event.target.id.substring(6, 8);
    basketProducts.push(products[cardId]);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  })
})
/* -------------- Product-1 --------------
            <div class="product__item content">
              <span class="product__tag">Vegetable</span>
              <div class="product__wrapper">
                <img src="./images/product-1.png" alt="" />
                <p class="product__name">Broccoli</p>

                <div class="product__detail">
                  <p class="product__discount">$20.00</p>
                  <p class="product__price">$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>

                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>
            <!-- --------------- Product-2 --------------- -->

            <div class="product__item content">
              <span class="product__tag">Fruit</span>
              <div class="product__wrapper">
                <img src="images/product-2.png" alt="" />
                <p class="product__name">Fresh Banana</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>
            <!-- --------------- Product-3 --------------- -->
            <div class="product__item content">
              <span class="product__tag">Nuts</span>
              <div class="product__wrapper">
                <img src="images/product-3.png" alt="" />
                <p class="product__name">pistachio</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>

            <!-- --------------- Product-4 --------------- -->
            <div class="product__item content">
              <span class="product__tag">Vegetable</span>
              <div class="product__wrapper">
                <img src="images/product-4.png" alt="" />
                <p class="product__name">Red Tomato</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>

            <!-- --------------- Product-5 --------------- -->
            <div class="product__item content">
              <span class="product__tag">Lentils</span>
              <div class="product__wrapper">
                <img src="images/product-5.png" alt="" />
                <p class="product__name">Mung Bean</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>
            <!-- --------------- Product-6 --------------- -->
            <div class="product__item content">
              <span class="product__tag">Nuts</span>
              <div class="product__wrapper">
                <img src="images/product-6.png" alt="" />
                <p class="product__name">Brown Hazelnut</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>
            <!-- --------------- Product-7 --------------- -->
            <div class="product__item content">
              <span class="product__tag">Dairy</span>
              <div class="product__wrapper">
                <img src="images/product-7.png" alt="" />
                <p class="product__name">Eggs</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div>
            <!-- --------------- Product-8 --------------- -->
            <div class="product__item content">
              <span class="product__tag">Bakery</span>
              <div class="product__wrapper">
                <img src="images/product-8.png" alt="" />
                <p class="product__name">Elaichi Rusk</p>

                <div class="product__detail">
                  <p>$20.00</p>
                  <p>$13.00</p>

                  <div class="product__rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <a href="#" class="btn__cart xd__btn btn-secondary"
                    >add to cart</a
                  >
                </div>
              </div>
            </div> */