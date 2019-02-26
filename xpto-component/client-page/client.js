var client = (function() {

    function getClientDetails() {
        var clientIdElement = document.querySelector('#client-id');
        var url = new URL(window.location.href);
        var c = url.searchParams.get('id');
        clientIdElement.textContent = c;

        // using https://github.com/typicode/json-server to mock data
        fetch('http://localhost:3000/001')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
    }

    function init() {
        getClientDetails();
    }

    return {
        init: init
    }
})();

client.init();