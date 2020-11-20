import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/exchange-service.js';

function clearFields()  {
  $('#amount').val("");
  $('#currency-code').val("");
  $('#show-exchange').val("");
}

function getExchange(response)  {
}


$(document).ready(function()  {
  $('form-one').click(function()  {
    let code = $('#currency-code').val();
    clearFields();
    ExchangeRate.getRate(code)
      .then(function(response)  {
        getExchange(response);
      });
  });
});