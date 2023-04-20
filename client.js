const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1',()=>{
    console.log("-----------------Conección TCP Exitosa-----------------");
});

client.on('close', ()=>{
    console.log("Conección Terminada");
});

client.on('data', (data) =>{
    colsole.log(`INFO: ${data}`);
});