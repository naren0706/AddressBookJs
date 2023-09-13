const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

// Usage example:
const addressBook = new AddressBook();
//create contact
const contact1 = new Contact("John", "Doenk", "123 Main St", "New York", "america", "654321", "0987654321", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Elm St", "Los Angeles", "califonia", "543216", "1234567890", "jane@example.com");
const contact3 = new Contact("Naren", "Rsnk", "18/268 b ", "Avinashi", "kalakurichi", "123456", "6789054321", "naren@example.com");

//add to list
addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(contact2);
//display contact
addressBook.displayContacts();
//search contact
const foundContact = addressBook.findContactByName("Naren", "Rsnk");
if (foundContact) {
    // update contact
    const updatedInfo = {
        address: "789 Elm St",
        city: "Chicago",
        state: "IL",
        zip: "60601",
        phoneNumber: "555-555-9999",
        email: "updated.email@example.com",
    };
    const success = addressBook.editContact("Naren", "Rsnk", updatedInfo);
    if (success) {
        console.log("Contact updated successfully!");
    } else {
        console.log("Contact not found.");
    }
}
else {
    console.log("Contact not found.");
}
addressBook.displayContacts();
//Delete the contact
addressBook.deleteContact("Naren");
addressBook.displayContacts();

console.log(addressBook.ContactCount());

console.log(addressBook.findContactByCity("New York"));
console.log(addressBook.findContactByState("america"));