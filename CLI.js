var WeatherAdmin = require('./WeatherAdmin');
var myAdmin = new WeatherAdmin();
var UserSearch = require('./newUserSearch');
var argvs = process.argv.slice(2);
var loginType = argvs[0];
var userName = argvs[1];
var location = argvs.slice(2).join(" ");

if (loginType === "admin"){
  // admin View flow
  myAdmin.getData();
} else {
  // user search flow
  myAdmin.newUserSearch(userName, location);
}
