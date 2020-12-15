import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_CONTINENT } from "./Apollo.query";

type Country = {
  capital: string;
  currency: string;
  emoji: string;
  name: string;
  languages: any
};

const Left: React.FC = () => {
  const [getCountries, { data, loading, error }] = useLazyQuery(GET_COUNTRIES);
  const [code, setcode] = useState('');
  const getData = () => {
    if (loading) return <div>loading</div>;
    if (error) return <div>Something went wrong</div>;
    if (data) {
      const { country }: { country: Country } = data;
      console.log(country)
      return (
        <ul className="country_data">
          <li>Name: {country.name}</li>
          <li>Currency: {country.currency}</li>
          <li>Capital: {country.capital}</li>
          <li>Flag: {country.emoji}</li>
          <li>Languages: <span>{country.languages.map((res: any) => res.name).join(',')}</span></li>
        </ul>
      );
    }
    return <div className="no_data">No Data shown!</div>;
  };

  const ButtonClick = () => {
    getCountries({
      variables: {
        code: code.toUpperCase(),
      },
    });
  };

  return (
    <div>
      <input className="add_data" onChange={(e) => setcode(e.target.value)} placeholder="Enter contry code"></input>
      <button className="button" onClick={ButtonClick}>submit</button>
      {getData()}
    </div>
  );
};

export default Left;
