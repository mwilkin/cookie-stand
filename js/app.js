'use strict';

// DEFINE ALL GLOBAL VARIABLES

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopListLocation = [];
var allShopsDailyTotal = [];
var allShopsHourlyTotal = [];
var companyDailyTotal = 0;
var companyCookieSoldHourly =0;

// DEFINE ALL GLOBAL FUNCTIONS
function addTableToDOM(){
// Creating getting HTML elements
  var parentElement = document.getElementById('shopData');

  var table = document.createElement('table');
  table.setAttribute('id', 'cookieStandSalesTable');
  parentElement.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var th = document.createElement('th');
  tr.appendChild(th);

  for(var i = 0; i < hours.length; i++){
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th); 

  var tbody = document.createElement('tbody');
  tbody.setAttribute('id', 'cookieStandtbody');
  table.appendChild(tbody);
}


function generateStoreData() {
  // var oldMill = new CookieShopLocation('Old Mill', 23, 65, 6.3);
  // rvar pilotButte = new CookieShopLocation('Pilot Butte', 11, 38, 3.7);
  // va schwabAphitheater = new CookieShopLocation('Schwab Aphitheater', 20, 38, 2.3);
  // var towerTheater = new CookieShopLocation('Tower Theater', 2, 16, 4.6);
  // var drakePark = new CookieShopLocation('Drake Park', 3, 24, 1.2);
  var addNewCookieStore = document.getElementById('addCookieShopForm');
  console.log(addNewCookieStore);

  var addCookieShopEventHandler = function(event){
    event.preventDefault();

    var target = event.target;

    var newName = target.name.value;
    var newMinHourlyCustomers = parseInt(target.minHourlyCustomers.value);

    var newMaxHourlyCustomers = parseInt(target.maxHourlyCustomers.value);

    var newAverageCookieSale = parseInt(target.averageHourlyCookieSale.value);

    target.reset();

    var newCookieShop = new CookieShopLocation(newName, newMinHourlyCustomers, newMaxHourlyCustomers, newAverageCookieSale);

    console.log('hi from inside the form');
    console.log(newCookieShop);
    newCookieShop.render();
  };

  addNewCookieStore.addEventListener('submit', addCookieShopEventHandler);
}


// RUN CODE

function renderTable(){
  addTableToDOM();
  generateStoreData();
  renderShop();
  addFootertoTable();
}

function addFootertoTable(){
  var table = document.getElementById('cookieStandSalesTable');

  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);

  var tr = document.createElement('tr');
  tr.setAttribute('id', 'foot');
  tfoot.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = 'Hourly Cookie Sale Totals';
  tr.appendChild(td);

  for(var i = 0; i < hours.length; i++){
    td = document.createElement('td');
    for(var j = 0; j < shopListLocation.length; j++){
      companyCookieSoldHourly += parseInt(shopListLocation[j].cookiesSoldHourly);
    }
    td.textContent = companyCookieSoldHourly;
    tr.appendChild(td);
  }

  for(i = 0; i < allShopsDailyTotal.length; i++){
    companyDailyTotal += parseInt(allShopsDailyTotal[i]);
  }

  var footerData = document.getElementById('foot');
  td = document.createElement('td');
  td.textContent = companyDailyTotal;
  footerData.appendChild(td);
}

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

var renderShop = function(){
  var tbody = document.getElementById('cookieStandtbody');
  for(var i = 0; i < shopListLocation.length; i++){
    var tr = document.createElement('tr');
    tr.setAttribute('id', 'shop' + i);
    tbody.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = `${shopListLocation[i].name}`;
    tr.appendChild(td);
    for(var j = 0; j < hours.length; j++){
      td = document.createElement('td');
      td.textContent = `${shopListLocation[i].cookiesSoldHourly[j]}`;
      tr.appendChild(td);
      allShopsHourlyTotal.push(parseInt(`${shopListLocation[i].cookiesSoldHourly[j]}`));
    }
    td = document.createElement('td');
    td.textContent = `${shopListLocation[i].totalCookiesSold}`;
    tr.appendChild(td);
    allShopsDailyTotal.push(`${shopListLocation[i].totalCookiesSold}`);
  }
};

CookieShopLocation.prototype.render = renderShop;

renderTable(); // Entry Point
