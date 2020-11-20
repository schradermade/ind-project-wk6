import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/exchange-service.js';

function clearFields()  {
  $('#amount').val("");
  $('#code').val("");
  $('#show-exchange').val("");
}

function getExchange(response, code, amount)  {
  let convertCode = `${response.conversion_rates}.${code}`;
  console.log(convertCode);
  let convertAmount = `${convertCode} * ${amount}`;
  console.log(convertAmount);
  if (response.conversion_rates)  {
    alert("it worked");
    console.log(response);
    $("#show-exchange").text(`Your $${amount} U.S. Dollars converts to ${convertAmount} ${}`);
  } else  {
    $('#show-errors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function()  {
  $('#formOne').submit(function(event)  {
    event.preventDefault();
    
    let code = $('#code').val();
    let amount = $('#amount').val();
    console.log(code);
    clearFields();
    ExchangeRate.getRate("USD")
      .then(function(response)  {
        getExchange(response, code, amount);
      });
  });
});