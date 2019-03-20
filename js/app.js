'use strict';

// DEFINE ALL GLOBAL VARIABLES

// DEFINE ALL GLOBAL FUNCTIONS

// RUN CODE

// ---------------
// Define all global functions
// ---------------
var renderShop = function(parentElement){
  var article = document.createElement('article');
  article.setAttribute('id', `${this.name.toLowerCase().replace(' ', '_')}`);
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
  
  li = document.createElement('li');
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
  shopListLocation.push(this);
}

CookieShopLocation.prototype.render = renderShop;

// ---------------
// Define all data to be used in script
// ---------------
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopListLocation = [];
console.log(shopListLocation);

// ---------------
// Run script
// ---------------

var shopLocationListElement = document.getElementById('shopLocationList');
console.log(shopLocationListElement);

var oldMill = new CookieShopLocation('Old Mill', 23, 65, 6.3, [], [], 0);
// oldMill.renderShop();


var pilotButte = new CookieShopLocation('Pilot Butte', 11, 38, 3.7, [], [], 0);

var schwabAphitheater = new CookieShopLocation('Schwab Aphitheater', 20, 38, 2.3, [], [], 0);

var towerTheater = new CookieShopLocation('Tower Theater', 2, 16, 4.6, [], [], 0);

var drakePark = new CookieShopLocation('Drake Park', 3, 24, 1.2, [], [], 0);

for(var i = 0; i < shopListLocation.length; i++){
  shopListLocation[i].render(shopLocationListElement);
} 






