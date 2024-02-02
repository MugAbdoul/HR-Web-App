document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const login = document.getElementById('loginForm');

    login.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById("username");
        const password = document.getElementById("password");

        if (username.value.trim() === '' || password.value.trim() === '') {
            alert(`Fill all inputs`);
            return false;
        }

        return true;
        
    });

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        isValid &= validateField('firstName');
        isValid &= validateField('lastName');
        isValid &= validateEmail('email');
        isValid &= validatePhoneNumber('phoneNumber');
        isValid &= validateDate('dob');
        isValid &= validateField('address');
        isValid &= validateEmployeeID('employeeID');
        isValid &= validateField('jobTitle');
        isValid &= validateField('department');
        isValid &= validateSalary('salary');

        return isValid;
    }

    function validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const value = field.value.trim();

        if (value === '') {
            alert(`Please enter ${fieldName}`);
            return false;
        }

        return true;
    }

    function validateEmail(emailField) {
        const email = document.getElementById(emailField).value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        return true;
    }

    function validatePhoneNumber(phoneNumberField) {
        const phoneNumber = document.getElementById(phoneNumberField).value.trim();

        if (!/^\d{10}$/.test(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        return true;
    }

    function validateDate(dateField) {
        const currentDate = new Date();
        const selectedDate = new Date(document.getElementById(dateField).value);

        if (selectedDate > currentDate) {
            alert('Date of Birth cannot be in the future');
            return false;
        }

        return true;
    }

    function validateEmployeeID(idField) {
        const employeeID = document.getElementById(idField).value.trim();

        if (!/^\d{16}$/.test(employeeID)) {
            alert('Employee ID must be a 16-digit number');
            return false;
        }

        return true;
    }

    function validateSalary(salaryField) {
        const salary = parseFloat(document.getElementById(salaryField).value);

        if (isNaN(salary) || salary <= 0) {
            alert('Salary must be a valid number greater than 0');
            return false;
        }

        return true;
    }
});