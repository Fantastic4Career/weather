var fs = require('fs');
var UserSearch = require('./newUserSearch');

var WeatherAdmin = function() {

}
WeatherAdmin.prototype.getData = function(){
  return fs.readFile('./log.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("data from file>>>");
    console.log(data);
    return data;
  })
}

WeatherAdmin.prototype.newUserSearch = function(name, location) {
  var newUser = new UserSearch(name, location);
  newUser.print();
  newUser.getWeather(newUser.saveToFile, newUser.saveLogsToFile);
}


module.exports = WeatherAdmin;
