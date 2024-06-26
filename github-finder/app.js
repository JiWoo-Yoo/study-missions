// init github
const github = new Github;

// init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('search-input');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText != '') {
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert');
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
});