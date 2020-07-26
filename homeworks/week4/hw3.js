/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
const request = require('request');

const args = process.argv;
const API_URL = 'https://restcountries.eu/rest/v2';
// console.log(args)
const name = args[2];

if (!name) {
  console.log('請輸入國家名稱');
}

request(`${API_URL}/name/${name}`,
  (error, response, body) => {
    if (error) {
      return console.log('搜尋失敗', error);
    }
    const data = JSON.parse(body);
    if (data.statusCode === 404) {
      return console.log('找不到國家資訊');
    }
    for (let i = 0; i < data.length; i++) {
      console.log('============');
      console.log(`國家：${data[i].name}`);
      console.log(`首都：${data[i].capital}`);
      console.log(`貨幣：${data[i].currencies[0].code}`);
      console.log(`國碼：${data[i].callingCodes[0]}`);
    }
  });
