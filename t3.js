const ipString = '192.168.1.10';
const Ip = (ip = '127.0.0.1') => {
    const ipArray = ip.split('.');
    let ipn = ipArray[0] << 24 | ipArray[1] << 16 | ipArray[2] << 8 | ipArray[3];
    return ipn;
}
console.log(Ip(ipString));
