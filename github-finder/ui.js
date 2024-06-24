class UI {
    constructor() {
        this.profile = document.getElementById('search-results');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card-container">
            <div class="card-row">
                <div class="profile">
                    <img class="profile-img" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="view-profile-btn blue">View Profile</a>
                </div>
                <div class="data">
                    <span class="small-btn blue">Public Repos: ${user.public_repos}</span>
                    <span class="small-btn gray">Public Gists: ${user.public_gists}</span>
                    <span class="small-btn green">Followers: ${user.followers}</span>
                    <span class="small-btn aqua">Following: ${user.following}</span>
                    <br><br>
                    <ul class="data-list">
                        <li>Company: ${user.company}</li>
                        <li>Website/Blog: ${user.blog}</li>
                        <li>Location: ${user.location}</li>
                        <li>Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="title-bold">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="card-container">
                <div class="card-row">
                    <div class="repo-link">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="repo-btns">
                        <span class="small-btn blue">Stars: ${repo.stargazers_count}</span>
                        <span class="small-btn gray">Watchers: ${repo.watchers_count}</span>
                        <span class="small-btn green">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className) {
        // clear any remaining alerts
        this.clearAlert();

        // create div
        const div = document.createElement('div');

        // add classes
        div.className = className;

        // add text
        div.appendChild(document.createTextNode(message));

        // get parent
        const container = document.querySelector('.container');

        // get search box
        const search = document.querySelector('.search-input');

        // Insert alert
        container.insertBefore(div, search);
        
        // timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}