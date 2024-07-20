import React, { useState, useEffect } from 'react';

const GdpRatesSection = () => {
  const [gdpRates, setGdpRates] = useState(null);

  useEffect(() => {
    const fetchGdpRates = async () => {
      const gdpData = await simulateFetchGdpData();
      setGdpRates(gdpData);
    };

    fetchGdpRates();
  }, []);


  const simulateFetchGdpData = () => {
    return new Promise(resolve => {

      const gdpData = {
        USD: 22000,
        EUR: 15000,
        INR: 2800,
        GBP: 2900,
        AUD: 1450,
        CAD: 1850,
        SGD: 380,
        CHF: 720,
        MYR: 370,
        JPY: 5200,
        CNY: 14500,
        NZD: 210,
        THB: 520,
        HKD: 380,
        MXN: 1250,
        ZAR: 380,
        BRL: 1900,
        RUB: 1750,
        KRW: 1750,
        TRY: 900,
        NOK: 500,
        SEK: 600,
        DKK: 350,
        PLN: 620,
        HUF: 300,
        CZK: 350,
        SAR: 790,
        AED: 700,
        ILS: 420,
        EGP: 300,
        PHP: 360,
        IDR: 1100,
        VND: 320,
        PKR: 260,
        BDT: 300,
        NGN: 450,
        KES: 100,
        GHS: 80,
        COP: 430,
        PEN: 220,
        CLP: 300
      };
      resolve(gdpData);
    });
  };

  return (
    <section id="complex" className="gdp-rates-section">
      <div className="container1">
        <h2>GDP Rates for 2024</h2>
        <div className="gdp-rates-list">
          {gdpRates &&
            Object.keys(gdpRates).map(currency => (
              <div key={currency} className="gdp-rate-item">
                <span>{currency}: ${gdpRates[currency]} billion</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GdpRatesSection;
