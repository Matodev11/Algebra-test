import { useState, useEffect } from 'react';





const Countries = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData); // Remove .results
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="countries-grid-container">
    {loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <h1>Countries</h1>
        <div className="countries-grid">
          {data.map((country: any) => (
            <div key={country.name.common} className="country-card">
              <img src={country.flags.png} alt={country.name.common} className="country-flag" />
              <div className="country-info">
                <p>Name: {country.name.common}</p>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
  );
};

export default Countries;