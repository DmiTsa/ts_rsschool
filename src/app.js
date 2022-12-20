'use strict';
exports.__esModule = true;
var http_1 = require('http');
var getController_js_1 = require('./controllers/getController.js');
var port = 4000;
var server = (0, http_1.createServer)(function (request, response) {
  switch (request.method) {
    case 'GET':
      (0, getController_js_1['default'])(request, response);
      break;
    default:
      response.statusCode = 500;
      response.write(
        'Error 500: request type '.concat(request.method, ' is not supported')
      );
      response.end();
      break;
  }
  //  getController(request, response);
  //  postController(request, response);
  //  putController(request, response);
  //  deleteController(request, response);
  //  if (request.url === `/api/users`) {
  //    response.statusCode = 200;
  //    response.setHeader('Content-Type', 'application/json');
  //    response.end(data);
  //  } else {
  //    response.write('error!');
  //    response.end();
  //  }
});
server.listen(port, function () {
  console.log('Server running at port: '.concat(port));
});
//functions
// const postController = (a, b) => {};
// const putController = (a, b) => {};
// const deleteController = (a, b) => {};
