var moment = require("moment");

console.log("Hello from JavaScript");
var datetime = moment().startOf("hour").fromNow();
console.log(datetime);
