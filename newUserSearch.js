var fs = require('fs');
var weather = require('weather-js');

var UserSearch = function(name, location){
  this.name = name;
  this.location = location;
  this.date = new Date(Date.now());
}

UserSearch.prototype.print = function(){
  console.log(this.name);
  console.log(this.location);
  console.log(this.date);
}

UserSearch.prototype.getWeather = function(saveDataToFile, saveLogs) {
  var self = this;
  return weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
  
    console.log(JSON.stringify(result, null, 2));
    saveLogs(self.name, self.location, self.date);
    saveDataToFile(JSON.stringify(result, null, 2));
    return result;
  });
}

UserSearch.prototype.saveToFile = function(content){
  fs.appendFile('test.txt', content, function(err, done){
    if (err){
      console.log("error writing file>>>", err);
    }
  })
} 

UserSearch.prototype.saveLogsToFile = function(name, location, date){
  console.log("name is>>>>", name)
  var content = `Name: ${name}, Location: ${location}, Date: ${date} \n`;
  fs.appendFile('log.txt', content, function(err, done){
    if (err) console.log("error writing logs>>>", err);
  })
}
/*
var u1 = new UserSearch("stan", "San Francisco, CA");

u1.print();
var u2 = new UserSearch("test", "Los Angeles, CA");

u2.print();
u2.getWeather(u2.saveToFile);
*/

module.exports = UserSearch;
