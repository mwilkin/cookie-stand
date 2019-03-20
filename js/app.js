'use strict';

// DEFINE ALL GLOBAL VARIABLES

// DEFINE ALL GLOBAL FUNCTIONS

// RUN CODE

// ---------------
// Define all global functions
// ---------------
var renderShop = function(parentElement){
  var article = document.createElement('article');
  article.setAttribute('id', `${this.name.toLowercase()}`);
  parentElement.appendChild(article);

  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);
  
  var ul = document.createElement('ul');
  article.appendChild(ul);
  
  for(var i = 0; i < hours.length; i++){
    var li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
    ul.appendChild(li);
  }
  
  var li = document.createElement('li');
  li.textContent = `Total cookies sold for the day: ${this.totalCookiesSold}`;
  ul.appendChild(li);
};

function CookieShopLocation(name, minHourlyCustomers, maxHourlyCustomers, averageCookieSale, randomCustomerResult, cookiesSoldHourly, totalCookiesSold){
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookieSale = averageCookieSale;
  this.randomCustomerResult = randomCustomerResult;
  this.cookiesSoldHourly = cookiesSoldHourly;
  this.totalCookiesSold = totalCookiesSold;
  debugger;
  this.calculateRandomNumberOfCustomers = function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
    }
  };
  this.calculateCookiesSoldHourly = function() {
    this.calculateRandomNumberOfCustomers();
    for(var i = 0; i < hours.length; i++ ) {
      this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
      this.totalCookiesSold += this.cookiesSoldHourly[i];
    }
  };
  this.calculateCookiesSoldHourly();
  console.log(this.calculateCookiesSoldHourly);
  shopListLocation.push(this);
}

CookieShopLocation.prototype.render = renderShop;

// ---------------
// Define all data to be used in script
// ---------------
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopListLocation = [];
// ---------------
// Run script
// ---------------

var shopLocationListElement = document.getElementById('shopLocationList');
console.log(shopLocationListElement);

var oldMill = new CookieShopLocation('Old Mill', 23, 65, 6.3, [], [], 0);

var pilotButte = new CookieShopLocation('Pilot Butte', 11, 38, 3.7, [], [], 0);

var schwabAphitheater = new CookieShopLocation('Schwab Aphitheater', 20, 38, 2.3, [], [], 0);

var towerTheater = new CookieShopLocation('Tower Theater', 2, 16, 4.6, [], [], 0);

var drakePark = new CookieShopLocation('Drake Park', 3, 24, 1.2, [], [], 0);

// OLD MILL LOCATION

// var oldMill = {
//   name: 'Old Mill',
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65, 
//   averageCookieSale: 6.3,
//   randomCustomerResult: [],
//   cookiesSoldHourly: [],
//   totalCookiesSold: 0,
//   calculateRandomNumberOfCustomers: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
//     }
//   },
//   calculateCookiesSoldHourly: function() {
//     this.calculateRandomNumberOfCustomers();
//     for(var i = 0; i < hours.length; i++ ) {
//       this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
//       this.totalCookiesSold += this.cookiesSoldHourly[i];
//     }
//   },
// };



// console.log(oldMill.minHourlyCustomers);
// console.log(oldMill.maxHourlyCustomers);
// console.log(oldMill.randomCustomerResult);
// console.log(oldMill.cookiesSoldHourly);
// console.log(oldMill.totalCookiesSold);

// var shopLocationListElement = document.getElementById('shopLocationList');

// var oldMillId = oldMill.name.toLowerCase().replace(' m','M');

// var article = document.createElement('article');
// article.setAttribute('id', `${oldMillId}`);
// shopLocationListElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = oldMill.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for(var i = 0; i < hours.length; i++){
//   var li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${oldMill.cookiesSoldHourly[i]} cookies`;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
// li.textContent = `Total cookies sold for the day: ${oldMill.totalCookiesSold}`;
// ul.appendChild(li);

// // Pilot Butte

// var pilotButte = {
//   name: 'Pilot Butte',
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38, 
//   averageCookieSale: 3.7,
//   randomCustomerResult: [],
//   cookiesSoldHourly: [],
//   totalCookiesSold: 0,
//   calculateRandomNumberOfCustomers: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
//     }
//   },
//   calculateCookiesSoldHourly: function() {
//     this.calculateRandomNumberOfCustomers();
//     for(var i = 0; i < hours.length; i++ ) {
//       this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
//       this.totalCookiesSold += this.cookiesSoldHourly[i];
//     }
//   },
// };

// pilotButte.calculateCookiesSoldHourly();

// // console.log(pilotButte.minHourlyCustomers);
// // console.log(pilotButte.maxHourlyCustomers);
// // console.log(pilotButte.randomCustomerResult);
// // console.log(pilotButte.cookiesSoldHourly);
// // console.log(pilotButte.totalCookiesSold);

// var shopLocationListElement = document.getElementById('shopLocationList');

// var pilotButteId = pilotButte.name.toLowerCase().replace(' b','B');

