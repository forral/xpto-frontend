var clientList = (function() {

    function registerListeners() {
        var clientList = document.querySelectorAll('#client-list li');
        clientList = [...clientList];

        clientList.forEach(function (client) {
            client.addEventListener('click', function (client) {
                window.location.replace('file:///Users/luisforra/workspace/xpto-frontend/xpto-component/client-page/client.html?id=' + client.target.id);
            });
        });
    }

    function templateClientList(clientList) {
        return `<ul id="client-list">
                    <li id="${clientList.id}">${clientList.name}</li>
                    <li id="${clientList.id}">${clientList.name}</li>
                    <li id="${clientList.id}">${clientList.name}</li>
                    <li id="${clientList.id}">${clientList.name}</li>
                    <li id="${clientList.id}">${clientList.name}</li>
                    <li id="${clientList.id}">${clientList.name}</li>
                </ul>`;
    }

    function init() {
        // 1. http request
        // 2. template
        registerListeners();
    }

    return {
        init: init
    }
})();

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        clientList.init();
    }
}