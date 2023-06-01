const os = require('os');

// network interfaces
// console.log(os.networkInterfaces());
// user info
// console.log(os.userInfo());
// uptime
// console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);