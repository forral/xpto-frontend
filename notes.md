# Notes

## IDEAS:
- send SMS
- send EMAIL
- Customer Interactions (guardar informação de toda interacção com cliente. expl: correios enviados, sms enviados, etc...)
- criar uma refdata para as labels

https://www.ctt.pt/contentAsset/raw-data/09ae68cd-de81-40f1-9dd6-28728b0bbefd/ficheiro/f9b2b545-2002-44a6-9282-d04d6dcab63a/export/man_util_xml_v16.pdf

https://www.portugal-a-programar.pt/forums/topic/69470-web-service-moradas-e-codigos-postais/

https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
https://www.uxbooth.com/articles/the-new-rules-of-form-design/


## TODO

- [x] add the option distric and counties elements functionality
    1. dinamic populate the district options
    2. event listener to CHANGE in the distric
    3. dinamic populate the counties options
    - procurar como colcoar um select inactivo
    - como limpar todos os options.
- [x] create an address object in the createClient page
- [x] validação de campos por tipo
- [x] mudar os nomes do object para fazer match com o BE

---

- [x] Change the input field names and test the connection to Backend with the createCustomer endpoint

- [ ] validação de campos obrigatorios.
    - https://css-tricks.com/form-validation-part-1-constraint-validation-html/
    - https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
    - https://medium.com/the-ui-files/form-validation-with-javascript-4fcf4dd32846

    - [ ] Refactor formsValidation lib based on this article:
        - https://blog.wax-o.com/2015/05/an-alternative-to-if-else-and-switch-in-javascript/
    -[ ] Develop a way to setup the lib with custom messages.

- [ ] Util for take values from forms and build a json object. 
    - https://code.lengstorf.com/get-form-values-as-json/