var clientList = document.querySelectorAll('#client-list li');
clientList = [...clientList];

clientList.forEach(function(client) {
    client.addEventListener('click', function(client) {
        window.location.replace('file:///Users/luisforra/workspace/xpto-frontend/xpto-component/client-page/client.html?id=' + client.target.id);
    });
});