const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

// Usage example:
const addressBook = new AddressBook();

const contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "555-555-5555", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Elm St", "Los Angeles", "CA", "90001", "555-555-1234", "jane@example.com");
const contact3 = new Contact("Naren", "Rs", "123", "Sa", "CAasd", "123456", "123213123213", "Naren@example.com");


addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.displayContacts();
