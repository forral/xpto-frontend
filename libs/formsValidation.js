// Based on this post by Chris Ferdinandi: 
// https://css-tricks.com/form-validation-part-1-constraint-validation-html/

/*
We can use the .error and .error-message classes to style our form field and error message.

.error {
  border-color: red;
}

.error-message {
  color: red;
  font-style: italic;
}

*/


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
    
    // Add error class to field
    field.classList.add('error');

    // TODO: refactor this block of code - if possible into functions DRY.
    // If the field is a radio button and part of a group,
    // error all and get the last item in the group.
    if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
            for (var i = 0; i < group.length; i++) {
                // Only check fields in current form
                if (group[i].form !== field.form) {
                    continue;
                }
                group[i].classList.add('error');
            }
            field = group[group.length - 1];
        }
    }

    // Get field id or name
    var id = field.id || field.name;
    if (!id) {
        return;
    }

    // Check if error message field already exists
    // If not, create on
    var message = field.form.querySelectorAll('.error-message#error-for-' + id);
    if (!message) {
        // TODO: create an method create element:
        message = document.createElement('div');
        message.className = 'error-message';
        message.id = 'error-for-' + id;
    }

    // If the field is a radio button or checkbox,
    // insert error after the label
    var label;
    if (field.type === 'radio' || field.type === 'checkbox') {
        label = field.form.querySelector('label[for="' + id + '"]') || field.parentNode;
        if (label) {
            label.parentNode.insertBefore(message, label.nextSibling);
        }
    }

    // Otherwise, insert it after the field
    if (!label) {
        field.parentNode.insertBefore(message, field.nextSibling);
    }

    // Add ARIA role to the field
    // Resource: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
    field.setAttribute('aria-describedby', 'error-for-' + id);
        
    // Update error message
    message.innerHTML = error;

    // Show error message
    message.style.display = 'block';
    message.style.visibility = 'visible';
}

// Remove error message
function removeError(field) {

    // Remove .error class to field
    field.classList.remove('error');

    // TODO: refactor this block of code - if possible into functions DRY.
    // If the field is a radio button and part of a group,
    // remove error from all and get te last item in the group
    if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
            for (var i = 0; i < group.length; i++) {
                //Only check fields in current form
                if (group[i].form !== field.form) {
                    continue;
                }
                group[i].classList.remove('error');
            }
            field = group[group.length - 1];
        }
    }

    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // Get field id or name
    var id = field.id || field.name;
    if (!id) {
        return;
    }

    // Check if an error message is in the DOM
    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) {
        return;
    }

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden'
}

// Check all fields on submit
document.addEventListener('submit', function(event) {

    // Only run on forms flagged for validation
    if (!event.target.classList.contains('validate')) {
        return;
    }

    // Get all of the form elements
    var field = event.target.elements;

    // Validate each field
    // Store the first field with an error to a variable so we can
    // bring it into focus later.
    var error, hasErrors;
    for (var i = 0; i < fields.length; i++) {
        error = hasError(field[i]);
        if (error) {
            showError(field[i], error);
            if (!hasErrors) {
                hasErrors = field[i];
            }
        }
    }

    // If there are errors, don't submit form and focus on first
    // element with error.
    if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
    }

    // Otherwise, let the form submit normally
    // TODO: You cold also bolt in an Ajax form submit process here

}, false);

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
        return;
    }

    // Otherwise, remove any existing error message
    removeError(event.target);

}, true);