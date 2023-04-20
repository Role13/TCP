const net = require('net');

const server = net.createServer(con =>{
    con.write("He recibido una conección");
    console.log("-----------------Conección-----------------");
    con.pipe(con);
});

server.listen(3000, '127.0.0.1');