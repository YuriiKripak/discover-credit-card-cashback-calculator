const DiscoverCardCalculator = () => {
  const [monthlySpend, setMonthlySpend] = React.useState(1000);
  const [categorySpend, setCategorySpend] = React.useState(500);
  const [firstYear, setFirstYear] = React.useState(true);

  const calculateCashback = () => {
    const regularCashback = (monthlySpend - categorySpend) * 0.01 * 12;
    const categoryCashback = categorySpend * 0.05 * 12;
    const totalCashback = regularCashback + categoryCashback;
    const firstYearBonus = firstYear ? totalCashback : 0;
    return {
      regularCashback,
      categoryCashback,
      totalCashback,
      firstYearBonus,
      grandTotal: totalCashback + firstYearBonus
    };
  };

  const results = calculateCashback();

  return React.createElement(
    'div',
    { className: 'calculator-container' },
    React.createElement('h3', null, 'Discover it® Cash Back Calculator'),
    React.createElement(
      'div',
      null,
      React.createElement('label', null, 'Monthly Spend ($): '),
      React.createElement('input', {
        type: 'number',
        value: monthlySpend,
        onChange: (e) => setMonthlySpend(Number(e.target.value)),
      })
    ),
    React.createElement(
      'div',
      null,
      React.createElement('label', null, '5% Category Spend (Monthly, $): '),
      React.createElement('input', {
        type: 'number',
        value: categorySpend,
        onChange: (e) => setCategorySpend(Number(e.target.value)),
      })
    ),
    React.createElement(
      'div',
      null,
      React.createElement('label', null,
        React.createElement('input', {
          type: 'checkbox',
          checked: firstYear,
          onChange: (e) => setFirstYear(e.target.checked),
        }),
        ' First Year (Cashback Match)'
      )
    ),
    React.createElement(
      'div',
      { className: 'results' },
      React.createElement('h4', null, 'Your Estimated Cashback:'),
      React.createElement('p', null, `Regular Cashback: $${results.regularCashback.toFixed(2)}`),
      React.createElement('p', null, `5% Category Cashback: $${results.categoryCashback.toFixed(2)}`),
      React.createElement('p', null, `Total Annual Cashback: $${results.totalCashback.toFixed(2)}`),
      firstYear && React.createElement('p', null, `First Year Bonus: $${results.firstYearBonus.toFixed(2)}`),
      React.createElement('p', { className: 'grand-total' }, `Grand Total: $${results.grandTotal.toFixed(2)}`)
    )
  );
};

ReactDOM.render(
  React.createElement(DiscoverCardCalculator),
  document.getElementById('calculator-root')
);
