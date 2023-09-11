const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

// Usage example:
const addressBook = new AddressBook();

const contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "555-555-5555", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Elm St", "Los Angeles", "CA", "90001", "555-555-1234", "jane@example.com");


addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.displayContacts();
