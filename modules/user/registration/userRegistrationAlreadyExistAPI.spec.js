import { userRegisteredData } from '../_data/userRegistration.data';
import { expect } from 'chai';
import axios from 'axios';

describe('USER REGISTRATION WITH EXISTING CREDENTIALS THROUGH API', () => {

  it('should verify from DB user by email', async () => {
    const response = await axios({
      method: 'post',
      url: 'https://server-stage.pasv.us/user',
      headers: {
        Authorization: process.env.ADMIN_TOKEN,
      },
      data: {
        email: userRegisteredData.email,
        password: userRegisteredData.password,
        firstName: userRegisteredData.firstName,
        lastName: userRegisteredData.lastName,
        phone: userRegisteredData.phone,
        about: userRegisteredData.about,
        goals: userRegisteredData.goals,
        englishLevel: userRegisteredData.englishLevel,
      },
    })
      .then(r => r)
      .catch(e => e);
    console.log('------------------------------------------------------------');
    console.log(response.data);
    expect(response.status).eq(201);
    //expect(response.data.payload.name).eq(`${newUserData.firstName} ${newUserData.lastName}`);
  });
});
