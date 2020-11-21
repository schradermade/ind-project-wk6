import { ExchangeRate } from '../src/js/exchange-service.js';
//import { getExchange } from '../src/js/main.js';

describe('ExchangeRate', () => {
  let reusableStats;

  beforeEach(() =>  {
    reusableStats = new ExchangeRate();
    //reusableStats = new getExchange();
  })

  test('should correctly take in USD amount and return amount exchanged in various other currencies', () => {
    expect(reusableStats.getRate()).toEqual("");
  })

});


