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
console.log(1, 2, 3);
