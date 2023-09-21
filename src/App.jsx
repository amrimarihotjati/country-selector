// import React from "react";
import Selector from "./Selector"
import {Country, State, City} from "country-state-city";
import {useEffect, useState} from "react";


const App = () => {

  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();
  

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();
  
  
  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return(
    <section className="min-h-screen px-3 grid place-items-center pb-20 selection:text-white selection:bg-slate-400 ">
      <div>
        <div className="flex flex-wrap p-10 justify-center w-60 h-60">
        <img src="https://cdn-icons-png.flaticon.com/512/1842/1842150.png" ></img>
        </div>
        <h2 className="text-2xl font-bold text-blue-900">
          Country Selector
        </h2>
        <br />
        <div className="flex flex-wrap flex-row gap-3 bg-indigo-500 rounded-lg p-8">
          <div>
            <p className="text-white font-semibold">Country :</p>
            <div>
              <Selector 
              data={countryData} 
              selected={country} 
              setSelected={setCountry} />
            </div>
          </div>
          {state && (
          <div>
            <p className="text-white font-semibold">State :</p>
            <div>
              <Selector 
              data={stateData} 
              selected={state} 
              setSelected={setState} />
            </div>
          </div> 
          )}
          {city && (
          <div>
            <p className="text-white font-semibold">State :</p>
            <div>
              <Selector 
              data={cityData} 
              selected={city} 
              setSelected={setCity} />
            </div>
          </div> 
          )} 
        </div>
      </div>
    </section>
  )
}

export default App;