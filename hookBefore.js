const axios = require('axios');

module.exports = async function(capabilities, specs) {
  const response = await axios({
    method: 'post',
    url: 'https://server-stage.pasv.us/user/login',
    data: {
      email: 'admin@pasv.com',
      password: 'admin',
    },
  })
    .then(res => res)
    .catch(err => {
      console.log('ERROR', err);
    });

  console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
  console.log(response.data.token);
  console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

  process.env.ADMIN_TOKEN = response.data.token;
}
