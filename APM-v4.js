const assert = require('assert');
const { By, until } = $selenium;

const urls = [
  'http://ec2-35-162-252-234.us-west-2.compute.amazonaws.com:8080/#',
  'http://ec2-44-229-23-224.us-west-2.compute.amazonaws.com:8080/#',
  'http://ec2-44-233-213-58.us-west-2.compute.amazonaws.com:8080/#'
];
var urlId = Math.floor(Math.random() * 3);
var rootUrl = urls[urlId++];

const orders = [
  {"restaurant": "Beijing Express", "items": [4, 5, 9, 11]},
  {"restaurant": "Naan Sequitur", "items": [3, 2, 14, 6]}, 
  {"restaurant": "Czech Point", "items": [7, 5]},
];
var orderId = Math.floor(Math.random() * 3);
var order = orders[orderId++];

$webDriver.get(rootUrl + '/customer')
  .then(function() {
    return $webDriver.wait(until.elementLocated(By.id('customerName')), 10000);
  })
  .then(function(element) {
    element.sendKeys('New Relic');
    $webDriver.findElement(By.id('address')).sendKeys('111 SW Fifth Ave #2800, Portland, OR 97205');
    return $webDriver.findElement(By.css('button.btn.btn-primary')).click();
  })
  .then(function() {
    return $webDriver.wait(until.elementLocated(By.linkText(order.restaurant)), 30000);
  })
  .then(function(element) {
    return element.click();
  })
  .then(function() {
    return order.items.forEach(function(item){
      $webDriver.executeScript('document.querySelector(arguments[0]).click();', '.fm-menu-list > ul > :nth-child(' + item + ') .icon-plus-sign');
    });
  })
  .then(function() {
    $webDriver.get(rootUrl + '/checkout');
    return $webDriver.wait(until.elementLocated(By.name('ccType')), 30000);
  })
  .then(function(element) {
    element.sendKeys('v');
    $webDriver.findElement(By.name('ccNum')).sendKeys('4388123412341234');
    $webDriver.findElement(By.name('ccExp')).sendKeys('05/2027');
    $webDriver.findElement(By.name('ccCvc')).sendKeys('123');
    return $webDriver.findElement(By.css('button.btn.btn-primary')).click();
  }).then(function() {
    return $webDriver.findElement(By.linkText('Home')).click();
  });



