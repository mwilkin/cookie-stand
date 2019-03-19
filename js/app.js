'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// ToDo: make sure to include Total after the list of hours.


var oldMill = {
  name: 'Old Mill',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65, 
  averageCookieSale: 6.3,
  randomCustomerResult: [],
  cookiesSoldHourly: [],
  totalCookiesSold: 0,
  calculateRandomNumberOfCustomers: function() {
    for(var i = 0; i < hours.length; i++){
      this.randomCustomerResult.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
    }
  },
  calculateCookiesSoldHourly: function() {
    this.calculateRandomNumberOfCustomers();
    for(var i = 0; i < hours.length; i++ ) {
      this.cookiesSoldHourly.push(Math.round(this.randomCustomerResult[i] * this.averageCookieSale));
      this.totalCookiesSold += this.cookiesSoldHourly[i];
    }
  },
};
oldMill.calculateCookiesSoldHourly();

console.log(oldMill.minHourlyCustomers);
console.log(oldMill.maxHourlyCustomers);
console.log(oldMill.randomCustomerResult);
console.log(oldMill.cookiesSoldHourly);
console.log(oldMill.totalCookiesSold);



// <article id="oldMill">
//  <h2>Old Mill District</h2>
//  <ul>
//    <li>6am: 16 cookies</li>
//    <li>7am: 20 cookies</li>
//  </ul> 
// </article>


var shopLocationListElement = document.getElementById('shopLocationList');
console.log(shopLocationListElement);

var oldMillId = oldMill.name.toLowerCase().replace(' m','M')

var article = document.createElement('article');
article.setAttribute('id', `${oldMillId}`);
shopLocationListElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = oldMill.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for(var i = 0; i < hours.length; i++){
  var li = document.createElement('li');
  li.textContent = `${hours[i]}: 100 cookies`;
  ul.appendChild(li);
  
}


// var pilotButte = {
//   name: 'Pilot Butte',
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38, 
//   averageCookieSale: 3.7,
// };

// var lesSchwabAmphitheater = {
//   name: 'Les Schwab Amphitheater',
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38, 
//   averageCookieSale: 2.3,
// };

// var towerTheater = {
//   name: 'Tower Theater',
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16, 
//   averageCookieSale: 4.6,
// };

// var drakePark = {
//   name: 'Drake Park',
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24, 
//   averageCookieSale: 1.2,
