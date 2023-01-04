import { fastify } from 'fastify';

const server = fastify({
  logger: true,
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
