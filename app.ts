import 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 4000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    console.log(request.url);
    console.log(request.method);
    response.end('Hello world!');
  }
);

server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
