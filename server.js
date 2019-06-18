// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-cookie'));

const randomNum = async () => {
    let num = await new Date().getTime()
    // console.log(num);
    return num;
}

// Declare a route
fastify.post("/api/auth", async (request, reply) => {

    let body = request.body;
  
    let _userName = body["username"];
    let _password = body["password"];

    let session = await randomNum();
    console.log(sess)
    reply.setCookie('sess',session)
    return session;
  
  })
  
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()