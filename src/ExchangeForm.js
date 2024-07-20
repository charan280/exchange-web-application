import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import './ExchangeForm.css';

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CNY', name: 'Chinese Yuan Renminbi' },
  { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'THB', name: 'Thai Baht' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'MXN', name: 'Mexican Peso' },
  { code: 'ZAR', name: 'South African Rand' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'TRY', name: 'Turkish Lira' },
  { code: 'NOK', name: 'Norwegian Krone' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'PLN', name: 'Polish Zloty' },
  { code: 'HUF', name: 'Hungarian Forint' },
  { code: 'CZK', name: 'Czech Koruna' },
  { code: 'SAR', name: 'Saudi Riyal' },
  { code: 'AED', name: 'United Arab Emirates Dirham' },
  { code: 'ILS', name: 'Israeli Shekel' },
  { code: 'EGP', name: 'Egyptian Pound' },
  { code: 'PHP', name: 'Philippine Peso' },
  { code: 'IDR', name: 'Indonesian Rupiah' },
  { code: 'VND', name: 'Vietnamese Dong' },
  { code: 'PKR', name: 'Pakistani Rupee' },
  { code: 'BDT', name: 'Bangladeshi Taka' },
  { code: 'NGN', name: 'Nigerian Naira' },
  { code: 'KES', name: 'Kenyan Shilling' },
  { code: 'GHS', name: 'Ghanaian Cedi' },
  { code: 'COP', name: 'Colombian Peso' },
  { code: 'PEN', name: 'Peruvian Sol' },
];


const ExchangeForm = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState(null);
  const [convertedCurrency, setConvertedCurrency] = useState('');

  const handleConvert = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const rate = response.data.rates[toCurrency];
    const convertedResult = (amount * rate).toFixed(3); // Round to three decimal places
    setResult(convertedResult);
    setConvertedCurrency(toCurrency);
  };

  const handleReset = () => {
    setAmount('');
    setFromCurrency('USD');
    setToCurrency('INR');
    setResult(null);
    setConvertedCurrency('');
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Select a currency
    </Tooltip>
  );

  return (
    <Card className="exchange-card">
      <Card.Body className='card-body'>
        <Card.Title>Currency Exchange</Card.Title>
        <Form onSubmit={handleConvert}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFromCurrency">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Form.Label>From</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  as="select"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name} ({currency.code})
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formToCurrency">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Form.Label>To</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  as="select"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name} ({currency.code})
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Convert
          </Button>
          <Button variant="secondary" className="ms-2" onClick={handleReset}>
            Reset
          </Button>
          {result !== null && (
            <Row className="mt-3">
              <Col>
                <h5>
                  Result: {result} {convertedCurrency}
                </h5>
              </Col>
            </Row>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ExchangeForm;
