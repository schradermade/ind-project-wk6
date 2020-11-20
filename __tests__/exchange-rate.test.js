import { ExchangeRate } from '../src/js/exchange-service.js';

describe('ExchangeRate', () => {
  let reusableStats;

  beforeEach(() =>  {
    reusableStats = new ExchangeRate();
  })

  test('should correctly create a fruit object with three flavors', () => {
    expect(fruit1.flavor1).toEqual("sweet");
  });

});


