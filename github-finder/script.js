const searchForm = document.querySelector("#search-form");
const searchInput = searchForm.querySelector("#search-input");

function fetchProfile() {
  const username = searchInput.value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "Not Found") {
        document.getElementById("profile").innerHTML = "<p>User not found</p>";
      } else {
        const profile = `
                    <h2>${data.login}</h2>
                    <img src="${
                      data.avatar_url
                    }" alt="Avatar" style="width: 100px; height: 100px;">
                    <p>Name: ${data.name ? data.name : "N/A"}</p>
                    <p>Location: ${data.location ? data.location : "N/A"}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                    <p>Public Repositories: ${data.public_repos}</p>
                    <a href="${
                      data.html_url
                    }" target="_blank">View Profile on GitHub</a>
                `;
        document.getElementById("profile").innerHTML = profile;
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

searchInput.addEventListener("keydown", fetchProfile());
