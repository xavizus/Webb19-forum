import React, {createContext, useState} from 'react';

export const CountriesContext = createContext(null);

const CountriesProvider = ({children}) => {
    const [countriesData, setCountriesData] = useState(null);

    return (
        <CountriesContext.Provider value={{countriesData, setCountriesData}}>
            {children}
        </CountriesContext.Provider>);
};

export default CountriesProvider;