const HelperQA = require ("../../HelperQa.page.js")

let timestamp = Date.now()
let email = `lev_fetman@mailsac.com`

const request = require('request');

const options = {
  method: 'POST',
  url: 'https://mailsac.com/api/validations/addresses',
  headers: {'content-type': 'application/json', 'Mailsac-Key': 'k_2iCm8cZWCvzreIs11RsgYZ2ISR4QXJLjF'},
  body: {emails: ['anything-123@mailsac.com', 'anything-456@example.com']},
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

describe('api request from wdio ', () => {

    it('check Email', async () => {
    const message = await HelperQA.checkMesages(email)
    await HelperQA.checkMesages(email)
    console.log(await message);
    });

});
