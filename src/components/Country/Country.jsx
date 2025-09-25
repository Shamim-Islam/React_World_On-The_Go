import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  // console.log(country.area.area);
  const [visited, setVisited] = useState(false);
  console.log(handleVisitedFlag);

  const handleVisited = () => {
    // very basic way
    // if(visited) {
    //   setVisited(false)
    // } else {
    //   setVisited(true)
    // }

    // 2nd way
    // visited ? setVisited(false) : setVisited(true);

    // 3rd way
    // setVisited(visited ? false : true)

    // 4th way
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    // <div className={`country ${visited && 'country-visited'}`}>
    <div className={`country ${visited ? "country-visited" : "Not-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area} -{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlag(country?.flags?.flags?.png)} className="btn-2">
        Add Visited Flags
      </button>
    </div>
  );
};

export default Country;
