'use strict';

// DEFINE ALL GLOBAL VARIABLES

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopListLocation = [];
var allShopsDailyTotal = [];
// var allShopsHourlyTotal = [];
var companyDailyTotal = 0;

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

var tbody = document.createElement('tbody');
table.appendChild(tbody);

var renderShop = function(){
  for(i = 0; i < shopListLocation.length; i++){
    tr = document.createElement('tr');
    tr.setAttribute('id', 'shop'+ i);
    tbody.appendChild(tr);
    
    var shopRow = document.getElementById('shop'+ i);
    console.log('shop'+ i);
    var td = document.createElement('td');
    td.textContent = `${shopListLocation[i].name}`;
    shopRow.appendChild(td);
  
    for(var z = 0; z < hours.length; z++){
      td = document.createElement('td');
      td.textContent = `${shopListLocation[i].cookiesSoldHourly[z]}`;
      shopRow.appendChild(td);
      // allShopsHourlyTotal += parseInt(`${shopListLocation[i].cookiesSoldHourly[z]}`);
      // console.log(allShopsHourlyTotal);
    }
    td = document.createElement('td');
    td.textContent = `${shopListLocation[i].totalCookiesSold}`;
    shopRow.appendChild(td);
    allShopsDailyTotal.push(`${shopListLocation[i].totalCookiesSold}`);
    console.log(`${shopListLocation[i].totalCookiesSold}`);
  }
};

var tfoot = document.createElement('tfoot');
table.appendChild(tfoot);

tr = document.createElement('tr');
tfoot.appendChild(tr);

var td = document.createElement('td');
td.textContent = 'Hourly Cookie Sale Totals';
tr.appendChild(td);

for(i =0; i < hours.length; i++){
  td = document.createElement('td');
  td.textContent = 2;
  tr.appendChild(td);
}
debugger;
for(i = 0; i < allShopsDailyTotal.length; i++){
  companyDailyTotal += parseInt(allShopsDailyTotal[i]);
  console.log(allShopsDailyTotal.length);
  console.log(companyDailyTotal);
  console.log(allShopsDailyTotal[i]);
  
}
console.log(allShopsDailyTotal);
td = document.createElement('td');
td.textContent = companyDailyTotal;
tr.appendChild(td);


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
