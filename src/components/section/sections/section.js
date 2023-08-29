export const sort = () => {
  const sorts = document.querySelector("#sort");
  const model = document.querySelector("#model-sort");
  model.classList.toggle("open");
  sorts.classList.toggle("open");
};

window.addEventListener("scroll", () => {
  const a = document.querySelector("#products");
  const b = document.querySelector("#b-scrolls");
  const c = document.querySelector("#c-scrolls");
  const id = document.querySelector("#menu-scroll");
  const bTop = document.querySelector("#b-top");

  // console.log(window.innerHeight)
  // console.log(window.scrollY);

  if (window.scrollY > 10) {
    a.classList.add("scroll");
    bTop.classList.add("active");
  } else {
    a.classList.remove("scroll");
    bTop.classList.remove("active");
  }

  if (window.scrollY > 1400) {
    b.classList.add("scroll");
    c.classList.add("scroll");
  } else {
    b.classList.remove("scroll");
    c.classList.remove("scroll");
  }

  if (window.scrollY < 30) {
    id.classList.add("actives");
    id.classList.remove("active");
  } else {
    id.classList.remove("actives");
    id.classList.add("active");
    searchMobile.classList.add("true");
  }

  if (window.scrollY < 10) {
    id.classList.remove("actives");
  }
});
