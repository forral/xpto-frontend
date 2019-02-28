var createClientComponent = (function() {

    var saveButton = document.querySelector('#save');
    var inputs = document.querySelectorAll('#createClient input');
    var districtsCombo = document.querySelector('#districts');
    var countiesCombo = document.querySelector('#counties');

    function populateDistrictsCombo(districts) {
        districts.forEach(function(district) {
            var opt = createOptionElement(district.district, district.district);
            districtsCombo.appendChild(opt);
        });
    }

    function populateContiesCombo(currentDistrict) {
        var districtObj = findDistricObjectByDistricName(currentDistrict);
        var currentCounties = districtObj.counties;

        currentCounties.forEach(function(county) {
            var opt = createOptionElement(county, county);
            countiesCombo.appendChild(opt);            
        });
    }

    function resetComboOptionsToDefault(comboElement) {
        var opt = createOptionElement('select', 'Select');
        comboElement.innerHTML = '';
        comboElement.appendChild(opt);
    }

    function createOptionElement(valueAttribute, innerHtml) {
        var opt = document.createElement('option');
        opt.value = valueAttribute;
        opt.innerHTML = innerHtml;
        return opt;
    }

    function findDistricObjectByDistricName(currentDistrict) {
        return districts.find(function(districtObj) {
            return districtObj.district === currentDistrict;
        });
    }

    // TODO: modulate this function
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

        districtsCombo.addEventListener('change', function(event) {
            var districtSelected = event.target.value;

            resetComboOptionsToDefault(countiesCombo);
            
            if (districtSelected === 'select') {
                countiesCombo.disabled = true;
                return;
            }

            countiesCombo.disabled = false;
            populateContiesCombo(districtSelected);
        });
    }

    function init() {
        populateDistrictsCombo(districts);
        registerListeners();
        // 3. htttp request
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