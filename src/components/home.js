import { getData } from "../service";
function init() {
  getData("users")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
init();
console.log(1, 2, 3);
