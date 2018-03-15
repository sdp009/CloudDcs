var Discovery = require('udp-discovery').Discovery;
var discover = new Discovery();
const os = require('os');

var name = os.hostname();
var interval = 500;
var available = true;
 
var serv = {
  port: 7009,
  proto: 'udp',
  addrFamily: 'IPv4',
  bonus: {
    name: 'Edmond',
    day: 2233,
    week: [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday' ]
  }
};
 
discover.announce(name, serv, interval, available);
 
discover.on('MessageBus', function(event, data) {
  console.log('event:',event);
  //console.log('data:',data);
});
