import axios from 'axios';
import { expect } from "chai";
import { newUser } from '../_data/userRegistration.data';

it('should verify from database user by email', async () => {
  const response = await axios({
    method: 'get',
    url: `https://server-stage.pasv.us/user/email/${newUser.email}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN,
    },
  })
    .then(r => r)
    .catch(e => e);
  expect(response.status).eq(200);
  expect(response.data.success).true;
  expect(response.data.payload.name).eq(`${newUser.firstName} ${newUser.lastName}`);
});