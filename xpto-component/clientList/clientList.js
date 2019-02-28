var clientList = (function() {

    var mockdataClientList = [
        {"id": "001", "name": "Pablo Aimar", "address": "Rua dos Pinheiros, Aroeira", "email": "aimar@omaior.com", "phone": "+351928765643", "NIF": "982982722"},
        {"id": "002", "name": "Rui Costa", "address": "Parque dos Principes, Telheiras", "email": "rui_costa@omaior.com", "phone": "+351965434554", "NIF": "552982711"},
        {"id": "003", "name": "Nico Gaitan", "address": "Rua do Ouro, Lisboa", "email": "gaitan@omaior.com", "phone": "+351938665643", "NIF": "412672722"},
        {"id": "004", "name": "Angel Di Maria", "address": "Av. D. João I, Almada", "email": "di_maria@omaior.com", "phone": "+351928711633", "NIF": "002982722"},
        {"id": "005", "name": "Ariel Ortega", "address": "Rua Capitão Leitão, Almada", "email": "burrito@omaior.com", "phone": "+351914465643", "NIF": "982982722"}
    ]
    
    var CONST = {
        LI_IDENTIFIER: 'client-list-item',
        CLIENT_PAGE_URL: '../client-page/client.html?id='
    }

    var app = document.querySelector('#app');

    function registerListeners() {
        var clientList = document.querySelector('#client-list');

        clientList.addEventListener('click', function(event) {
            if (event.target.dataset.name === CONST.LI_IDENTIFIER) {
                window.location.replace(CONST.CLIENT_PAGE_URL + event.target.id);
            }
        });
    }

    function templateClientList(clientList) {
        return `<ul id="client-list">
                    ${clientList.map(client => `<li id="${client.id}" data-name="${CONST.LI_IDENTIFIER}">${client.name}</li>`).join('')}
                </ul>`;
    }

    function init() {
        // 1. http request
        // 2. template [DONE]
        // 3. listeners [DONE]
        app.innerHTML = templateClientList(mockdataClientList);
        registerListeners();
    }

    return {
        init: init
    }
})();

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        clientList.init();
    }
}