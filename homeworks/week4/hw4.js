/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
const request = require('request');

const clientID = 'h7nxovxkxs85932gvclh7g2ez8maxp';
const API_URL = 'https://api.twitch.tv/kraken';

request({
  method: 'GET',
  url: `${API_URL}/games/top`,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
}, (error, response, body) => {
  if (error) {
    return console.log('搜尋失敗', error);
  }
  const data = JSON.parse(body);
  const games = data.top;
  console.log(games);
  for (const game of games) {
    console.log(`${game.viewers} ${game.game.name}`);
  }
});
