var createClientComponent = (function() {

    var saveButton = document.querySelector('#save');
    var inputs = document.querySelectorAll('#createClient input');

    function createClient() {
        var url = 'https://jsonplaceholder.typicode.com/posts';
        var data = getAllInputValues([...inputs]);

        // POST MOCK DATA WITH JSONPLACEHOLDER: https://jsonplaceholder.typicode.com/
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json)) // TODO: fire the view mode.
        .catch(error => console.log(error)); // TODO: fire translate error message.
    }

    function getAllInputValues(inputs) {
        return inputs.reduce(function(acc, current) {
            acc[current.name] = current.value;
            return acc;
        }, {});
    }

    function registerListeners() {
        saveButton.addEventListener('click', function(event) {
            event.preventDefault();
            createClient();
        });
    }

    function init() {
        registerListeners();
    }

    return {
        init: init
    }

})();

document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
        createClientComponent.init();
    }
}