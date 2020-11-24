import React, {createContext, useState} from 'react';

export const MeContext = createContext(null);

const MeProvider = ({children}) => {
    const [meData, setMeData] = useState(null);

    return (
        <MeContext.Provider value={{meData, setMeData}}>
            {children}
        </MeContext.Provider>);
};

export default MeProvider;