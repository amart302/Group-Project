const localBasketProducts = JSON.parse(localStorage.getItem("basketProducts"));

function createBasketCards() {
  if (localBasketProducts != null) {
    for (let i = 0; i < localBasketProducts.length; i++) {
      const productCard = document.createElement("div");
      productCard.className = "product__item";
      productCard.id = `productCard${i}`;
      productCard.innerHTML = `<span class="product__tag">${localBasketProducts[i].typeOfProduct}</span>
                            <div class="product__wrapper">
                            <img src="${localBasketProducts[i].imgSrc}" />
                            <p class="product__name">${localBasketProducts[i].productName}</p>

                            <div class="product__detail">
                              <p class="product__discount">$20.00</p>
                              <p class="product__price">${localBasketProducts[i].productPrice}</p>

                              <div class="quantityBlock">
                                <div class="minsBlock" id="mins${i}"><img class="minusImg" id="mins${i}" src="./images/minusImg.svg" /></div>
                                <span id="quantity${i}">1</span>
                                <div class="plusBlock" id="plus${i}"><img class="plusImg" id="plus${i}" src="./images/plusImg.svg" /></div>
                              </div>
                            </div>
                          </div>`;
      document.getElementById("conteiner").appendChild(productCard);
    }
  }
}

createBasketCards();

const conteiner = document.getElementById("conteiner");
conteiner.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("plusBlock") ||
    event.target.classList.contains("plusImg")
  ) {
    const plusId = event.target.id.substring(4, 5);
    const quantity = document.getElementById(`quantity${plusId}`);
    quantity.innerHTML++;
  } else if (
    event.target.classList.contains("minsBlock") ||
    event.target.classList.contains("minusImg")
  ) {
    const plusId = event.target.id.substring(4, 5);
    const quantity = document.getElementById(`quantity${plusId}`);
    if (quantity.innerHTML > 1) {
      quantity.innerHTML--;
    }
  }
});
