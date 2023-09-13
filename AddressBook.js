// addressBook.js
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.toFindDuplicates() === true) { this.contacts.push(contact); }
        else {
            console.log("contact already present")
        }
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
    ContactCount() {
        const count = this.contacts.length;
        return count;
    }

    toFindDuplicates() {
        let length = this.contacts.length;
        let newArr = [], index = 0;
        for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
                if (this.contacts[i].firstName === this.contacts[j].firstName) {
                    newArr[index] = this.contacts[i];
                    index++;
                }
            }
        }
        return newArr[0] === undefined;
    }
    findContactByCity(city) {
        const foundContact = this.contacts.filter(contact => {
            return contact.city === city;
        });

        return foundContact;
    }
    findContactByState(state) {
        const foundContact = this.contacts.filter(contact => {
            return contact.state === state;
        });

        return foundContact;
    }
    findContactByStateNCity(state, city) {
        const foundContact = this.contacts.filter(contact => {
            return contact.state === state && contact.city === city;
        });

        return foundContact;
    }
    CountContactInStateNCity(state, city) {
        const foundContact = this.contacts.filter(contact => {
            return contact.state === state && contact.city === city;
        });

        return foundContact.length;
    }
    sortUsingFirstName() {
        this.contacts.sort((a, b) => {
            const name1 = a.firstName.toLowerCase();
            const name2 = b.firstName.toLowerCase();

            if (name1 < name2)
                return -1;
            if (name1 > name2)
                return 1;
            else
                return 0;

        })
    }
    sortUsingCity() {
        this.contacts.sort((a, b) => {
            const name1 = a.city.toLowerCase();
            const name2 = b.city.toLowerCase();

            if (name1 < name2)
                return -1;
            if (name1 > name2)
                return 1;
            else
                return 0;

        })
    }
    sortUsingState() {
        this.contacts.sort((a, b) => {
            const name1 = a.state.toLowerCase();
            const name2 = b.state.toLowerCase();

            if (name1 < name2)
                return -1;
            if (name1 > name2)
                return 1;
            else
                return 0;

        })
    }
    sortUsingZip() {
        this.contacts.sort((a, b) => {
            const name1 = a.zip;
            const name2 = b.zip;

            if (name1 < name2)
                return -1;
            if (name1 > name2)
                return 1;
            else
                return 0;

        })
    }
}

module.exports = AddressBook;
