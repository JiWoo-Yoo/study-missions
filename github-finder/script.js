const searchForm = document.querySelector("#search-form");
const searchInput = searchForm.querySelector("#search-input");

async function logJSONData(e) {
  const username = searchInput.value;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const jsonData = await response.json();
  console.log(jsonData);
}

searchInput.addEventListener("keyup", logJSONData());
