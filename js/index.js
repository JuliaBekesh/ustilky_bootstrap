document.querySelector('.login-form input[type=submit]').addEventListener('click',
    submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
            method: 'POST',
            body: new FormData(document.querySelector('.login-form'))
        })
        .then(response => response.text())
        .then(html => document.querySelector('.server-response')
            .innerHTML = html);
}

const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);

