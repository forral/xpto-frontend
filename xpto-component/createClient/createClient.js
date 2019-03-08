var createClientComponent = (function() {

    var saveButton = document.querySelector('#save');
    var peronalDataInputs = document.querySelectorAll('.personal-information input');
    var districtsCombo = document.querySelector('#districts');
    var countiesCombo = document.querySelector('#counties');
    var addressIpunts = document.querySelectorAll('.street-details input');
    var addressSelects = document.querySelectorAll('.street-details select');
    var zipCodeInputs = document.querySelectorAll('.zip-code input');
    var form = document.querySelector('#createClient');

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
        var url = 'http://xptoproject.ddns.net:8080/XPTO-Project/customer/';
        var data = getPersonalInfoValues([...peronalDataInputs]);
        var addressData = getAddressValues([...addressIpunts], [...addressSelects], [...zipCodeInputs]);
        data.address = addressData;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            if (json && json.success) {
                // TODO: fire the view mode.
                console.log('Ready to redirect to a especific cliente page with the id: ' + json.id);
            }
        })
        .catch(error => console.log(error)); // TODO: fire translate error message.
        
        console.log(JSON.stringify(data));
    }

    function getPersonalInfoValues(inputs) {
        return inputs.reduce(function(acc, current) {
            acc[current.name] = current.value;
            return acc;
        }, {});
    }

    // refactor this function - maybe use join to deal with just one array
    function getAddressValues(addressInputValues, addressSelectValues, zipCodeInputValues) {
        
        var address = {};

        addressInputValues.reduce(function(acc, current) {
            acc[current.name] = current.value;
            return acc;
        }, address);

        addressSelectValues.reduce(function(acc, current) {
            acc[current.name] = current.value;
            return acc;
        }, address);

        // 1. deal with getting the zip code here
        // 2. join the values

        var zipCodeWithPrefix = zipCodeInputValues.reduce(function(acc, current) {
            acc.push(current.value);
            return acc;
        }, []).join('-');

        // 3. add them to the address object

        address.zipCode = zipCodeWithPrefix;

        return address;
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
        // 3. validate fields
        // 4. htttp request
    }

    return {
        init: init
    }

})();

document.onreadystatechange = function() {
    if (document.readyState === 'interactive') {
        createClientComponent.init();
    }
}