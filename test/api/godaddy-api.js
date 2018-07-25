//
//const response = await axios.get('/user?ID=12345');

/**
 * @name GoDaddy domain search
 * @desc Searches GoDaddy.com for a domain and checks if the results show up
 */

const assert = require('assert')
const axios = require('axios')

describe('[ API ]', () => {

  before(async () => {

  })

  describe('GoDaddy API', () => {
    it('make an API call', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      assert.ok(response);
      assert.equal(response.status, 200);
      //console.log(response.data[0]);
    })


  })

  after(async () => {

  })
})