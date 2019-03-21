'use strict';

// DEFINE ALL GLOBAL VARIABLES

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopListLocation = [];

// DEFINE ALL GLOBAL FUNCTIONS

// RUN CODE
for(var i = 0; i < shopListLocation.length; i++){
  shopListLocation[i].render(shopLocationListElement);
}

// Creating getting HTML elements

var parentElement = document.getElementById('shopData');

var table = document.createElement('table');
parentElement.appendChild(table);

var thead = document.createElement('thead');
table.appendChild(thead);

var tr = document.createElement('tr');
thead.appendChild(tr);

var th = document.createElement('th');
tr.appendChild(th);

for(var j = 0; j < hours.length; j++){
  th = document.createElement('th');
  th.textContent = hours[j]; 
  tr.appendChild(th);
}

th = document.createElement('th');
th.textContent = 'Daily Location Total';
tr.appendChild(th); 
// place calcuated daily total (for loop)

var tbody = document.createElement('tbody');
table.appendChild(tbody);

tr = document.createElement('tr');
tr.setAttribute('id', 'shop');
tbody.appendChild(tr);

var renderShop = function(){
  var shopRow = document.getElementById('shop');
  // console.log('hello in side rendershop');
  var td = document.createElement('td');
  td.textContent = 'Old Mill';
  // `${this.name.toLowerCase().replace(' ', '_')}`;
  shopRow.appendChild(td);

  for(i = 0; i < hours.length; i++){
    td = document.createElement('td');
    td.textContent = 12;
    // `${this.cookiesSoldHourly[i]}`
    shopRow.appendChild(td);
  }
};

var tfoot = document.createElement('tfoot');
table.appendChild(tfoot);

tr = document.createElement('tr');
tfoot.appendChild(tr);

var td = document.createElement('td');
td.textContent = 'Hour Totals';
tr.appendChild(td);

//Create a for loop add all the hourly cookie sale totals

// var renderShop = function(parentElement){
//   var article = document.createElement('article');
//   article.setAttribute('id', `${this.name.toLowerCase().replace(' ', '_')}`);
//   parentElement.appendChild(article);
  
//   for(var i = 0; i < hours.length; i++){
//     var li = document.createElement('li');
//     li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
//     ul.appendChild(li);
//   }
  
//   li = document.createElement('li');
//   li.textContent = `Total cookies sold for the day: ${this.totalCookiesSold}`;
//   ul.appendChild(li);
// };

function CookieShopLocation(name, minHourlyCustomers, maxHourlyCustomers, averageCookieSale){
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookieSale = averageCookieSale;
  this.randomCustomerResult = [];
  this.cookiesSoldHourly = [];
  this.totalCookiesSold = 0;
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

var shopLocationListElement = document.getElementById('shopLocationList');

var oldMill = new CookieShopLocation('Old Mill', 23, 65, 6.3);

var pilotButte = new CookieShopLocation('Pilot Butte', 11, 38, 3.7);

var schwabAphitheater = new CookieShopLocation('Schwab Aphitheater', 20, 38, 2.3);

var towerTheater = new CookieShopLocation('Tower Theater', 2, 16, 4.6);

var drakePark = new CookieShopLocation('Drake Park', 3, 24, 1.2);

oldMill.render();
