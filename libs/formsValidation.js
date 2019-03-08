// Based on this post by Chris Ferdinandi: 
// https://css-tricks.com/form-validation-part-1-constraint-validation-html/

// Collect all the forms in the page with the class .validate
var forms = document.querySelectorAll('.validate');
forms = [...forms];

// Add a novalidate to the forms
forms.forEach(function(form) {
    form.setAttribute('novalidate', true);
});

function hasError(field) {
    
    // TODO: refactor this condition.
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') {
        return;
    }

    // Get validity
    var validity = field.validity;

    // If valid return null
    if (validity.valid) {
        return;
    }

    // If field is required and empty
    if (validity.valueMissing) {
        return 'Please fill out this field.';
    }

    // If not the right type
    if (validity.typeMismatch) {

        // Email
        if (field.type === 'email') {
            return 'Please enter an email address.';
        }

        // URL
        if (field.type === 'url') {
            return 'Please enter a URL.';
        }
    }

    // If too short
    if (validity.tooShort) {
        return `Please lengthen this text to ${field.getAttribute('minLengt')} characters or more. You are currently using ${field.value.length} characters.`;
    }

    // If too long
    if (validity.tooLong) {
        return `Please short this text to no more than ${field.getAttribute('maxLength')} characters. You are currently using ${field.value.length} characters.`;
    }

    // If a number input isn't a number
    if (validity.badInput) {
        return 'Please enter a number';
    }

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) {
        return 'Please select a valid value.';
    }

    // If a number field is over the max
    if (validity.rangeOverFlow) {
        return `Please select a value that is no more than ${field.getAttribute('max')}.`;
    }

    // If a number field is below the min
    if (validity.rangeUnderFlow) {
        return `Please select a value that is no less than ${field.getAttribute('min')}.`;
    }

    // If pattern doesn't match
    if (validity.patternMismatch) {

        // If pattern info is included, return custom error
        if (field.hasAttribute('title')) {
            return field.getAttribute('title');
        }

        // Otherwise, generic error
        return 'Please match the request format.';
    }

    // If all else fails, return a generic catchall error
    return 'The value you entered for this field is invalid.';
}

function showError(field, error) {
    console.log(field, error);
}

// Listen to all blur events
document.addEventListener('blur', function(event) {

    // Only run if the field is in a form.
    // Only run if the field is in a form with the class .validate.
    if (!event.target.form || !event.target.form.classList.contains('validate')) {
        return;
    }

    // Validate the field
    var error = hasError(event.target);

    // If there's an error, show it
    if (error) {
        showError(event.target, error);
    }

}, true);