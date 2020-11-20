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

function getExchange(response)  {
  let amount = $('#amount').val();
  let factor = 
  let convertAmount = amount * ${response.conversion_rates.}
  if(response.conversion_rates) {
    $("show-exchange").text(`Your ${amount} U.S. Dollars converts to ${}`)
  }
}

$(document).ready(function()  {
  $('#formOne').submit(function(event)  {
    event.preventDefault();
    let code = $('#code').val();
    
    console.log(code);
    clearFields();
    ExchangeRate.getRate(code)
      .then(function(response)  {
        getExchange(response);
      });
  });
});