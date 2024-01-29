function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    

    // Validate inputs
    if (!isValidName(name) || !isValidEmail(email) || !isValidPhoneNumber(phone) || !gender ) {
        alert('Please fill in all fields with valid data.');
        return;
    }

    // Create a new table row for the user data
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + name + '</td><td>' + email + '</td><td>' + phone + '</td><td>' + gender.value + '</td>';

    // Append the new row to the table body
    document.getElementById('userDataBody').appendChild(newRow);

    // Clear the form fields and error messages
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
}

function isValidName(name) {
    if (!name) {
        document.getElementById('nameError').innerText = 'Name cannot be empty.';
        return false;
    }

    // Check if the name contains only letters
    var nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').innerText = 'Enter a valid name.';
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address.';
        return false;
    }
    return true;
}

function isValidPhoneNumber(phone) {
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number.';
        return false;
    }
    return true;
}