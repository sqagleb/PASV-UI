import { expect } from 'chai';
import axios from 'axios';
import { student } from '../_data/user.data';

describe('LOGIN THROUGH API', () => {
  it('should login with student credentials', async () => {
    const response = await axios({
      method: 'post',
      url: 'https://server-stage.pasv.us/user/login',
      data: {
        email: student.email,
        password: student.password,
      },
    })
      .then(r => r)
      .catch(e => e);

    expect(response.status).eq(200);
    expect(response.data.message).eq('Auth success');
   });

  after ('should logout ', () => {

  });
});
