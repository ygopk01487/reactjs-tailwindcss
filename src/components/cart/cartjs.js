export const openCarts = () => {
  const cart = document.querySelector("#carts");
  const modal = document.querySelector(".modal");
  const titleCart = document.querySelector("#title-cart");
  const sorts = document.querySelector("#sort");
  const model = document.querySelector("#model-sort");

  const close = document.querySelector("#Nvabar");
  close.classList.remove("close");

  cart.classList.toggle("open");
  modal.classList.toggle("openM");
  sorts.classList.remove("open");
  model.classList.remove("open");

  //scroll cart
  cart.addEventListener("scroll", () => {
    if (cart.scrollTop > 1) {
      titleCart.classList.add("fix");
    } else {
      titleCart.classList.remove("fix");
    }
  });
};

//window open cart
window.onclick = (e) => {
  const modal = document.querySelector(".modal");
  const cart = document.querySelector("#carts");
  if (e.target === modal) {
    cart.classList.remove("open");
    modal.classList.remove("openM");
  }
};
