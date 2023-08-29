export const openUsers = () => {
  const openUser = document.querySelector("#userProfile");
  openUser.classList.toggle("open");
};

//close nvabar
export const closeNvabar = () => {
  const close = document.querySelector("#Nvabar");
  close.classList.toggle("close");
};

//open search mobile
export const openSearchMobile = () => {
  const open = document.querySelector("#searchMobile");
  open.classList.toggle("open");
};
