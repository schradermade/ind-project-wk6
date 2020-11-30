import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/exchange-service.js';

function clearFields()  {
  $('#amount').val("");
  $('#code').val("");
  $('#show-exchange').val("");
  $('#showString').val("");
}

function getExchange(response, code, amount, outputString)  {
  let exchangedAmount;
  const date = new Date();
  if (response.conversion_rates) {
    if (code === "CHF") {
      exchangedAmount = Math.round(100 * (response.conversion_rates.CHF * amount))/100;
      outputString = `Your ${amount} U.S. Dollars is ${exchangedAmount} Swiss Franc (CHF) with an exchange rate of ${response.conversion_rates.CHF} as of ${date}.`;
    }
    else if (code === "CAD") {
      exchangedAmount = Math.round(100 * (response.conversion_rates.CAD * amount))/100;
      outputString = `Your ${amount} U.S. Dollars is ${exchangedAmount} Canadian Dollars (CAD) with an exchange rate of ${response.conversion_rates.CAD} as of ${date}.`;
    }
    else if (code === "MXN") {
      exchangedAmount = Math.round(100 * (response.conversion_rates.MXN * amount))/100;
      outputString = `Your ${amount} U.S. Dollars is ${exchangedAmount} Mexican peso (MXN) with an exchange rate of ${response.conversion_rates.MXN} as of ${date}.`;  
    }
    else if (code === "CNY") {
      exchangedAmount = Math.round(100 * (response.conversion_rates.CNY * amount))/100;
      outputString = `Your ${amount} U.S. Dollars is ${exchangedAmount} Chinese yuan (CNY) with an exchange rate of ${response.conversion_rates.CNY} as of ${date}.`;
    }
    else if (code === "EUR") {
      exchangedAmount = response.conversion_rates.EUR * amount;
      outputString = `Your ${amount} U.S. Dollars is ${exchangedAmount} Euro (EUR) with an exchange rate of ${response.conversion_rates.EUR} as of ${date}.`;
    } 
    else if (code !== "CHF" | "CAD" | "MXN" | "CNY" | "EUR" )  {
      outputString = "Sorry, that currency does not exist in our system.";
    } else {
      $('#show-errors').text(`There was an error: ${response.message}`);
    } 
  }
  document.getElementById("showString").innerHTML = outputString;
}
  
$(document).ready(function()  {
  $('#formOne').submit(function(event)  {
    event.preventDefault();
    let code = $('#code').val();
    let amount = $('#amount').val();
    let outputString;
    clearFields();
    ExchangeRate.getRate()
      .then(function(response)  {
        getExchange(response, code, amount, outputString);
      });
  });
});