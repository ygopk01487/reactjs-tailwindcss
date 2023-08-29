export const openCarts = () => {
  const cart = document.querySelector("#carts");
  const modal = document.querySelector(".modal");
  const titleCart = document.querySelector("#title-cart");
  const sorts = document.querySelector("#sort");
  const model = document.querySelector("#model-sort");
  const d = document.querySelector("#project");

  const close = document.querySelector("#Nvabar");
  close.classList.remove("close");

  cart.classList.toggle("open");
  modal.classList.toggle("openM");
  sorts.classList.remove("open");
  model.classList.remove("open");

  //
  d.classList.toggle("true");

  //scroll cart
  // cart.addEventListener("scroll", () => {
  //   if (cart.scrollTop > 1) {
  //     titleCart.classList.add("fix");
  //   } else {
  //     titleCart.classList.remove("fix");
  //   }
  // });
};

//window open cart
window.onclick = (e) => {
  const modal = document.querySelector(".modal");
  const cart = document.querySelector("#carts");
  const d = document.querySelector("#project");
  if (e.target === modal) {
    cart.classList.remove("open");
    d.classList.remove("true");
    modal.classList.remove("openM");
  }
};
