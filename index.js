import http from 'node:http';

const PORT = 4000;
const HOST = '127.0.0.1';
const data = JSON.stringify([
  { id: '001', username: 'alex', age: 32, hobbies: ['one hobby'] },
  { id: '002', username: 'jane', age: 30, hobbies: ['one hobby', 'two hobby'] },
]);
// Пользователи хранятся как объекты со следующими свойствами:
// id — уникальный идентификатор (строка, uuid), сгенерированный на стороне сервера
// username — имя пользователя (строка, обязательно)
// age — возраст пользователя (число, обязательно)
// hobbies — увлечения пользователя (массив строк или пустой массив, обязательно)
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.end();

  // if (req.url === `/api/users`) {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(data);
  // } else {
  //   res.write('error!');
  //   res.end();
  // }
});

server.listen(PORT, HOST, (err) => {
  err ? console.log(`Error! ${err}`) : console.log(`Listen port ${PORT}`);
});
