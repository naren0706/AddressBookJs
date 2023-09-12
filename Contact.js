class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.validateName(firstName, 'First Name');
        this.validateName(lastName, 'Last Name');
        this.validateLength(address, 'Address', 4);
        this.validateLength(city, 'City', 4);
        this.validateLength(state, 'State', 4);
        this.validatePattern(zip, 'Zip Code', /^\d{6}$/);
        this.validatePattern(phoneNumber, 'Phone Number', /^\d{10}$/);
        this.validatePattern(email, 'Email', /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    validateName(name, fieldName) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
            throw new Error(`${fieldName} should start with a capital letter and have at least 3 characters.`);
        }
    }
    validateLength(value, fieldName, minLength) {
        if (value.length < minLength) {
            throw new Error(`${fieldName} should have at least ${minLength} characters.`);
        }
    }
    validatePattern(value, fieldName, pattern) {
        if (!pattern.test(value)) {
            throw new Error(`Invalid ${fieldName}.`);
        }
    }
}

module.exports = Contact;
