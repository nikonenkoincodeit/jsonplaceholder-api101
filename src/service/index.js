const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function getData(path) {
  return fetch(`${BASE_URL}${path}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText || response.status);
  });
}
