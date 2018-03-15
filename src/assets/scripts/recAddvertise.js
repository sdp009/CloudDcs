var Discovery = require('udp-discovery').Discovery;
var discover = new Discovery();
var sysNm = [];
var sysIp = [];

discover.on('available', function(name, data, reason) {
  //console.log('Manager Name: ',name);
  sysNm.push(name);

  //console.log('data',data);
  //console.log("IP Address: " + data.addr);
  sysIp.push(data.addr);

  //console.log('reason',reason);
  //var obj = {a: 1, b: '2', c: true, d: {e: 333}};
  //discover.sendEvent('Hello', obj);
 
  //console.log(name,':','available:',reason);
  //console.log(data);

  console.log(sysNm);
  console.log(sysIp);
});
 
discover.on('unavailable', function(name, data, reason) {
  console.log(name,':','unavailable:',reason);
  console.log(data);
});
