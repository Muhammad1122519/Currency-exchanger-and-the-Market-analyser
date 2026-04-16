async function fetchExchangeRates() {
    const response = await fetch('https://open.er-api.com/v6/latest/PKR');
    if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    return data.rates;
}

export { fetchExchangeRates };