// var article = document.createElement('article');
// article.setAttribute('id', `${pilotButteId}`);
// shopLocationListElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = pilotButte.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for(var i = 0; i < hours.length; i++){
//   var li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${pilotButte.cookiesSoldHourly[i]} cookies`;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
// li.textContent = `Total cookies sold for the day: ${pilotButte.totalCookiesSold}`;
// ul.appendChild(li);

// // Les Schwab Aphitheater

// var schwabAphitheater = {
//   name: 'Les Schwab Amphitheater',
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38, 
//   averageCookieSale: 2.3,
//   randomCustomerResult: [],
//   cookiesSoldHourly: [],
//   totalCookiesSold: 0,
//   calculateRandomNumberOfCustomers: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
//     }
//   },
//   calculateCookiesSoldHourly: function() {
//     this.calculateRandomNumberOfCustomers();
//     for(var i = 0; i < hours.length; i++ ) {
//       this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
//       this.totalCookiesSold += this.cookiesSoldHourly[i];
//     }
//   },
// };

// schwabAphitheater.calculateCookiesSoldHourly();

// // console.log(schwabAphitheater.minHourlyCustomers);
// // console.log(schwabAphitheater.maxHourlyCustomers);
// // console.log(schwabAphitheater.randomCustomerResult);
// // console.log(schwabAphitheater.cookiesSoldHourly);
// // console.log(schwabAphitheater.totalCookiesSold);

// var shopLocationListElement = document.getElementById('shopLocationList');

// var schwabAmphitheaterId = schwabAphitheater.name.toLowerCase().replace(' a','A');

// var article = document.createElement('article');
// article.setAttribute('id', `${schwabAmphitheaterId}`);
// shopLocationListElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = schwabAphitheater.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for(var i = 0; i < hours.length; i++){
//   var li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${schwabAphitheater.cookiesSoldHourly[i]} cookies`;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
// li.textContent = `Total cookies sold for the day: ${schwabAphitheater.totalCookiesSold}`;
// ul.appendChild(li);

// // Tower Theater

// var towerTheater = {
//   name: 'Tower Theater',
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16, 
//   averageCookieSale: 4.6,
//   randomCustomerResult: [],
//   cookiesSoldHourly: [],
//   totalCookiesSold: 0,
//   calculateRandomNumberOfCustomers: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
//     }
//   },
//   calculateCookiesSoldHourly: function() {
//     this.calculateRandomNumberOfCustomers();
//     for(var i = 0; i < hours.length; i++ ) {
//       this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
//       this.totalCookiesSold += this.cookiesSoldHourly[i];
//     }
//   },
// };

// towerTheater.calculateCookiesSoldHourly();

// // console.log(towerTheater.minHourlyCustomers);
// // console.log(towerTheater.maxHourlyCustomers);
// // console.log(towerTheater.randomCustomerResult);
// // console.log(towerTheater.cookiesSoldHourly);
// // console.log(towerTheater.totalCookiesSold);

// var shopLocationListElement = document.getElementById('shopLocationList');

// var towerTheaterId = towerTheater.name.toLowerCase().replace(' t','T');

// var article = document.createElement('article');
// article.setAttribute('id', `${towerTheaterId}`);
// shopLocationListElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = towerTheater.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for(var i = 0; i < hours.length; i++){
//   var li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${towerTheater.cookiesSoldHourly[i]} cookies`;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
// li.textContent = `Total cookies sold for the day: ${towerTheater.totalCookiesSold}`;
// ul.appendChild(li);

// // Drake Park

// var drakePark = {
//   name: 'Drake Park',
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24, 
//   averageCookieSale: 1.2,
//   randomCustomerResult: [],
//   cookiesSoldHourly: [],
//   totalCookiesSold: 0,
//   calculateRandomNumberOfCustomers: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
//     }
//   },
//   calculateCookiesSoldHourly: function() {
//     this.calculateRandomNumberOfCustomers();
//     for(var i = 0; i < hours.length; i++ ) {
//       this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
//       this.totalCookiesSold += this.cookiesSoldHourly[i];
//     }
//   },
// };

// drakePark.calculateCookiesSoldHourly();

// // console.log(drakePark.minHourlyCustomers);
// // console.log(drakePark.maxHourlyCustomers);
// // console.log(drakePark.randomCustomerResult);
// // console.log(drakePark.cookiesSoldHourly);
// // console.log(drakePark.totalCookiesSold);

// var shopLocationListElement = document.getElementById('shopLocationList');

// var drakeParkId = drakePark.name.toLowerCase().replace(' p','P');

// var article = document.createElement('article');
// article.setAttribute('id', `${drakeParkId}`);
// shopLocationListElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = drakePark.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for(var i = 0; i < hours.length; i++){
//   var li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${drakePark.cookiesSoldHourly[i]} cookies`;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
// li.textContent = `Total cookies sold for the day: ${drakePark.totalCookiesSold}`;
// ul.appendChild(li);
