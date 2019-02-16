const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const accountDetails = document.querySelector('.account-details');
const app = document.querySelector('.app');

// NAVBAR SETUP
const setupUI = (user) => {
    
    if (user) {
        const accountDetail = `<div>Logged in as ${user.email}</div>`;
        accountDetails.innerHTML = accountDetail;

        // NAV BAR
        // console.log(loggedInLinks);
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};

// DISPLAY CONTENT
const setupGuide = (data) => {
    if (data.length) {

        let html = '';
        let exist_date = {};

        data.forEach(doc => {
            const data = doc.data(); 
            let data_div = ``;
            current_date = data.date.mm + data.date.dd + data.date.yyyy;
            if (current_date in exist_date) {
                data_div = `
                <div class="main-data">
                    <p>${data.category}</p>
                    <h3 class="collapsible-header">${data.title}</h3>
                    <li class="collapsible-body">${data.description}</li>
                </div>
                `
            } else {
                exist_date[current_date] = true;
                data_div = `
                <h1 class="main-date-header">${data.date.mm} ${data.date.dd}, ${data.date.yyyy}</h1>
                <div class="main-data">
                    <p>${data.category}</p>
                    <h3 class="collapsible-header">${data.title}</h3>
                    <li class="collapsible-body">${data.description}</li>
                </div>
                `;
            }

            html += data_div;
        });

        app.innerHTML = html;
    } else {
        app.innerHTML = '<h5>Log in to view your data</h5>';
    }
}