var client = (function() {

    var app = document.querySelector('.app');

    function getClientDetails() {

        startLoadAnimation();

        var url = new URL(window.location.href);
        var c = url.searchParams.get('id');

        // using https://github.com/typicode/json-server to mock data
        fetch('http://localhost:3000/001')
            .then(response => response.json())
            .then(json => {
                stopLoadAnimation();
                app.innerHTML = templateClientInfo(json[0]);
            })
            .catch(error => console.log(error));
    }

    function startLoadAnimation() {
        // mock the loading animation
        app.textContent = 'Loading...'
    }

    function stopLoadAnimation() {
        // mock the loading animation
        app.textContent = '';
    }

    function templateClientInfo(clientData) {
        return `<div class="client-info">
                    <p>id: <span>${clientData.id}</span></p>
                    <p>name: <span>${clientData.name}</span></p>
                    <p>address: <span>${clientData.address}</span></p>
                    <p>email: <span>${clientData.email}</span></p>
                    <p>phone: <span>${clientData.phone}</span></p>
                    <p>nif: <span>${clientData.nif}</span></p>
                </div>`;
    }

    function init() {
        getClientDetails();
    }

    return {
        init: init
    }
})();

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        client.init();
    }
}