'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var customers = [];

var oldMill = {
  name: 'Old Mill',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65, 
  averageCookieSale: 6.3,
};

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
// };

{
  /* 
  <article id="oldMill">
    <h2>Old Mill District</h2>
    <ul>
      <li>6am: 16 cookies</li>
      <li>7am: 20 cookies</li>
      <li>8am: 35 cookies</li>
      <li>9am: 48 cookies</li>
      <li>10am: 56 cookies</li>
      <li>11am: 77 cookies</li>
      <li>12pm: 93 cookies</li>
      <li>1pm: 144 cookies</li>
      <li>2pm: 119 cookies</li>
      <li>3pm: 84 cookies</li>
      <li>4pm: 61 cookies</li>
      <li>5pm: 23 cookies</li>
      <li>6pm: 42 cookies</li>
      <li>7pm: 57 cookies</li>
      <li>8pm: 29 cookies</li>
      <li>Total: 657 cookies</li>
    </ul> 
  </article>*/
}

var shopLocationListElement = 
document.getElementById('shopLocationList');
console.log(shopLocationListElement);

var article = document.createElement('article');
article.setAttribute('id', `${oldMill.name.toLowerCase()}`);
shopLocationListElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = oldMill.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for(var i = 0; i < hours.length; i++){
  var li = document.createElement('li');
  li.textContent = hours[i];
  ul.appendChild(li);
}











