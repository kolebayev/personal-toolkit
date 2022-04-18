module.exports = {
  run: function () {
    const csvWriter = require('csv-writer');
    const casual = require('casual');

    const qty = 1000000;
    const fileName = 'data';

    const generateUserItem = () => {
      return {
        firstName: casual.first_name,
        lastName: casual.last_name,
        city: casual.city,
        phoneNumber: casual.phone,
        email: casual.email,
        gender: casual.boolean ? 'male' : 'female',
      };
    };

    const countries = [];

    for (let i = 0; i < qty - 1; i++) {
      let item = generateUserItem();
      countries.push(item);
    }

    const writer = csvWriter.createObjectCsvWriter({
      path: `./csvGenerator/${fileName}.csv`,
      header: [
        { id: 'firstName', title: 'First Name' },
        { id: 'lastName', title: 'Last Name' },
        { id: 'city', title: 'City' },
        { id: 'phoneNumber', title: 'phoneNumber' },
        { id: 'email', title: 'email' },
        { id: 'gender', title: 'gender' },
      ],
    });

    writer.writeRecords(countries).then(() => {
      console.log('Done!');
    });
  },
};
