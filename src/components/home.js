import { getData } from "../service";
import { createUsersTable } from "../markup";
import { tbodyEl } from "../refs";
import { addMarkup } from "../helpers";
function init() {
  getData("users")
    .then((data) => {
      const markup = createUsersTable(data);
      addMarkup(tbodyEl, markup);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
init();
function onClick(e) {
  const trEl = e.target.closest("[data-userid]");

  location.href = "./user.html?id=" + trEl.dataset.userid;
  // console.log(trEl.dataset.userid);
}
tbodyEl.addEventListener("click", onClick);
