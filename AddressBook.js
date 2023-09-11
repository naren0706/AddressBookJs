// addressBook.js
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        this.contacts.forEach(contact => {
            console.log(`First Name: ${contact.firstName}`);
            console.log(`Last Name: ${contact.lastName}`);
            console.log(`Address: ${contact.address}`);
            console.log(`City: ${contact.city}`);
            console.log(`State: ${contact.state}`);
            console.log(`Zip Code: ${contact.zip}`);
            console.log(`Phone Number: ${contact.phoneNumber}`);
            console.log(`Email: ${contact.email}`);
            console.log("-------------"); // Separator between contacts
        });
    }
}

module.exports = AddressBook;
