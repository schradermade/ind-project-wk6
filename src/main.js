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
  if (response.conversion_rates)  {
    code;
    //let currCode = `response.conversion_rates.${code}`;
    let code1 = `response.${conversion_rates}.${code}`;
    console.log(code1);
    //console.log(response.`${conversion_rates} ${code}`);
    console.log(response.conversion_rates.CAD);
    //let convertAmount = currCode;
    //console.log(response.conversion_rates.CAD);
    $("#show-exchange").text(`Your $${amount} U.S. Dollars converts to  `);
  } else  {
    $('#show-errors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function()  {
  $('#formOne').submit(function(event)  {
    event.preventDefault();
    let USD = "USD";
    let code = $('#code').val();
    let amount = $('#amount').val();
    clearFields();
    ExchangeRate.getRate(USD)
      .then(function(response)  {
        getExchange(response, code, amount);
      });
  });
});