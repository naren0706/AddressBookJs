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
            console.log("-------------");
        });
    }

    findContactByName(firstName, lastName) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact.firstName === firstName && contact.lastName === lastName;
        });

        if (foundContactIndex !== -1) {
            return this.contacts[foundContactIndex];
        } else {
            return null;
        }
    }

    editContact(firstName, lastName, updatedContactInfo) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact.firstName === firstName && contact.lastName === lastName;
        });

        if (foundContactIndex !== -1) {
            this.contacts[foundContactIndex] = { ...this.contacts[foundContactIndex], ...updatedContactInfo };
            return true;
        } else {
            return false;
        }
    }

    deleteContact(name) {
        let a = 0;
        this.contacts.forEach(element => {
            if (name === element.firstName) {
                console.log("--------->Contact Deleted Successfully");
                this.contacts.splice(a, 1);
            }
            a++;
        }
        );
    }
    ContactCount()
    {
        const count = this.contacts.length;
        return count;
    }
}

module.exports = AddressBook;
