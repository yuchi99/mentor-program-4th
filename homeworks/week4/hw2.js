/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
const request = require('request');

const args = process.argv;
const API_URL = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const parameter = args[3];
// console.log(args)
if (action === 'list') {
  bookList();
} else if (action === 'read') {
  bookRead(parameter);
} else if (action === 'delete') {
  bookDelete(parameter);
} else if (action === 'create') {
  bookCreate(parameter);
} else if (action === 'update') {
  bookUpdate(parameter, args[4]);
}

function bookList() {
  request(`${API_URL}/books`,
    (error, response, body) => {
      if (error) {
        return console.error('error:', error);
      }
      const json = JSON.parse(body);
      for (let i = 0; i < 20; i++) {
        console.log(json[i].id + json[i].name);
      }
    });
}

function bookRead(id) {
  request(`${API_URL}/books/${id}`,
    (error, response, body) => {
      if (error) {
        return console.error('error:', error);
      }
      const json = JSON.parse(body);
      console.log(json);
    });
}

function bookDelete(id) {
  request.delete(`${API_URL}/books/${id}`,
    (error, response, body) => {
      if (error) {
        return console.error('error:', error);
      }
      console.log('刪除成功');
    });
}

function bookCreate(name) {
  request.post(
    {
      url: `${API_URL}/books`,
      form: {
        name,
      },
    },
    (error, response, body) => {
      if (error) {
        return console.error('error:', error);
      }
      console.log('新增成功');
    },
  );
}

function bookUpdate(id, name) {
  request.patch(
    {
      url: `${API_URL}/books/${id}`,
      form: {
        name,
      },
    },
    (error, response, body) => {
      if (error) {
        return console.error('error:', error);
      }
      console.log('新增成功');
    },
  );
}
